import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
import { useSelector } from "react-redux";
// import { url } from "../../slices/api";
import { url, setHeaders } from "../../slices/api";
//import {NavLink} from 'react-router-dom';
// import loadable from "@loadable/component";
// import pMinDelay from "p-min-delay";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import Marquee from "react-fast-marquee";
// import { loadBlockchain } from "../../slices/web3ContractSlice";
import { useAppDispatch, useAppSelector } from "../../reducer/store";
import { UserlimitOrder } from "../../slices/LimitOrderSlice";
// import { CONTRACT_ABIS } from "../../contract/property";
import { updatAccount } from "../../slices/web3ContractSlice";
// import Index5CoinChart from './Index5/Index5CoinChart';
//Import Components
// import { ThemeContext } from "../../../context/ThemeContext";
// import BalanceCardSlider from './Dashboard/BalanceCardSlider';
//import MorrisDonught from './Dashboard/MorrisDonught';
// import OrderForm from './Dashboard/OrderForm';
//import ServerStatusBar from './Dashboard/ServerStatusBar';
// import { LtcIcon, BtcIcon, XtzIcon, EthIcon } from './SvgIcon';

//images
// import blog4 from './../../../images/blog4.png';
// import metaverse from './../../../images/metaverse.png';
import usdt from '../../assets/images/usdt.png';
import usdc from '../../assets/images/usdc.png';
import logs from "../../assets/images/logs.png";


// const DashboardComboChart = loadable(() =>
// 	pMinDelay(import("./Dashboard/DashboardComboChart"), 1000)
// );
// const AssetsChart = loadable(() =>
// 	pMinDelay(import("./Dashboard/AssetsChart"), 1000)
// );

// const ServerStatusBar = loadable(() =>
// 	pMinDelay(import("./Dashboard/ServerStatusBar"), 1000)
// );

const pickerData = [
  { fillcolor: "var(--primary)", datatitle: "XTZ(40%)", price: "763" },
  { fillcolor: "#2A353A", datatitle: "BTC(20%)", price: "321" },
  { fillcolor: "#C0E192", datatitle: "BNB(10%)", price: "69" },
  { fillcolor: "#E085E4", datatitle: "ETH(10%)", price: "154" },
];

// const marketBlog = [
// 	{ icon: LtcIcon, classBg: 'bg-success', Name: 'LTC', },
// 	{ icon: BtcIcon, classBg: 'bg-warning', Name: 'BTC', },
// 	{ icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
// 	{ icon: EthIcon, classBg: 'bg-pink', Name: 'ETH', },
// 	{ icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
// ];

