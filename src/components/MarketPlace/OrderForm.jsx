import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../slices/api";
import Button from "react-bootstrap/Button";
// import ReactSlider from 'react-slider'
import Property_ABI from '../../contract/property.json';
import Escrow_ABI from '../../contract/Escrow.json'
import { useAppSelector, useAppDispatch } from "../../reducer/store";
import { loadBlockchain, updatAccount } from "../../slices/web3ContractSlice";
import "../../components/MarketPlace/compo.css";
import CountdownTimer from "./countdownTimer";
import { RiFileCopyLine } from 'react-icons/ri';
import { IoCheckmarkDone } from "react-icons/io5";
import Loader from './Loader';
// import Nouislider from "nouislider-react";
//import noUiSlider from "nouislider";
//import "nouislider/distribute/nouislider.css";
//import 'nouislider/dist/nouislider.css';

//let slider;

// function destroyExistingSlider(){
//   if(slider && slider.noUiSlider){
//     slider.noUiSlider.destroy();
//   }
// }

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


const OrderForm = () => {
  const params = useParams();
  const [USDTprice, setUSDTprice] = useState(0);
  const [USDCprice, setUSDCprice] = useState(0);
  const [usdtToken, setusdtToken] = useState();
  const [isApprove, setisApprove] = useState(false);
  const [tokenType, settokenType] = useState();
  const [TokenToUSD, setTokenToUSD] = useState();
  const [buySell, setbuySell] = useState();
  const [price, setprice] = useState();
  const [quantity, setquantity] = useState();
  const [product, setProduct] = useState({});
  const [loadchain, setloadchain] = useState(null);
  const [loadEscrow, setloadEscrow] = useState();
  const [EscrowAddress, setEscrowAddress] = useState(null);
  const [tokensPrice, settokensPrice] = useState(0);
  const [datas, setdatas] = useState([]);
  const [totaltoken, settotaltoken] = useState();
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contractAddr, setcontractAddr] = useState();
  const [checkID, setcheckID] = useState();
  const [balnc, setbalnc] = useState(0);
  const [CalToken, setCalToken] = useState('');
  const [tokenQuant, settokenQuant] = useState();
  const [CalTokens, setCalTokens] = useState('');
  const [clickPrice, setclickPrice] = useState();
  const [timeLeft, setTimeLeft] = useState(CountdownTimer());
  const dispatch = useAppDispatch();
  const {
    web3,
    contract,
    accounts,
    socketContract,
    UsdtContract,
    UsdcContract,
    EscrowContract,
  } = useAppSelector((state) => state.web3Connect);

  const [isCopying, setIsCopying] = useState(false);
  const [textToCopy, setTextToCopy] = useState();
  const [checkUSDTTokens, setcheckUSDTTokens] = useState();
  const [checkUSDCTokens, setcheckUSDCTokens] = useState();


  const copyToClipboard = () => {
    // setIsCopying(true);
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopying(true);
        // alert('Text copied to clipboard');
      })
      .catch((err) => {
        setIsCopying(false);
        // console.error('Failed to copy: ', err);
      });
  };
  // console.log("USDTprice",tokensPrice)
  const UsdtApprove = async () => {
    try {
      let tokens = ((tokensPrice * quantity * 10 ** 6) / (USDTprice)).toFixed(0).toString();
      let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
      setcheckUSDTTokens(Number(tokens) + Number(fee));
      setLoading(true);
      await UsdtContract?.methods
        .approve(EscrowAddress, Number(tokens) + Number(fee))
        .send({ from: accounts[0] })
        .then(async () => {
          const QuantNo = Number(quantity * 10 ** 18).toFixed(0).toString();
          await loadEscrow?.methods
            .BuyPropertyToken(accounts[0], tokenType, QuantNo)
            .send({ from: accounts[0] });
          setLoading(false);
        })
    } catch (error) {
      setLoading(false);
      console.log("First Approve Error", error);
    }
  };

  const UsdcApprove = async () => {
    try {
      let tokens = ((tokensPrice * quantity * 10 ** 6) / (USDCprice)).toFixed(0).toString();
      let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
      setLoading(true);
      await UsdcContract?.methods
        .approve(EscrowAddress, Number(tokens) + Number(fee))
        .send({ from: accounts[0] })
        .then(async () => {
          const QuantNo = Number(quantity * 10 ** 18).toFixed(0).toString();
          await loadEscrow?.methods
            .BuyPropertyToken(accounts[0], tokenType, QuantNo)
            .send({ from: accounts[0] });
          setLoading(false);
        })
    } catch (error) {
      setLoading(false);
      console.log("Second Approve Error", error);
    }
  };
  // useEffect(() => {
  //   if (window.ethereum) {
  //     if (tokenType == 0) {
  //       let tokens = ((tokensPrice * quantity * 10 ** 14) / (USDTprice)).toFixed(0).toString();
  //       let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
  //       setCalToken(Number(tokens) + Number(fee))
  //     } else {
  //       let tokens = ((tokensPrice * quantity * 10 ** 14) / (USDCprice)).toFixed(0).toString();
  //       let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
  //       setCalToken(Number(tokens) + Number(fee))
  //     }
  //   }
  // },[])

  const CalculateValue = (_tokensPrice, _quantity) => {
    if (tokenType == 0) {
      let tokens = ((_tokensPrice * (_quantity)*1e6) / (USDTprice)).toFixed(0).toString();
      let fee = ((tokens/1e10) * buySell).toFixed(0).toString();
      // setCalToken(Number(tokens) + Number(fee))
      const num = Number(tokens) + Number(fee)
      return num;
    } else {
      let tokens = ((_tokensPrice * (_quantity)*1e6) / (USDCprice)).toFixed(0).toString();
      let fee = ((tokens / (1e10)) * buySell).toFixed(0).toString();
      // setCalToken(Number(tokens) + Number(fee))
      const num = Number(tokens) + Number(fee)
      return num;
    }
  }
  const checkNumbers = useMemo(() => {
    return CalculateValue(tokensPrice, quantity)
  }, [tokensPrice, quantity])

  // update account
  useEffect(() => {
    window.localStorage.setItem("accounts[0]", accounts[0]);
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async (data) => {
        dispatch(updatAccount(data));
        window.localStorage.setItem("data", data);
        console.log("updated Account", data);
      });
    }
  });


  // useEffect(()=>{
  // 	//destroyExistingSlider();
  // 	var slider = document.getElementById('slider');
  // 	noUiSlider.create(slider, {
  // 		start: [20, 80],
  // 		connect: true,
  // 		range: {
  // 			'min': 0,
  // 			'max': 100
  // 		}
  // 	});
  //});

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

  // get property Address
  useEffect(() => {
    if (window.ethereum) {
      const fetchProduct = async () => {
        try {
          // setLoading(true);
          const res = await axios.get(`${url}/products/find/${params.id}`);
          setProduct(res.data);
          !checkID && setcheckID(res.data.uid);
          // setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      fetchProduct();
    }
  }, [params.id, checkID])

  // get contract of property
  useEffect(() => {
    if (window.ethereum) {
      if (checkID) {
        const fetchContract = async () => {
          try {
            const contractofProperty = new web3.eth.Contract(
              Property_ABI,
              product.uid
            );
            if (loadchain == null) {
              setloadchain(contractofProperty);
            }
          } catch (err) {
            console.log(err);
          }
        };
        fetchContract();
      }
    }
  })
  
  // get contract details of property
  useEffect(() => {
    if (window.ethereum) {
      if (loadchain) {
        const fetchData = async () => {
          try {
            let completeProp = await loadchain.methods
              .getCompletePropDetails()
              .call();
            if (tokensPrice == 0) {
              settokensPrice(completeProp.PropertyDetails.TokenPrice);
            }
            setcontractAddr(completeProp.PropertyDetails.propertyAddress);
            setbuySell(completeProp.PropertyDetails.BuySellingFee);
            setdatas(completeProp);
            let TotalTokens = await loadchain.methods
              .TokenCount()
              .call();
            settotaltoken(TotalTokens);
          } catch (err) {
            console.log("Property Details Fetch error", err);
          }
        };
        fetchData();
      }
    }
  }, [loadchain])

  // get Escrow Address of property
  useEffect(() => {
    if (window.ethereum) {
      if (loadchain) {
        const fetchEscrowAdd = async () => {
          try {
            let Add = await loadchain.methods.EscrowAccount().call();
            if (EscrowAddress == null) {
              setEscrowAddress(Add);
            }
            !textToCopy && setTextToCopy(Add);
          } catch (error) {
            console.log("Ecrow Address Error", error);
          }
        }
        fetchEscrowAdd();
      }
    }
  })

  // get Escrow Contract of property
  useEffect(() => {
    if (window.ethereum) {
      if (EscrowAddress) {
        const fetchEscrow = async () => {
          try {
            const contractofEscrow = new web3.eth.Contract(
              Escrow_ABI,
              EscrowAddress
            );
            setloadEscrow(contractofEscrow);
          } catch (error) {
            console.log("Ecrow Contract Error", error);
          }
        }
        fetchEscrow();
      }
    }
  }, [EscrowAddress])

  // get Escrow Balance of property
  useEffect(() => {
    if (window.ethereum) {
      if (loadEscrow) {
        const fetchBal = async () => {
          try {
            let bal = await loadEscrow.methods.balanceOf(EscrowAddress).call();
            if (balnc == 0) {
              setbalnc((Number(bal) / 1e18).toFixed(4));
            }
          } catch (error) {
            console.log("Escrow Balance Error", error);
          }
        }
        fetchBal();
      }
    }
  })


  return (
    <>
      {/* <label className="form-label text-primary">{TokenToUSD}</label>
			<label className="form-label text-primary">{tokensPrice}</label> */}
      <form >
        {loading ? (
          <div className="text-center">
            <Button
              //  btn-outline-dark
              className="btn w-100" style={{backgroundColor:"white"}}
            >
              <Loader />
            </Button>
          </div>
        ) : (
          <>
            <div className="sell-blance">
              {datas.length > 0 ? (
                <>
                  {datas.PropertyDetails.StartSell == true || datas.PropertyDetails.Resell == true ? (
                    <label className="form-label text-prime">
                      Property Token Address:_{""}
                      <span className="">
                        {EscrowAddress?.substring(0, 10) + "...."}
                      </span>
                      <a className="" onClick={copyToClipboard} style={{ cursor: "Pointer" }}>
                        {isCopying ? (
                          <>
                            <RiFileCopyLine /> <IoCheckmarkDone />
                          </>
                        ) : (
                          <RiFileCopyLine />
                        )}
                      </a>
                    </label>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
              <div className="form-label blance">
                <span className="text-primary">Tokens Left:</span>
                <p className="text-warning" style={{ fontSize: "18px" }}>{balnc}</p>
              </div>
              <div className="input-group">
                <select
                  className=""
                  onChange={(e) => settokenType(e.target.value)}
                  required
                >
                  <option value="">Select Payable Token Types </option>
                  <option value="0">USDT</option>
                  <option value="1">USDC</option>
                </select>
                {/* <select
              className="form-control"
              onChange={(e) => settokenType(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="0">USDT</option>
              <option value="1">USDC</option>
            </select>
            <span className="input-group-text">Payable Token Types</span> */}

              </div>
            </div>
            <div className="sell-blance">
              <label className="form-label text-primary">
                Property Token Quantity
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setquantity(e.target.value)}
                  placeholder="0.00"
                />
                {tokenType == 0 ? (
                  <span className="input-group-text">
                    <span className="text-warning">
                      {/* {Number(CalToken / 1e6).toFixed(3)}</span> {""}-USDT</span> */}
                      {Number(checkNumbers / 1e6).toFixed(3)}</span> {""}-USDT</span>
                ) : (
                  <span className="input-group-text">
                    <span className="text-warning">
                      {/* {Number(CalToken / 1e6).toFixed(3)}</span> {""}-USDC</span> */}
                      {Number(checkNumbers / 1e6).toFixed(3)}</span> {""}-USDC</span>
                )}
              </div>
            </div>

            {datas.length > 0 ? (
              <>
                {datas.PropertyDetails.StartSell == true || datas.PropertyDetails.Resell == true ? (
                  <div className="sell-blance">
                    <label className="form-label text-primary">
                      Limit Price Per Token
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        // onChange={(e) => setprice(e.target.value)}
                        placeholder={Number(tokensPrice/1e8).toFixed(2)}
                      />
                      <span className="input-group-text">USD</span>
                    </div>
                  </div>
                ) : (
                  <div className="sell-blance">
                    <label className="form-label text-primary">
                      Limit Price Per Token
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setprice(e.target.value)}
                        placeholder="0.00"
                      />
                      <span className="input-group-text">USD</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <></>
            )}
        
        <div className="text-center">
          {datas.length > 0 ? (
            <>
              {datas.PropertyDetails.StartSell == true || datas.PropertyDetails.Resell == true ? (
                <>
                  {tokenType == 0 ? (
                    <Button
                      className="btn btn-primary w-75"
                      onClick={() => UsdtApprove()}
                    >
                     Buy

                    </Button>
                  ) : (
                    <Button
                      className="btn btn-primary w-75"
                      onClick={() => UsdcApprove()}
                    >
                      {" "}
                      Buy
                    </Button>
                  )}
                  {/* {isApprove == false ? (
                    <>
                      {tokenType == 0 ? (
                        <Button
                          className="btn btn-primary w-75"
                          onClick={() => UsdtApprove()}
                        >
                          Approve and Send
                        </Button>
                      ) : (
                        <Button
                          className="btn btn-primary w-75"
                          onClick={() => UsdcApprove()}
                        >
                          {" "}
                          Approve and Send
                        </Button>
                      )}
                    </>
                  ) : (
                    <>
                      <Button
                        className="btn btn-primary w-75"
                        onClick={() => BuyToken()}
                      >
                        Buy
                      </Button>
                    </>
                  )} */}
                </>
              ) : (
                <>
                  {datas.PropertyDetails.StatrtResell == true ? (
                    <>
                      {tokenType == 0 ? (
                        <Button
                          className="btn btn-primary w-75"
                          onClick={() => UsdtApprove()}
                        >
                         Buy
                        </Button>
                      ) : (
                        <Button
                          className="btn btn-primary w-75"
                          onClick={() => UsdcApprove()}
                        >
                          {" "}
                          Buy
                        </Button>
                      )}
                      {/* {isApprove == false ? (
                        <>
                          {tokenType == 0 ? (
                            <Button
                              className="btn btn-primary w-75"
                              onClick={() => UsdtApprove()}
                            >
                              Approval and Send
                            </Button>
                          ) : (
                            <Button
                              className="btn btn-primary w-75"
                              onClick={() => UsdcApprove()}
                            >
                              {" "}
                              Approval and Send
                            </Button>
                          )}
                        </>
                      ) : (
                        <>
                          <Button
                            className="btn btn-primary w-75"
                            onClick={() => BuyToken()}
                          >
                            Buy
                          </Button>
                        </>
                      )} */}
                    </>
                  ) : (
                    <>
                      <label className="btn btn-primary w-75">
                        Selling Not Start
                      </label>
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <></>
          )}
          {/* <Link className="btn btn-primary w-75" onClick={() => BuyToken()}>BUY BTC</Link> */}

          {/* <Link to={"/exchange"} className="btn btn-primary w-75">BUY BTC</Link> */}
        </div>
        </>)}
      </form>
    </>
  );
};
export default OrderForm;