const listData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
const USDCaddr = "0x0153002d20B96532C639313c2d54c3dA09109309";
const USDTaddr = "0x80EDee6f667eCc9f63a0a6f55578F870651f06A4";
const aggregatorV3InterfaceABI = [
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
    name: "getRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      { internalType: "uint80", name: "roundId", type: "uint80" },
      { internalType: "int256", name: "answer", type: "int256" },
      { internalType: "uint256", name: "startedAt", type: "uint256" },
      { internalType: "uint256", name: "updatedAt", type: "uint256" },
      { internalType: "uint80", name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
]

const UserDashboard = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [onlysell, setonlysell] = useState([]);
  const [onlybuy, setonlybuy] = useState([]);
  const [AllMatchOrd, setAllMatchOrd] = useState([]);
  const [sentToken, setsentToken] = useState([]);
  const [sentPT, setsentPT] = useState([]);
  const [BuyPT, setBuyPT] = useState([]);
  const [SellPT, setSellPT] = useState([]);
  const [USDTprice, setUSDTprice] = useState(0);
  const [USDCprice, setUSDCprice] = useState(0);
  const [sellerId, setsellerId] = useState([]);
  const [buyerId, setbuyerId] = useState([]);
  const [buyerOrd, setbuyerOrd] = useState([]);
  const [sellerOrd, setsellerOrd] = useState([]);
  const [findsellerOrd, setfindsellerOrd] = useState(null);
  const [findbuyerOrd, setfindbuyerOrd] = useState([]);
  const [usersPerc, setUsersPerc] = useState(0);
  const [totaltoken, settotaltoken] = useState();
  const [totalNoOfProp, settotalNoOfProp] = useState();
  const [product, setProduct] = useState({});
  const [loadchain, setloadchain] = useState();
  const [datas, setdatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkID, setcheckID] = useState();
  const user = useSelector((state) => state.auth);
  const { web3, contract, accounts, socketContract } = useAppSelector(
    (state) => state.web3Connect
  );
  // const {limitOrderOffer,UserLimitOrder} = useAppSelector((state) => state.orderMatching);
  const { items: data, status } = useAppSelector((state) => state.products);
  const [modalShow, setModalShow] = useState(false);
  const auth = useSelector((state) => state.auth);

  const PriceData = [
    { icon: logs, Name: 'SEDT', Price: "51.00" },
    { icon: usdt, Name: 'USDT', Price: Number(USDTprice / 1e8).toFixed(2) },
    { icon: usdc, Name: 'USDC', Price: Number(USDCprice / 1e8).toFixed(2) },
  ];

  //  fetch USDT and USDC price
  useEffect(() => {
    if (window.ethereum) {
      if (web3) {
        const USDTPrice = async () => {
          const USDTpriceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, USDTaddr);
          USDTpriceFeed.methods.latestRoundData().call()
            .then((roundData) => {
              // const price = Number((roundData.answer) / 1e8).toFixed(3);
              if (USDTprice == 0) {
                setUSDTprice(roundData.answer);
              }
            })
        }
        USDTPrice();
      }
      if (web3) {
        const USDCPrice = async () => {
          const USDCpriceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, USDCaddr);
          USDCpriceFeed.methods.latestRoundData().call()
            .then((roundData) => {
              // const price = Number((roundData.answer) / 1e8).toFixed(3);

              if (USDCprice == 0) {
                setUSDCprice(roundData.answer);
              }
            })
        }
        USDCPrice();
      }
    }
  }, [])

  // update account
  useEffect(() => {
    // window.localStorage.setItem("accounts[0]", accounts[0]);
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async (data) => {
        dispatch(updatAccount(data));
        window.localStorage.setItem("data", data);
        // console.log("updated Account", data);
      });
    }
  });

  useEffect(() => {
    if (auth.loginStatus === "success") {
      setModalShow(true);
    }
  });

  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(`${url}/sellerOrder/findID/${accounts[0]}`)
          .then(res => {
            if(res.data.length == 0){
              let dat = [];
              for (let i = 0; i <= sellerOrd.length - 1; i++) {
                dat.push(sellerOrd[i]);
                setsentPT(dat);
              }
            }
            if (findsellerOrd.length == 0) {
              setfindsellerOrd(res.data);
            }
          })
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  });

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(`${url}/buyerOrder/findID/${accounts[0]}`)
        .then(res => {
          if(res.data.length == 0){
            let dat = [];
            for (let i = 0; i <= buyerOrd.length - 1; i++) {
              dat.push(buyerOrd[i]);
              setsentToken(dat);
            }
          }
          if (findbuyerOrd.length == 0) {
            setfindbuyerOrd(res.data);
          }
        })

      } catch (err) {
        // console.log(err);
      }
    }
    fetchData();
  });


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       await axios.get(`${url}/orderMatching/findbuyer/${accounts[0]}`, setHeaders())
  //       .then(res =>{
  //         const fetchdata = res.data.filter((da) => buyerId.includes(!da.orderId));
  //         if(BuyPT.length == 0){
  //           setBuyPT(fetchdata)
  //         }
  //       })
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, [BuyPT]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       await axios.get(`${url}/orderMatching/findSeller/${accounts[0]}`, setHeaders())
  //       .then(res =>{
  //         let dat=[];
  //         for(let i=0; i<=sellerId.length-1; i++){
  //           sellerOrd
  //         }
  //         const fetchdata = res.data.filter((da) => sellerId.includes(!da.orderId));
  //         if(SellPT.length == 0){
  //           setSellPT(fetchdata)
  //         }
  //       })
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, [SellPT]);


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       if (sentPT.length == 0) {
  //         let dat = [];
  //         for (let i = 0; i <= sellerOrd.length - 1; i++) {
  //           for (let j = 0; j <= findsellerOrd.length - 1; j++) {
  //             if (sellerOrd[i].orderId != findsellerOrd[j]._id) {
  //               if (findsellerOrd.length == 0) {
  //                 setLoading(true);
  //                 dat.push(sellerOrd[i]);
  //                 setsentPT(dat);
  //               }
  //             }
  //           }
  //           // if (findsellerOrd == null) {
  //           //   dat.push(sellerOrd[i]);
  //           //   setsentPT(dat);
  //           // } else {
  //           //   for (let j = 0; j <= findsellerOrd.length - 1; j++) {
  //           //     if (sellerOrd[i].orderId != findsellerOrd[j]._id) {
  //           //       if (findsellerOrd.length == 0) {
  //           //         setLoading(true);
  //           //         dat.push(sellerOrd[i]);
  //           //         setsentPT(dat);
  //           //       }
  //           //     }
  //           //   }
  //           // }
  //         }
  //         // if (onlysell.length == 0) {
  //         //   let onlydat = [];
  //         //   // || sellerOrd[i].SellersAddress != findsellerOrd[j].SellersAddress
  //         //   if (findsellerOrd.length == 0 ) {
  //         //     onlydat.push(sellerOrd[i]);
  //         //     setonlysell(dat);
  //         //   }
  //         // }
  //       }
  //       // }
  //     } catch (err) {
  //       // console.log(err);
  //     }
  //   }
  //   fetchData();
  // });

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       if (sentToken.length == 0) {
  //         let dat = [];
  //         for (let i = 0; i <= buyerOrd.length - 1; i++) {
  //           for (let j = 0; j <= findbuyerOrd.length - 1; j++) {
  //             if (buyerOrd[i].orderId != findbuyerOrd[j]._id) {
  //               dat.push(buyerOrd[i]);
  //               setsentToken(dat);
  //             }
  //             // if (onlybuy.length == 0) {
  //             //   let onlydat = [];
  //             //   if (buyerOrd[i].BuyersAddress != findbuyerOrd[j].BuyersAddress) {
  //             //     onlydat.push(buyerOrd[i]);
  //             //     setonlybuy(dat);
  //             //   }
  //             // }
  //           }
  //         }
  //       }
  //     } catch (err) {
  //       // console.log(err);
  //     }
  //   }
  //   fetchData();
  // });

  useEffect(() => {
    async function fetchData() {
      try {
        if (SellPT.length == 0) {
          let dat = [];
          for (let i = 0; i <= AllMatchOrd.length - 1; i++) {
            for (let j = 0; j <= findsellerOrd.length - 1; j++) {
              if (findsellerOrd[j]._id == AllMatchOrd[i].orderId) {
                dat.push(AllMatchOrd[i]);
                setSellPT(dat);
              }
            }
          }
        }
      } catch (err) {
        // console.log(err);
      }
    }
    fetchData();
  });
  useEffect(() => {
    async function fetchData() {
      try {
        if (BuyPT.length == 0) {
          let dat = [];
          for (let i = 0; i <= AllMatchOrd.length - 1; i++) {
            for (let j = 0; j <= findbuyerOrd.length - 1; j++) {
              if (AllMatchOrd[i].orderId == findbuyerOrd[j]._id) {
                dat.push(AllMatchOrd[i]);
                setBuyPT(dat);
              }
            }
          }
        }
      } catch (err) {
        // console.log(err);
      }
    }
    fetchData();
  });


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(`${url}/orderMatching/findbuyer/${accounts[0]}`, setHeaders());
  //       if (findbuyerOrd.length == 0) {
  //         if(onlybuy.length ==0){
  //           setonlybuy(res.data);
  //         }
  //       // }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // });

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(`${url}/orderMatching`, setHeaders())
          .then(res => {
            if (AllMatchOrd.length == 0) {
              setAllMatchOrd(res.data)
            }
          })
      } catch (err) {
        // console.log(err);
      }
    }
    fetchData();
  });





  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/orderMatching/findbuyer/${accounts[0]}`, setHeaders());
        if (buyerOrd.length == 0) {
          setbuyerOrd(res.data);
        }
        if (buyerOrd.length != 0) {
          let id = [];
          for (let i = 0; i <= buyerOrd.length - 1; i++) {
            id.push(buyerOrd[i].orderId);
            setbuyerId(id);
          }
        }
      } catch (err) {
        // console.log(err);
      }
    }
    fetchData();
  }, [buyerOrd]);

  useEffect(() => {
    if (window.ethereum) {
      async function fetchData() {
        try {
          // let add = []
          const res = await axios.get(`${url}/orderMatching/findSeller/${accounts[0]}`, setHeaders());

          if (sellerOrd.length == 0) {
            setsellerOrd(res.data);
          }
          if (sellerOrd.length != 0) {
            let id = [];
            for (let i = 0; i <= sellerOrd.length - 1; i++) {
              id.push(sellerOrd[i].orderId);
              setsellerId(id);
            }
          }

        } catch (err) {
          // console.log(err);
        }
      }
      fetchData();
    }
  });


  return (
    <>
      <div className="row">
        <div className="col-xxl-12">
          <div className="overflow-hidden bg-transparent dz-crypto-scroll shadow-none">
            <div className="js-conveyor-example">
              <ul className="crypto-list mr-5" id="crypto-webticker">
                <Marquee
                  speed={80}
                  loop={0}
                  pauseOnHover={true}
                >
                  {PriceData.map((item, index) => (

                    <div className="card overflow-hidden ms-4 " key={index}>
                      <div className="card-body d-flex align-items-center">
                        <div className="me-4">
                          <p className="mb-2 fs-13"><i className="fa fa-caret-up scale5 me-2 text-success" aria-hidden="true"></i>
                            Current Price {item.Name}</p>
                          <h4 className="heading mb-0">{item.Price} <span>(USD)</span></h4>
                        </div>
                        <div className="coin-img">
                          <img width="42" height="42" src={item.icon} className="img-fluid" alt="" ></img>
                        </div>
                      </div>
                    </div>
                  ))}
                </Marquee>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="previews-info-list" >
                    <div className="pre-icon">
                      <div className="row">
                        <div className="col">
                          <h3 style={{ color: "#3c0987" }}>Current Rent Balance (USD)</h3>
                        </div>
                        <label className="">SEDT Tokens for All Propjects</label>
                        {/* <label className="" style={{fontSize:"10px"}}>{escrow}</label> */}
                      </div>
                    </div>
                    <div className='' style={{ color: "#3c0987", fontSize: "20px" }}
                    ><a>$ </a></div>
                    <span className="count">
                      <h2 style={{ color: "#9568FF", fontSize: "35px" }}>12321.01
                        {/* <i className="fa fa-caret-up scale5 text-success" style={{ fontSize: "10px" }} aria-hidden="true"></i> */}
                      </h2>
                    </span>
                  </div>
                  <div className="previews-info-list" >
                    <div className="price data">
                      <span>Total Properties Vlaue</span>
                      <h4>2341 <sub>$</sub></h4>
                    </div>
                    <div className="price data">
                      <span>Current Balance</span>
                      <h4>{Number(USDTprice / 1e8).toFixed(2)} <sub>USDT</sub></h4>
                    </div>
                    <div className="price data">
                      <span>Current Balance</span>
                      <h4>{Number(USDCprice / 1e8).toFixed(2)}<sub>USDC</sub></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-12">
              <BalanceCardSlider />
              </div> */}
            {/* <div className="col-xl-12">
              <div className="card">
                <div className="card">
                  <div className="card-header border-0 align-items-start flex-wrap pb-0">
                    <div>
                      <h2 className="heading">Market Chart</h2>
                      <div className="market-data">
                        <div className="income data">
                          <span>This Month</span>
                          <h4>$29.999.00</h4>
                        </div>
                        <div className="price data">
                          <span>Price</span>
                          <h4>
                            480 <sub>- 0,5%</sub>
                          </h4>
                        </div>
                        <div className="rate data">
                          <span>Rate</span>
                          <h4>-0.0662%/hr</h4>
                        </div>
                        <div className="volume data">
                          <span>volume</span>
                          <h4>175k</h4>
                        </div>
                      </div>
                    </div>
                    <Dropdown className="dropdown custom-dropdown">
                      <Dropdown.Toggle
                        as="div"
                        className="btn sharp btn-primary tp-btn i-false"
                      >
                        <svg
                          width="6"
                          height="20"
                          viewBox="0 0 6 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.19995 10.001C5.19995 9.71197 5.14302 9.42576 5.03241 9.15872C4.9218 8.89169 4.75967 8.64905 4.55529 8.44467C4.35091 8.24029 4.10828 8.07816 3.84124 7.96755C3.5742 7.85694 3.28799 7.80001 2.99895 7.80001C2.70991 7.80001 2.4237 7.85694 2.15667 7.96755C1.88963 8.07816 1.64699 8.24029 1.44261 8.44467C1.23823 8.64905 1.0761 8.89169 0.965493 9.15872C0.854882 9.42576 0.797952 9.71197 0.797952 10.001C0.798085 10.5848 1.0301 11.1445 1.44296 11.5572C1.85582 11.9699 2.41571 12.2016 2.99945 12.2015C3.58319 12.2014 4.14297 11.9694 4.55565 11.5565C4.96832 11.1436 5.20008 10.5838 5.19995 10L5.19995 10.001ZM5.19995 3.00101C5.19995 2.71197 5.14302 2.42576 5.03241 2.15872C4.9218 1.89169 4.75967 1.64905 4.55529 1.44467C4.35091 1.24029 4.10828 1.07816 3.84124 0.967552C3.5742 0.856941 3.28799 0.800011 2.99895 0.800011C2.70991 0.800011 2.4237 0.856941 2.15667 0.967552C1.88963 1.07816 1.64699 1.24029 1.44261 1.44467C1.23823 1.64905 1.0761 1.89169 0.965493 2.15872C0.854883 2.42576 0.797953 2.71197 0.797953 3.00101C0.798085 3.58475 1.0301 4.14453 1.44296 4.55721C1.85582 4.96988 2.41571 5.20164 2.99945 5.20151C3.58319 5.20138 4.14297 4.96936 4.55565 4.5565C4.96832 4.14364 5.20008 3.58375 5.19995 3.00001L5.19995 3.00101ZM5.19995 17.001C5.19995 16.712 5.14302 16.4258 5.03241 16.1587C4.9218 15.8917 4.75967 15.6491 4.55529 15.4447C4.35091 15.2403 4.10828 15.0782 3.84124 14.9676C3.5742 14.8569 3.28799 14.8 2.99895 14.8C2.70991 14.8 2.4237 14.8569 2.15666 14.9676C1.88963 15.0782 1.64699 15.2403 1.44261 15.4447C1.23823 15.6491 1.0761 15.8917 0.965493 16.1587C0.854882 16.4258 0.797952 16.712 0.797952 17.001C0.798084 17.5848 1.0301 18.1445 1.44296 18.5572C1.85582 18.9699 2.41571 19.2016 2.99945 19.2015C3.58319 19.2014 4.14297 18.9694 4.55565 18.5565C4.96832 18.1436 5.20008 17.5838 5.19995 17L5.19995 17.001Z"
                            fill="var(--primary)"
                          />
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                        <Dropdown.Item
                          className="dropdown-item"
                          href="javascript:void(0);"
                        >
                          Option 1
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item"
                          href="javascript:void(0);"
                        >
                          Option 2
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item"
                          href="javascript:void(0);"
                        >
                          Option 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div id="tradingview_e8053" className="tranding-chart"></div>
                    <DashboardComboChart />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 assets-al col-lg-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h2 className="heading">Assets Allocation</h2>
                    <Dropdown className="dropdown custom-dropdown">
                      <Dropdown.Toggle className="btn sharp btn-primary tp-btn i-false">
                        <svg
                          width="6"
                          height="20"
                          viewBox="0 0 6 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.19995 10.001C5.19995 9.71197 5.14302 9.42576 5.03241 9.15872C4.9218 8.89169 4.75967 8.64905 4.55529 8.44467C4.35091 8.24029 4.10828 8.07816 3.84124 7.96755C3.5742 7.85694 3.28799 7.80001 2.99895 7.80001C2.70991 7.80001 2.4237 7.85694 2.15667 7.96755C1.88963 8.07816 1.64699 8.24029 1.44261 8.44467C1.23823 8.64905 1.0761 8.89169 0.965493 9.15872C0.854882 9.42576 0.797952 9.71197 0.797952 10.001C0.798085 10.5848 1.0301 11.1445 1.44296 11.5572C1.85582 11.9699 2.41571 12.2016 2.99945 12.2015C3.58319 12.2014 4.14297 11.9694 4.55565 11.5565C4.96832 11.1436 5.20008 10.5838 5.19995 10L5.19995 10.001ZM5.19995 3.00101C5.19995 2.71197 5.14302 2.42576 5.03241 2.15872C4.9218 1.89169 4.75967 1.64905 4.55529 1.44467C4.35091 1.24029 4.10828 1.07816 3.84124 0.967552C3.5742 0.856941 3.28799 0.800011 2.99895 0.800011C2.70991 0.800011 2.4237 0.856941 2.15667 0.967552C1.88963 1.07816 1.64699 1.24029 1.44261 1.44467C1.23823 1.64905 1.0761 1.89169 0.965493 2.15872C0.854883 2.42576 0.797953 2.71197 0.797953 3.00101C0.798085 3.58475 1.0301 4.14453 1.44296 4.55721C1.85582 4.96988 2.41571 5.20164 2.99945 5.20151C3.58319 5.20138 4.14297 4.96936 4.55565 4.5565C4.96832 4.14364 5.20008 3.58375 5.19995 3.00001L5.19995 3.00101ZM5.19995 17.001C5.19995 16.712 5.14302 16.4258 5.03241 16.1587C4.9218 15.8917 4.75967 15.6491 4.55529 15.4447C4.35091 15.2403 4.10828 15.0782 3.84124 14.9676C3.5742 14.8569 3.28799 14.8 2.99895 14.8C2.70991 14.8 2.4237 14.8569 2.15666 14.9676C1.88963 15.0782 1.64699 15.2403 1.44261 15.4447C1.23823 15.6491 1.0761 15.8917 0.965493 16.1587C0.854882 16.4258 0.797952 16.712 0.797952 17.001C0.798084 17.5848 1.0301 18.1445 1.44296 18.5572C1.85582 18.9699 2.41571 19.2016 2.99945 19.2015C3.58319 19.2014 4.14297 18.9694 4.55565 18.5565C4.96832 18.1436 5.20008 17.5838 5.19995 17L5.19995 17.001Z"
                            fill="var(--primary)"
                          />
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-end"
                        align="end"
                      >
                        <Dropdown.Item>Option 1</Dropdown.Item>
                        <Dropdown.Item>Option 2</Dropdown.Item>
                        <Dropdown.Item>Option 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body text-center pt-0 pb-2">
                    <div id="morris_donught" className="custome-donut">
                      <MorrisDonught />
                      <AssetsChart />
                    </div>
                    <div className="chart-items">
                      <div className="row">
                        <div className=" col-xl-12 col-sm-12">
                          <div className="text-start">
                            <span className="font-w600 mb-2 d-block text-secondary fs-14">
                              Legend
                            </span>
                            {pickerData?.map((data, ind) => (
                              <div className="color-picker" key={ind}>
                                <span className="mb-0 col-6 fs-14">
                                  <svg
                                    className="me-2"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="14"
                                      height="14"
                                      rx="4"
                                      fill={data.fillcolor}
                                    />
                                  </svg>
                                  {data.datatitle}
                                </span>
                                <h5>${data.price}</h5>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 market-previews col-sm-6">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <div>
                      <h2 className="heading">Market Previews</h2>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-0">
									{marketBlog.map((data, ind) => (
										<div className="previews-info-list" key={ind}>
											<div className="pre-icon">
												<span className={`icon-box icon-box-sm ${data.classBg}`}>
													{data.icon}
												</span>
												<div className="ms-2">
													<h6>{data.Name}/Year</h6>
													<span>March</span>
												</div>
											</div>
											<div className="count">
												<h6>120.45</h6>
												<span className={ind % 2 == 0 ? "text-success" : ""}>1,24%</span>
											</div>
										</div>
									))}

								</div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="card bg-secondary email-susb">
                  <div className="card-body text-center">
                    <div className=""></div>
                    <div className="toatal-email">
                      <h3>7,642</h3>
                      <h5>Total emails Subcriber</h5>
                    </div>
                    <Link to={"/exchange"} className="btn btn-primary email-btn">
                      Buy Coin
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-xl-4">
          <div className="row">
            {/* <div className="col-xl-12 col-sm-6">
							<div className="card h-auto">
								<div className="card-body px-0 pt-1">
									<Tab.Container defaultActiveKey="Navbuy">
										<div className="">
											<div className="buy-sell">
												<Nav className="nav nav-tabs" eventKey="nav-tab2" role="tablist">
													<Nav.Link as="button" className="nav-link" eventKey="Navbuy" type="button">buy</Nav.Link>
													<Nav.Link as="button" className="nav-link" eventKey="Navsell" type="button">sell</Nav.Link>
												</Nav>
											</div>
											<Tab.Content  >
												<Tab.Pane eventKey="Navbuy" >
													<Tab.Container defaultActiveKey="Navbuymarket">
														<div className="limit-sell">
															<Nav className="nav nav-tabs" id="nav-tab3" role="tablist">
																<Nav.Link as="button" eventKey="Navbuymarket" type="button"  >market order</Nav.Link>
																<Nav.Link as="button" eventKey="Navbuylimit" type="button" >limit order</Nav.Link>
															</Nav>
														</div>
														<Tab.Content id="nav-tabContent1">
															<Tab.Pane eventKey="Navbuymarket"></Tab.Pane>
															<Tab.Pane eventKey="Navbuylimit"></Tab.Pane>
														</Tab.Content>
														<div className="sell-element">
															<OrderForm />
														</div>
													</Tab.Container>
												</Tab.Pane>
												<Tab.Pane eventKey="Navsell">
													<Tab.Container defaultActiveKey="Navsellmarket">
														<div className="limit-sell">
															<Nav className="nav nav-tabs">
																<Nav.Link as="button" eventKey="Navsellmarket" type="button">market order</Nav.Link>
																<Nav.Link as="button" eventKey="Navselllimit" type="button" >limit order</Nav.Link>
															</Nav>
														</div>
														<Tab.Content id="nav-tabContent2">
															<Tab.Pane id="Navsellmarket" ></Tab.Pane>
															<Tab.Pane id="Navselllimit" ></Tab.Pane>
														</Tab.Content>
														<div className="sell-element">
															<OrderForm />
														</div>
													</Tab.Container>
												</Tab.Pane>
											</Tab.Content>
										</div>
									</Tab.Container>
								</div>
							</div>
						</div> */}
            <div className="col-xl-12 col-sm-6">
              <div className="card">
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div className="card-header py-2 ">
                    <h2 className="heading ml-5" >Your Orders<span> List</span></h2>
                  </div>
                </div>
                <div className="card-body pt-0 pb-3 px-3">
                  <PerfectScrollbar
                    style={{ height: "370px", overflowY: "scroll" }}
                    id="DZ_W_Todo3"
                    className="widget-media dz-scroll height370 ps ps--active-y"
                  >
                    <ul className="timeline">
                      <li>
                        {SellPT.length != 0 ? (
                          <>
                            {SellPT && SellPT.map((item, index) => (
                              <div className="timeline-panel card list-table" key={index}>
                                <div className="media me-2">
                                  <img alt="" width="50" src={logs} />
                                </div>
                                <div className="media-body mb-3">
                                  <h5 className="mb-1" style={{ fontSize: "35px" }}>
                                    {Number(item.Property_Tokens / 1e18).toFixed(2)}{" "}
                                    <span style={{ fontSize: "13px" }}>
                                      <small className="text-muted"><span class="badge badge-secondary">ID</span> {""}
                                        {(item.orderId)?.substring(0, 14) + " ...."}</small>
                                    </span>
                                  </h5>
                                  {/* <small className="text-muted">{(item.orderId)?.substring(0, 10) + "...."}</small> */}
                                  <p className="mb-1">
                                    Need to Approve Property Token = {Number(item.Property_Tokens / 1e18 + item.Sellerfee / 1e18).toFixed(3)}
                                  </p>
                                  <small className="text-muted">{new Date(item.createdAt).toDateString()}</small>
                                  <br />
                                  {item.IsBuyerApprove == true ?
                                    <Link
                                      className="btn btn-success btn-xxs shadow"
                                    >
                                      You Approved
                                    </Link>
                                    :
                                    <Link
                                      className="btn btn-outline-primary btn-xxs shadow"
                                    >
                                      Please Approve
                                    </Link>}
                                  {/* <Link
                                to="/widget-basic"
                                className="btn btn-outline-danger btn-xxs ms-1"
                              >
                                Delete
                              </Link> */}
                                </div>
                              </div>
                            ))}
                          </>
                        ) : ("")}
                        {BuyPT.length != 0 ? (
                          <>
                            {BuyPT && BuyPT.map((item, index) => (
                              <div className="timeline-panel card list-table" key={index}>
                                <div className="media me-2">
                                  <img alt="" width="50" src={logs} />
                                </div>
                                <div className="media-body mb-3">
                                  <h5 className="mb-1" style={{ fontSize: "35px" }}>
                                    {Number(item.Property_Tokens / 1e18).toFixed(2)}{" "}
                                    <span style={{ fontSize: "13px" }}>
                                      <small className="text-muted"><span class="badge badge-secondary">ID</span> {""}
                                        {(item.orderId)?.substring(0, 14) + " ...."}</small>
                                    </span>
                                  </h5>
                                  {/* <small className="text-muted">{(item.orderId)?.substring(0, 10) + "...."}</small> */}
                                  <p className="mb-1">
                                    Need to Approve {item.Type_Of_Currency == 0 ? <> USDT</> : <> USDC</>} = {Number(item.Calculate_Tokens + item.Buyerfee / 1e8).toFixed(4)}
                                  </p>
                                  <small className="text-muted">{new Date(item.createdAt).toDateString()}</small>
                                  <br />
                                  {item.IsBuyerApprove == true ?
                                    <Link
                                      className="btn btn-success btn-xxs shadow"
                                    >
                                      You Approved
                                    </Link>
                                    :
                                    <Link
                                      className="btn btn-outline-primary btn-xxs shadow"
                                    >
                                      Please Approve
                                    </Link>}
                                  {/* <Link
                                to="/widget-basic"
                                className="btn btn-outline-danger btn-xxs ms-1"
                              >
                                Delete
                              </Link> */}
                                </div>
                              </div>
                            ))}
                          </>
                        ) : ("")}

                        {sentPT.length != 0 ? (
                          <>
                            {sentPT && sentPT.map((item, index) => (
                              <div className="timeline-panel card list-table" key={index}>
                                <div className="media me-2">
                                  <img alt="" width="50" src={logs} />
                                </div>
                                <div className="media-body mb-3">
                                  <h5 className="mb-0" style={{ fontSize: "35px" }}>
                                    {Number(item.Property_Tokens / 1e18).toFixed(2)}{" "}
                                    {item.IsBuyerApprove == true ? (
                                      <>
                                        <span className="text-success">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                          </svg>
                                        </span>
                                      </>) : (
                                      <>
                                        <span class="badge badge-secondary">Not Approve</span>
                                      </>)}
                                  </h5>
                                  {item.IsBuyerApprove == true ? (
                                    <>
                                      <small className="text-muted mt-0">Now you can transfer</small>
                                    </>) : (
                                    <>
                                      <small className="text-muted mt-0">Please Wait for buyer Approval</small>
                                    </>)}
                                  <br />
                                  <span style={{ fontSize: "13px" }}>
                                    <small className="text-muted"><span class="badge badge-secondary">ID</span> {""}
                                      {(item.orderId)?.substring(0, 14) + " ...."}</small>
                                  </span>
                                  <p className="mb-1">
                                    Property Tokens = {Number((item.Property_Tokens + item.Sellerfee) / 1e18).toFixed(4)}
                                  </p>
                                  {/* <small className="text-muted">{new Date(item.createdAt).toDateString()}</small> */}

                                  {item.IsBuyerApprove == true ?
                                    <Link
                                      className="btn btn-success btn-xxs shadow btn-sm text-end"
                                    >``
                                      Sell
                                    </Link>
                                    :
                                    <Link
                                      className="btn btn-outline-primary btn-xxs shadow btn-sm text-end"
                                    >
                                      Wait . . .
                                    </Link>}
                                  {/* <Link
                                to="/widget-basic"
                                className="btn btn-outline-danger btn-xxs ms-1"
                              >
                                Delete
                              </Link> */}
                                </div>
                              </div>
                            ))}
                          </>
                        ) : <></>}

                        {sentToken.length != 0 ? (
                          <>
                            {sentToken && sentToken.map((item, index) => (
                              <div className="timeline-panel card list-table" key={index}>
                                <div className="media me-2">
                                  <img alt="" width="50" src={logs} />
                                </div>
                                <div className="media-body mb-3">
                                  <h5 className="mb-0" style={{ fontSize: "35px" }}>
                                    {Number(item.Property_Tokens / 1e18).toFixed(2)}{" "}
                                    {item.IsBuyerApprove == true ? (
                                      <>
                                        <span className="text-success">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                          </svg>
                                        </span>
                                      </>) : (
                                      <>
                                        <span class="badge badge-secondary">Not Approve</span>
                                      </>)}
                                  </h5>
                                  {item.IsBuyerApprove == true ? (
                                    <>
                                      <small className="text-muted mt-0">Now you can transfer</small>
                                    </>) : (
                                    <>
                                      <small className="text-muted mt-0">Please Wait for buyer Approval</small>
                                    </>)}
                                  <br />
                                  <span style={{ fontSize: "13px" }}>
                                    <small className="text-muted"><span class="badge badge-secondary">ID</span> {""}
                                      {(item.orderId)?.substring(0, 14) + " ...."}</small>
                                  </span>
                                  <p className="mb-1">
                                    Property Tokens = {Number((item.Property_Tokens + item.Sellerfee) / 1e18).toFixed(4)}
                                  </p>
                                  {/* <small className="text-muted">{new Date(item.createdAt).toDateString()}</small> */}

                                  {item.IsBuyerApprove == true ?
                                    <Link
                                      className="btn btn-success btn-xxs shadow btn-sm text-end"
                                    >``
                                      Buy
                                    </Link>
                                    :
                                    <Link
                                      className="btn btn-outline-primary btn-xxs shadow btn-sm text-end"
                                    >
                                      Wait . . .
                                    </Link>}
                                  {/* <Link
                                to="/widget-basic"
                                className="btn btn-outline-danger btn-xxs ms-1"
                              >
                                Delete
                              </Link> */}
                                </div>
                              </div>
                            ))}
                          </>
                        ) : <></>}
                      </li>
                    </ul>
                  </PerfectScrollbar>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-12 col-sm-6">
              <div className="card">
                <div className="card-header py-2">
                  <h2 className="heading">
                    Order Book <span>(BTC/USDT)</span>
                  </h2>
                </div>
                <div className="card-body pt-0 pb-3 px-2">
                  <Tab.Container defaultActiveKey="Openorder">
                    <nav className="buy-sell style-1">
                      <Nav className=" nav-tabs" id="nav-tab1" role="tablist">
                        <Nav.Link
                          as="button"
                          className="nav-link "
                          eventKey="Openorder"
                          type="button"
                        >
                          Open Orders
                        </Nav.Link>
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          eventKey="Orderhistory"
                          type="button"
                        >
                          Order History
                        </Nav.Link>
                      </Nav>
                    </nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="Openorder">
                        <div className="list-row-head">
                          <span>Price</span>
                          <span>Size</span>
                          <span className="text-end">Total</span>
                        </div>
                        <div className="list-table danger">
                          {listData?.map((data, i) => (
                            <div className="list-row" key={i}>
                              <span>19852.63</span>
                              <span>0.050300</span>
                              <span className="text-end">2.362877</span>
                              <div className="bg-layer"></div>
                            </div>
                          ))}
                        </div>
                        <div className="list-bottom-info">
                          <h6 className="text-danger mb-0">
                            19858.19 <i className="fa-solid fa-caret-up"></i>
                          </h6>
                        </div>
                        <div className="list-table success">
                          {listData?.map((data, i) => (
                            <div className="list-row" key={i}>
                              <span>19852.63</span>
                              <span>0.050300</span>
                              <span className="text-end">2.362877</span>
                              <div className="bg-layer"></div>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Orderhistory">
                        <div className="list-row-head">
                          <span>Price</span>
                          <span>Size</span>
                          <span className="text-end">Total</span>
                        </div>
                        <div className="list-table danger">
                          {listData?.map((data, i) => (
                            <div className="list-row" key={i}>
                              <span>19852.63</span>
                              <span>0.050300</span>
                              <span className="text-end">2.362877</span>
                              <div className="bg-layer"></div>
                            </div>
                          ))}
                        </div>
                        <div className="list-bottom-info">
                          <h6 className="text-danger mb-0">
                            19858.19 <i className="fa-solid fa-caret-up"></i>
                          </h6>
                        </div>
                        <div className="list-table success">
                          {listData?.map((data, i) => (
                            <div className="list-row" key={i}>
                              <span>19852.63</span>
                              <span>0.050300</span>
                              <span className="text-end">2.362877</span>
                              <div className="bg-layer"></div>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-12 col-sm-6 server-chart">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h2 className="heading mb-0">Server Status</h2>
                </div>
                <div className="card-body pt-0 custome-tooltip">
                  <div className="d-flex server-status">
                    <div>
                      <span>Country</span>
                      <h4 className="fs-14 mb-0">Indonesia</h4>
                    </div>
                    <div>
                      <span>Domain</span>
                      <h4 className="fs-14 mb-0">website.com</h4>
                    </div>
                    <div>
                      <span>
                        <i className="fa-solid fa-caret-up text-secondary scale-2"></i>
                      </span>
                      <h4 className="fs-14 mb-0">2.0 mbps</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Open modal
        </button>
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div class="modal-body">Modal body..</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {modalShow === true ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Modal Title</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setModalShow(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setModalShow(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setModalShow(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null} */}
      </div>
    </>
  );
};
export default UserDashboard;
