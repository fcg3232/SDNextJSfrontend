<<<<<<< HEAD
import React, { useEffect, useState, useMemo } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
import { Nav, Tab, Modal } from "react-bootstrap";
import OrderForm from "./OrderForm";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import { url, setHeaders } from "../../slices/api";
=======
import { url } from "../../slices/api";
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
import Property_ABI from '../../contract/property.json';
import { useAppSelector, useAppDispatch } from "../../reducer/store";
import { loadBlockchain, updatAccount } from "../../slices/web3ContractSlice";
import SellerOrder from "./SellerOrder";
import BuyerOrder from "./BuyerOrder";
import CountdownTimer from "./countdownTimer";
import Escrow_ABI from '../../contract/Escrow.json'
<<<<<<< HEAD
import { limitOrderOfferCreate } from "../../slices/LimitOrderSlice";

// import { IoJournalSharp } from "react-icons/io5";
// const listData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const convertTime = function (timestamp, separator) {
  const pad = function (input) { return input < 10 ? "0" + input : input; };
  const date = timestamp ? new Date(timestamp * 1000) : new Date();
  return [
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds())
  ].join(typeof separator !== 'undefined' ? separator : ':');
}
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
=======
const listData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf

const convertTime = function (timestamp, separator) {
  const pad = function (input) { return input < 10 ? "0" + input : input; };
  const date = timestamp ? new Date(timestamp * 1000) : new Date();
  return [
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds())
  ].join(typeof separator !== 'undefined' ? separator : ':');
}
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

const Sidebar = () => {
  const params = useParams();
  // const [usdtToken, setusdtToken] = useState();
  // const [isApprove, setisApprove] = useState(false);
  // const [tokenType, settokenType] = useState();
  const [TokenToUSD, setTokenToUSD] = useState();
  const [price, setprice] = useState();
  // const [quantity, setquantity] = useState();
  const [product, setProduct] = useState({});
  const [loadchain, setloadchain] = useState(null);
  const [tokensPrice, settokensPrice] = useState(0);
  const [datas, setdatas] = useState([]);
  const [buyerOrd, setbuyerOrd] = useState([]);
  const [sellerOrd, setsellerOrd] = useState([]);
  const [totaltoken, settotaltoken] = useState();
  const [loading, setLoading] = useState(false);
  const [contractAddr, setcontractAddr] = useState();
  const [checkID, setcheckID] = useState();
<<<<<<< HEAD
  const [loadEscrow, setloadEscrow] = useState(null);
  const [EscrowAddress, setEscrowAddress] = useState(null);
=======
  const [loadEscrow, setloadEscrow] = useState();
  const [EscrowAddress, setEscrowAddress] = useState();
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
  const [sellerInfo, setsellerInfo] = useState([]);
  const [BuyerInfo, setBuyerInfo] = useState([]);
  const [totalSeller, settotalSeller] = useState();
  const [SellerAdd, setSellerAdd] = useState([]);
  const [totalBuyer, settotalBuyer] = useState();
<<<<<<< HEAD
  const [balnc, setbalnc] = useState(0);
=======
  const [balnc, setbalnc] = useState('');
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
  const [TextToCopy, setTextToCopy] = useState();
  const [contactModal, setContactModal] = useState(false);
  const [contactsModal, setContactsModal] = useState(false);
  const [clickData, setclickData] = useState();
  const [clickIndex, setclickIndex] = useState();
  const [clickPrice, setclickPrice] = useState();
  const [clickToken, setclickToken] = useState();
  const [tokenType, settokenType] = useState();
<<<<<<< HEAD
  // const [SelltokenType, setSelltokenType] = useState();
  // const [BuytokenType, setBuytokenType] = useState();
  const [tokenTypeAcc, settokenTypeAcc] = useState(null);
=======
  const [tokenTypeAcc, settokenTypeAcc] = useState();
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
  const [tokenQuant, settokenQuant] = useState();
  const [USDTprice, setUSDTprice] = useState('');
  const [USDCprice, setUSDCprice] = useState('');
  const [CalToken, setCalToken] = useState('');
  const [CalTokens, setCalTokens] = useState('');
  const [buyerAddres, setbuyerAddres] = useState('');
<<<<<<< HEAD
  const [buySell, setbuySell] = useState();
  const [ordersId, setorderId] = useState();
=======
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
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
  const { items: data } = useAppSelector((state) => state.products);
<<<<<<< HEAD
  const { buyerOffer } = useAppSelector((state) => state.buyerOrder);
  const { sellerOffer } = useAppSelector((state) => state.sellerOrder);
=======
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
  const [checkTokens, setcheckTokens] = useState();
// console.log("sellerOffer",sellerOffer)

<<<<<<< HEAD
  const ModleData = (_index, _price, _token, _type, _add, _id) => {
    setContactModal(true);
    setclickIndex(_index);
=======
  const ModleData = (_data, _index, _price, _token, _type, _add) => {
    setContactModal(true);
    setclickIndex(_index);
    setclickData(_data);
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
    setclickPrice(_price);
    setclickToken(_token);
    settokenTypeAcc(_type);
    setbuyerAddres(_add);
<<<<<<< HEAD
    setorderId(_id)
  }


  const ModleDatas = (_index, _price, _token, _add, _id) => {
    setContactsModal(true);
    setclickIndex(_index);
    // setclickData(_data);
    setclickPrice(_price);
    setclickToken(_token);
    setbuyerAddres(_add);
    setorderId(_id);
  }

  // console.log("buyerOffer",buyerOffer)

  const Sell = () => {
    const QuantNo = (tokenQuant * 1e18);
    const Sellersfee = ((QuantNo / 1e10) * buySell);
    const Buyersfee = ((checkNumbers / 1e10) * buySell);
    // const total = (QuantNo + Sellerfee);
    dispatch(
      limitOrderOfferCreate({
        orderId: ordersId,
        PropertyAddress: product.uid,
        BuyersAddress: buyerAddres,
        SellersAddress: accounts[0],
        Type_Of_Currency: tokenTypeAcc,
        Property_Tokens: QuantNo,
        Calculate_Tokens: checkNumbers,
        Price_of_Tokens: clickPrice,
        Buyerfee: Buyersfee,
        Sellerfee: Sellersfee,
      })
    );
  };

  const Buy = () => {
    if (tokenType == 0) {
      const QuantNo = (tokenQuant * 1e18);
      const Sellersfee = ((QuantNo / 1e10) * buySell);
      const Buyersfee = (calculatedNum * buySell) / 1e2;
      dispatch(
        limitOrderOfferCreate({
          orderId: ordersId,
          PropertyAddress: product.uid,
          BuyersAddress: accounts[0],
          SellersAddress: buyerAddres,
          Type_Of_Currency: tokenType,
          Property_Tokens: QuantNo,
          Calculate_Tokens: calculatedNum,
          Price_of_Tokens: clickPrice,
          Buyerfee: Buyersfee,
          Sellerfee: Sellersfee,
        })
      );
    }
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(`${url}/buyerOrder}`);

  //       if (buyerOrd.length == 0) {
  //         setbuyerOrd(res.data);
  //       }

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, [buyerOrd]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(`${url}/sellerOrder}`);

  //       if (sellerOrd.length == 0) {
  //         setsellerOrd(res.data);
  //       }

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, [sellerOrd]);

  // const Buy = async () => {
  //   try {
  //     let tokens = (CalTokens * (10 ** 6)).toFixed(0).toString();
  //     if (tokenType == 0 || tokenTypeAcc == 0) {
  //       await UsdtContract?.methods
  //         .approve(EscrowAddress, Number(tokens))
  //         .send({ from: accounts[0] })
  //         .then(async () => {
  //           const QuantNo = Number(tokenQuant * 10 ** 18).toFixed(0).toString();
  //           await loadEscrow?.methods
  //             .Buy(accounts[0], buyerAddres, clickIndex, tokenTypeAcc, QuantNo)
  //             .send({ from: accounts[0] })
  //           // .then(async () => {
  //           //   await axios.get(`${url}/products/update/${EscrowAddress}`);
  //           // })
  //         })
  //     } else {
  //       await UsdcContract?.methods
  //         .approve(EscrowAddress, Number(tokens))
  //         .send({ from: accounts[0] })
  //         .then(async () => {
  //           const QuantNo = Number(tokenQuant * 10 ** 18).toFixed(0).toString();
  //           await loadEscrow?.methods
  //             .Buy(accounts[0], buyerAddres, clickIndex, tokenType, QuantNo)
  //             .send({ from: accounts[0] })
  //             .then(async () => {
  //               await axios.get(`${url}/products/update/${EscrowAddress}`);
  //             })
  //         })
  //     }
  //   } catch (error) {
  //     console.log("BuyerOffer Error", error);
  //   }
  // };

  // const Sell = async () => {
  //   try {
  //     // let tokens = (CalTokens *10 ** 18).toFixed(0).toString();
  //     const QuantNo = (tokenQuant * 1e18).toFixed(0).toString();
  //     const fee = ((QuantNo / 1e10) * buySell).toFixed(0).toString();
  //     const total = (Number(QuantNo) + Number(fee) + Number(fee)).toFixed(0).toString();
  //     await loadEscrow?.methods
  //       .approve(EscrowAddress, total)
  //       .send({ from: accounts[0] })
  //       .then(async () => {
  //         await loadEscrow.methods
  //           .Sell(accounts[0], buyerAddres, clickIndex, tokenTypeAcc, (tokenQuant * 1e18).toFixed(0).toString())
  //           .send({ from: accounts[0] })
  //           .then(async () => {
  //             // await axios.get(`${url}/products/update/${EscrowAddress}`);
  //           })
  //       })
  //   } catch (error) {
  //     console.log("BuyerOffer Error", error);
  //   }
  // };

  //  fetch USDT and USDC price
=======
  }


  const ModleDatas = (_data, _index, _price, _token, _add) => {
    setContactsModal(true);
    setclickIndex(_index);
    setclickData(_data);
    setclickPrice(_price);
    setclickToken(_token);
    setbuyerAddres(_add);
  }

  console.log("BuyerInfo",BuyerInfo)
  console.log("SellerAdd",totalSeller)
  // const UsdtApprove = async () => {
  //   try {
  //     let tokens = ((tokensPrice * quantity * 10 ** 14) / (USDTprice)).toFixed(0).toString();
  //     let fee = ((CalTokens / (10 ** 10)) * buySell).toFixed(0).toString();
  //     setcheckUSDTTokens(Number(tokens) + Number(fee));
  //     await UsdtContract?.methods
  //       .approve(EscrowAddress, Number(tokens) + Number(fee))
  //       .send({ from: accounts[0] })
  //       .then(async () => {
  //         const QuantNo = Number(quantity * 10 ** 18).toFixed(0).toString();
  //         await loadEscrow?.methods
  //           .BuyPropertyToken(accounts[0], tokenType, QuantNo)
  //           .send({ from: accounts[0] });
  //       })
  //     setisApprove(true);
  //   } catch (error) {
  //     console.log("First Approve Error", error);
  //   }
  // };
  const Buy = async () => {
    try {
      let tokens = (CalTokens * (10 ** 6)).toFixed(0).toString();
      if (tokenType == 0 || tokenTypeAcc == 0) {
        await UsdtContract?.methods
          .approve(EscrowAddress, Number(tokens))
          .send({ from: accounts[0] })
          .then(async () => {
            const QuantNo = Number(tokenQuant * 10 ** 18).toFixed(0).toString();
            await loadEscrow?.methods
              .Buy(accounts[0], buyerAddres, clickIndex, tokenType, QuantNo)
              .send({ from: accounts[0] });
          })
      } else {
        await UsdcContract?.methods
          .approve(EscrowAddress, Number(tokens))
          .send({ from: accounts[0] })
          .then(async () => {
            const QuantNo = Number(tokenQuant * 10 ** 18).toFixed(0).toString();
            await loadEscrow?.methods
              .Buy(accounts[0], buyerAddres, clickIndex, tokenType, QuantNo)
              .send({ from: accounts[0] });
          })
      }
    } catch (error) {
      console.log("BuyerOffer Error", error);
    }
  };

  const Sell = async () => {
    try {
      let tokens = (CalTokens * (10 ** 6)).toFixed(0).toString();
      if (tokenType == 0 || tokenTypeAcc == 0) {
        await UsdtContract?.methods
          .approve(EscrowAddress, Number(tokens))
          .send({ from: accounts[0] })
          .then(async () => {
            const QuantNo = Number(tokenQuant * 10 ** 18).toFixed(0).toString();
            await loadEscrow?.methods
              .Sell(accounts[0], buyerAddres, clickIndex, tokenTypeAcc, QuantNo)
              .send({ from: accounts[0] });
          })
      } else {
        await UsdcContract?.methods
          .approve(EscrowAddress, Number(tokens))
          .send({ from: accounts[0] })
          .then(async () => {
            const QuantNo = Number(tokenQuant * 10 ** 18).toFixed(0).toString();
            await loadEscrow?.methods
              .Sell(accounts[0], buyerAddres, clickIndex, tokenTypeAcc, QuantNo)
              .send({ from: accounts[0] });
          })
      }
    } catch (error) {
      console.log("BuyerOffer Error", error);
    }
  };

>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
  useEffect(() => {
    if (window.ethereum) {
      if (web3) {
        const USDTPrice = async () => {
          const USDTpriceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, USDTaddr);
          USDTpriceFeed.methods.latestRoundData().call()
            .then((roundData) => {
              // const price = Number((roundData.answer) / 1e8).toFixed(3);
<<<<<<< HEAD
              if (USDTprice == 0) {
                setUSDTprice(roundData.answer);
              }
=======
              setUSDTprice(roundData.answer);
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
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
<<<<<<< HEAD

              if (USDCprice == 0) {
                setUSDCprice(roundData.answer);
              }
=======
              setUSDCprice(roundData.answer);
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
            })
        }
        USDCPrice();
      }
<<<<<<< HEAD
    }
  }, [])

  const CalculateValues = (_clickPrice, _tokenQuant) => {
    if (tokenType == 0) {
      let tokens = ((Number(_clickPrice) * Number(_tokenQuant)) / (USDTprice));
      // let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
      // setCalTokens(Number(tokens))
      const num = Number(tokens);
      return num;
    } else {
      let tokens = ((Number(_clickPrice) * Number(_tokenQuant)) / (USDCprice));
      // let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
      // setCalTokens(Number(tokens));
      const num = Number(tokens);
      return num;
    }
  }
  const CalculateValue = (_clickPrice, _tokenQuant) => {
    if (tokenTypeAcc == 0) {
      let tokens = ((Number(_clickPrice) * Number(_tokenQuant)) / (USDTprice));
      // let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
      // setCalTokens(Number(tokens))
      const num = Number(tokens);
      return num;
    } else {
      let tokens = ((Number(_clickPrice) * Number(_tokenQuant)) / (USDCprice));
      // let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
      // setCalTokens(Number(tokens));
      const num = Number(tokens);
      return num;
    }
  }
  const checkNumbers = useMemo(() => {
    return CalculateValue(clickPrice, tokenQuant)
  }, [clickPrice, tokenQuant])

  const calculatedNum = useMemo(() => {
    return CalculateValues(clickPrice, tokenQuant)
  }, [clickPrice, tokenQuant])
=======
      // setCalToken(Number(clickPrice) * Number(tokenQuant))
      if (tokenType == 0) {
        let tokens = ((Number(clickPrice) * Number(tokenQuant) * 10 ** 8) / (USDTprice)).toFixed(0).toString();
        // let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
        setCalTokens(Number(tokens))
      } else {
        let tokens = ((Number(clickPrice) * Number(tokenQuant) * 10 ** 8) / (USDCprice)).toFixed(0).toString();
        // let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
        setCalTokens(Number(tokens))
      }
      const timer = setTimeout(() => {
        setTimeLeft(CountdownTimer());
      }, 1000);
      return () => clearTimeout(timer);
      // timeLeft,
    }
  }, [timeLeft])
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf

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
<<<<<<< HEAD

  // get property Address
  useEffect(() => {
=======
  // SellersInformation
  useEffect(() => {
    // dispatch(loadBlockchain());
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
    if (window.ethereum) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const res = await axios.get(`${url}/products/find/${params.id}`);
          setProduct(res.data);
          !checkID && setcheckID(res.data.uid);
          setLoading(false);
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
<<<<<<< HEAD
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
            let Add = await loadchain.methods
              .EscrowAccount()
              .call();
            if (EscrowAddress == null) {
              setEscrowAddress(Add);
            }
            !TextToCopy && setTextToCopy(Add);
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
            if (loadEscrow == null) {
              setloadEscrow(contractofEscrow);
            }
          } catch (error) {
            console.log("Ecrow Contract Error", error);
          }
        }
        fetchEscrow();
      }
    }
  })

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

  // // get Buyers 
  // useEffect(() => {
  //   if (window.ethereum) {
  //     if (loadEscrow) {
  //       const fetchBuyer = async () => {
  //         try {
  //           let tBuyer = await loadEscrow.methods.TotalBuyers().call();
  //           settotalSeller(tBuyer);
  //           if (tBuyer) {
  //             let add = []
  //             for (let i = 0; i <= tBuyer - 1; i++) {
  //               let addreses = await loadEscrow.methods.buyersAddress(i).call();
  //               add.push(addreses);
  //               setSellerAdd(add);
  //             }
  //             let info = [];
  //             if (BuyerInfo.length == 0) {
  //               for (let i = 0; i <= add.length - 1; i++) {
  //                 // let addrs= add[i];
  //                 // for (let j=0 ; j <= tBuyer-1; j++) {
  //                 await loadEscrow.methods.GetBuyerOffer(add[i]).call()
  //                   .then(async (addreseinfo) => {
  //                     info.push(addreseinfo);
  //                     setBuyerInfo(info);
  //                   })
  //                 // }
  //               }
  //             }
  //           }
  //         } catch (error) {
  //           console.log("Fetch Buyers order Error", error);
  //         }
  //       }
  //       fetchBuyer();
  //     }
  //   }
  // })

  // // get Sellers 
  // useEffect(() => {
  //   if (window.ethereum) {
  //     if (loadEscrow) {
  //       const fetchSellers = async () => {
  //         try {
  //           let tSeller = await loadEscrow.methods.TotalSellers().call();
  //           // settotalSeller(tSeller);
  //           if (tSeller) {
  //             let add = []
  //             for (let i = 0; i <= tSeller; i++) {
  //               let addreses = await loadEscrow.methods.sellersAddress(i).call();
  //               add.push(addreses);
  //               // setSellerAdd(add);
  //             }
  //             let info = []
  //             // for (let i = 0; i <= add.length; i++) {
  //             for (let j = 0; j <= tSeller - 1; j++) {
  //               let addreseinfo = await loadEscrow.methods.GetSellerOffer(add[j]).call();
  //               info.push(addreseinfo);
  //               setsellerInfo(info);
  //               // }
  //             }
  //           }
  //         } catch (error) {
  //           console.log("Fetch Sellers order Error", error);
  //         }
  //       }
  //       fetchSellers();
  //     }
  //   }
  // })

  // useEffect(() => {
  //   // if (window.ethereum) {
  //   //   const fetchSellers = async () => {
  //   //     try {
  //   //       if (loadEscrow) {
  //   //         let tSeller = await loadEscrow.methods.TotalSellers().call();
  //   //         // settotalSeller(tSeller);
  //   //         if (tSeller) {
  //   //           let add = []
  //   //           for (let i = 0; i <= tSeller; i++) {
  //   //             let addreses = await loadEscrow.methods.sellersAddress(i).call();
  //   //             add.push(addreses);
  //   //             // setSellerAdd(add);
  //   //           }
  //   //           let info = []
  //   //           // for (let i = 0; i <= add.length; i++) {
  //   //             // for (let j = 0; j <= tSeller-1; j++) {
  //   //               let addreseinfo = await loadEscrow.methods.SellersInformation('0x7BB0c04682Bc957827fdF14a7Cc07A9C350C7C08', 0).call();
  //   //               info.push(addreseinfo);
  //   //               setsellerInfo(info);
  //   //             // }
  //   //           // }
  //   //         }
  //   //       }
  //   //     } catch (error) {
  //   //       console.log("Fetch Sellers order Error", error);
  //   //     }
  //   //   }
  //   //   fetchSellers();

  //   //   const fetchBuyer = async () => {
  //   //     try {
  //   //       if (loadEscrow) {
  //   //         let tBuyer = await loadEscrow.methods.TotalBuyers().call();
  //   //         settotalSeller(tBuyer);
  //   //         if (tBuyer) {
  //   //           let add = []
  //   //           for (let i = 0; i <= tBuyer-1; i++) {
  //   //             let addreses = await loadEscrow.methods.buyersAddress(i).call();
  //   //             add.push(addreses);
  //   //             setSellerAdd(add.length-1);
  //   //           }
  //   //           let info = [];
  //   //           for (let i = 0; i <= add.length-1; i++) {
  //   //             // for (let j=0 ; j <= tBuyer-1; j++) {
  //   //               await loadEscrow.methods.BuyersInfor(add[i], 0).call()
  //   //               .then(async (addreseinfo) => {
  //   //                 info.push( addreseinfo);
  //   //                 setBuyerInfo(info);
  //   //               })
  //   //             }
  //   //           // }
  //   //         }
  //   //       }
  //   //     } catch (error) {
  //   //       console.log("Fetch Buyers order Error", error);
  //   //     }
  //   //   }
  //   //   fetchBuyer();
  //   // }
  //   //    const timer = setTimeout(() => {
  //   //   setTimeLeft(CountdownTimer());
  //   // }, 10000);
  //   // return () => clearTimeout(timer);
  //   // timeLeft
  //   if (window.ethereum) {
  //     if (loadEscrow) {
  //       // setInterval(() => {
  //         const fetchSellers = async () => {
  //           try {
  //             let tSeller = await loadEscrow.methods.TotalSellers().call();
  //             // settotalSeller(tSeller);
  //             if (tSeller) {
  //               let add = []
  //               for (let i = 0; i <= tSeller; i++) {
  //                 let addreses = await loadEscrow.methods.sellersAddress(i).call();
  //                 add.push(addreses);
  //                 // setSellerAdd(add);
  //               }
  //               let info = []
  //               // for (let i = 0; i <= add.length; i++) {
  //               // for (let j = 0; j <= tSeller-1; j++) {
  //               let addreseinfo = await loadEscrow.methods.SellersInformation(
  //                 '0x7BB0c04682Bc957827fdF14a7Cc07A9C350C7C08', 
  //                 0).call();
  //               info.push(addreseinfo);
  //               setsellerInfo(info);
  //               // }
  //               // }
  //             }
  //           } catch (error) {
  //             console.log("Fetch Sellers order Error", error);
  //           }
  //         }
  //         fetchSellers();

  //       // }, 10000);
  //     }

  //   }
  // })
=======
        const contractofProperty = new web3.eth.Contract(
          Property_ABI,
          product.uid
        );
        !loadchain && setloadchain(contractofProperty);
        if (loadchain) {
          const fetchData = async () => {
            try {
              let completeProp = await loadchain.methods
                .getCompletePropDetails()
                .call();
              settokensPrice(completeProp.PropertyDetails.TokenPrice);
              setcontractAddr(completeProp.PropertyDetails.propertyAddress);
              setdatas(completeProp);
              let TotalTokens = await contractofProperty.methods
                .TokenCount()
                .call();
              settotaltoken(TotalTokens);
            } catch (err) {
              console.log(err);
            }
          };
          fetchData();
          const fetchEscrowAdd = async () => {
            try {
              let Add = await contractofProperty.methods
                .EscrowAccount()
                .call();
              setEscrowAddress(Add);
              setTextToCopy(Add);
            } catch (error) {
              console.log("Ecrow Address Error", error);
            }
          }
          fetchEscrowAdd();
          if (EscrowAddress) {
            const fetchEscrow = async () => {
              try {
                const contractofEscrow = new web3.eth.Contract(
                  Escrow_ABI,
                  EscrowAddress
                );
                setloadEscrow(contractofEscrow);
                let bal = await contractofEscrow.methods.balanceOf(EscrowAddress).call();
                setbalnc((Number(bal) / 1e18).toFixed(4));
              } catch (error) {
                console.log("Ecrow Contract Error", error);
              }
            }
            fetchEscrow();
            const fetchSellers = async () => {
              try {
                if (loadEscrow) {
                  let tSeller = await loadEscrow.methods.TotalSellers().call();
                  // settotalSeller(tSeller);
                  if (tSeller) {
                    let add = []
                    for (let i = 0; i <= tSeller; i++) {
                      let addreses = await loadEscrow.methods.sellersAddress(i).call();
                      add.push(addreses);
                      // setSellerAdd(add);
                    }
                    let info = []
                    for (let i = 0; i <= add.length; i++) {
                      // for (let j = 0; j <= add[i].length; j++) {
                        let addreseinfo = await loadEscrow.methods.SellersInformation(add[i], 0).call();
                        info.push(addreseinfo);
                        setsellerInfo(info);
                      // }
                    }
                  }
                }
              } catch (error) {
                console.log("Fetch Sellers order Error", error);
              }
            }
            fetchSellers();

            const fetchBuyer = async () => {
              try {
                if (loadEscrow) {
                  let tBuyer = await loadEscrow.methods.TotalBuyers().call();
                  settotalSeller(tBuyer);
                  if (tBuyer) {
                    let add = []
                    for (let i = 0; i <= tBuyer-1; i++) {
                      let addreses = await loadEscrow.methods.buyersAddress(i).call();
                      add.push(addreses);
                      setSellerAdd(add[2]);

                    }
                    let info = []
                   
                    // let infolen = 1;
                    // for(let i of )
                    for (let i = 0; i <= add.length-1; i++) {
                      for (let j=0 ; j <= tBuyer; j++) {
                        let addreseinfo = await loadEscrow.methods.BuyersInfor(add[i], j).call();
                        info.push( addreseinfo);
                        setBuyerInfo(info);
                        // if(j >= infolen){
                        //   infolen = infolen +1;
                        //   // j=0;
                        // }
                        // if(i > 0){
                         
                        // }
                      }
                    }
                  }
                }
              } catch (error) {
                console.log("Fetch Buyers order Error", error);
              }
            }
            fetchBuyer();
          }
        }
      }

    }
    const timer = setTimeout(() => {
      setTimeLeft(CountdownTimer());
    }, 1000000);
    return () => clearTimeout(timer);

  }, [params.id, loadchain, checkID,timeLeft]);

>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf

  return (
    <>
      <aside className="side-bar sticky-top right">
        <div className="col-xl-12 col-sm-6">
          <div className="card h-auto">
            <div className="card-body  px-0 pt-1">
              <Tab.Container defaultActiveKey="Navbuy">
                <div className="">
                  <div className="buy-sell">
                    <Nav className="nav nav-tabs" role="tablist">
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        eventKey="Navbuy"
                        type="button"
                      >
                        Market Order
                      </Nav.Link>
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        eventKey="Navsell"
                        type="button"
                      >
                        Limit Order
                      </Nav.Link>
                    </Nav>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="Navbuy">
                      <Tab.Container defaultActiveKey="Navbuymarket">
                        <div className="limit-sell"></div>
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
                        {datas.length > 0 ? (
                          <>
                            {datas.PropertyDetails.Resell == true ? (
                              <>
                                <div className="limit-sell">
                                  <Nav className="nav nav-tabs">
                                    <Nav.Link
                                      as="button"
                                      eventKey="Navsellmarket"
                                      type="button"
                                    >
                                      Buy
                                    </Nav.Link>
                                    <Nav.Link
                                      as="button"
                                      eventKey="Navselllimit"
                                      type="button"
                                    >
                                      Sell
                                    </Nav.Link>
                                  </Nav>
                                </div>
                                <Tab.Content id="nav-tabContent2">
                                  <Tab.Pane eventKey="Navsellmarket">
                                    <div className="sell-element">
                                      <BuyerOrder />
                                    </div>
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="Navselllimit">
                                    <div className="sell-element">
                                      <SellerOrder />
                                    </div>
                                  </Tab.Pane>
                                </Tab.Content>
                                {/* <div className="sell-element" eventKey="Navsellmarket">
                                  <OrderForm />
                                </div> */}
                              </>
                            ) : (
                              <>
                                {/* <div className="sell-element">
                                  <h1 className="text-center">
                                    <SellOrderForm/>
                                  </h1>
                                </div> */}
                              </>
                            )}
                          </>
                        ) : (
                          <></>
                        )}
                      </Tab.Container>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-sm-6">

          <div className="card">
            <div className="card-header py-2">
              <h2 className="heading">Open Order <span>(P2P)</span></h2>
            </div>
            <div className="card-body pt-0 pb-3 px-2">
              <Tab.Container defaultActiveKey="Openorder">
                <nav className="buy-sell style-1">
                  <Nav className=" nav-tabs" id="nav-tab1" role="tablist">
                    <Nav.Link as="button" className="nav-link " eventKey="Openorder" type="button" >Buy</Nav.Link>
                    <Nav.Link as="button" className="nav-link" eventKey="Orderhistory" type="button" >Sell</Nav.Link>
                  </Nav>
                </nav>
                <Tab.Content>
                  <Tab.Pane eventKey="Openorder" >
                    <div className="list-table danger mt-4">
<<<<<<< HEAD
                      {/* {sellerInfo.map((item, index) => (
=======
                      {sellerInfo.map((item, index) => (
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                        <div className="card list-table  overflow-hidden " key={index}>
                          <div className="card-body  previews-info-list">
                            <span>
                              <p className="mb-2 fs-13"
                                style={{ fontSize: "10px" }}
                              ><i className="fa fa-caret-up scale5 me-2 text-success" aria-hidden="true"></i>
                                Accepet Crypto <span className='text-success'> USDT</span>
                              </p>
<<<<<<< HEAD
                              <h4 className="heading mb-0">{Number(item[index].Price / 1e8).toFixed(2)}<span>(USD) </span></h4>
                              <h4 className="fs-13"
                                style={{ fontSize: "15px" }}
                              >Tokens: {""} <span className='text-primary' style={{ fontSize: "25px" }}
                              >{""} {Number(item[index].TokenQuantity / 1e18).toFixed(2)} </span><span style={{ fontSize: "9px" }}> For Sell</span></h4>
=======
                              <h4 className="heading mb-0">{Number(item.Price / 1e8).toFixed(2)}<span>(USD) </span></h4>
                              <h4 className="fs-13"
                                style={{ fontSize: "15px" }}
                              >Tokens: {""} <span className='text-primary' style={{ fontSize: "25px" }}
                              >{""} {Number(item.TokenQuantity / 1e18).toFixed(2)} </span><span style={{ fontSize: "9px" }}> For Sell</span></h4>
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                            </span>

                            <span className="text-end">
                              <p className="mb-1" style={{ fontSize: "10px" }}>
<<<<<<< HEAD
                                Expire in:<br /> {convertTime(item[index].ExpiryTime - Math.round(+new Date() / 1000))}
                              </p>
                              <button className="btn btn-success text-end btn-sm"
                                onClick={() => ModleDatas(item[index].sellerAddress, index, Number(item[index].Price / 1e8).toFixed(2), Number(item[index].TokenQuantity / 1e18).toFixed(2), item[index].sellerAddress)}
=======
                                Expire in:<br /> {convertTime(item.ExpiryTime - Math.round(+new Date() / 1000))}
                              </p>
                              <button className="btn btn-success text-end btn-sm"
                                onClick={() => ModleDatas(item.sellerAddress, index, Number(item.Price / 1e8).toFixed(2), Number(item.TokenQuantity / 1e18).toFixed(2), item.sellerAddress)}
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                              >Buy
                              </button>
                            </span>
                          </div>
                        </div>
<<<<<<< HEAD
                      ))} */}
                      {sellerOffer.length != 0 ? (
                        <>
                          {sellerOffer && sellerOffer.map((item, index) => (
                            <div className="card list-table  overflow-hidden " key={index}>
                              <div className="card-body  previews-info-list">
                                <span>
                                  <p className="mb-2 fs-13"
                                    style={{ fontSize: "10px" }}
                                  ><i className="fa fa-caret-up scale5 me-2 text-success" aria-hidden="true"></i>
                                    Accepet Crypto <span className='text-success'> USDT/USDC</span>
                                  </p>
                                  <h4 className="heading mb-0">{Number(item.Price_of_Tokens / 1e8).toFixed(2)}<span>(USD) </span></h4>
                                  <h4 className="fs-13"
                                    style={{ fontSize: "15px" }}
                                  >Tokens: {""} <span className='text-primary' style={{ fontSize: "25px" }}
                                  >{""} {Number(item.Number_of_Tokens / 1e18).toFixed(2)} </span><span style={{ fontSize: "9px" }}> For Sell</span></h4>
                                </span>

                                <span className="text-end">
                                  <p className="mb-1" style={{ fontSize: "10px" }}>
                                    Expire in:<br /> {convertTime(item.expireIn - Math.round(+new Date() / 1000))}
                                  </p>
                                  <button className="btn btn-success text-end btn-sm"
                                    onClick={() => ModleDatas(index, Number(item.Price_of_Tokens),
                                      Number(item.Number_of_Tokens / 1e18).toFixed(2), item.SellersAddress, item._id)}
                                  >Buy
                                  </button>
                                </span>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : ""}
=======
                      ))}
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Orderhistory" >
                    <div className="list-table danger mt-4">
<<<<<<< HEAD
                      {/* {BuyerInfo.map((item, index) => (
=======
                      {BuyerInfo.map((item, index) => (
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                        <div className="card list-table  overflow-hidden " key={index}>
                          <div className="card-body  previews-info-list">
                            <span>
                              <p className="mb-2 fs-13"
                                style={{ fontSize: "10px" }}
                              ><i className="fa fa-caret-up scale5 me-2 text-success" aria-hidden="true"></i>
                                Accepet Crypto<span className='text-success'>
<<<<<<< HEAD
                                  {item[index].Type_of_Currency == 0 ? (<>USDT</>) : <>USDC</>
                                  }</span>
                              </p>
                              <h4 className="heading mb-0">{Number(item[index].Price / 1e8).toFixed(2)}<span>(USD) </span></h4>
                              <h4 className="fs-13"
                                style={{ fontSize: "15px" }}
                              >Tokens: {""} <span className='text-primary' style={{ fontSize: "25px" }}
                              >{""}{Number(item[index].NoPropertToken / 1e18).toFixed(2)}</span><span style={{ fontSize: "9px" }}> Avaliable</span></h4>
                            </span>
                            <span className="text-end">
                              <p className="mb-1" style={{ fontSize: "10px" }}>Expire in:<br /> {convertTime(item[index].ExpiryTime - Math.round(+new Date() / 1000))}</p>
                              
                              <button className="btn btn-danger text-end btn-sm"
                                onClick={() => ModleData(index, Number(item[index].Price / 1e8).toFixed(2), Number(item[index].NoPropertToken / 1e18).toFixed(2), item[index].Type_of_Currency, item[index].buyerAddress)}
=======
                                  {item.Type_of_Currency == 0 ? (<>USDT</>) : <>USDC</>
                                  }</span>
                              </p>
                              <h4 className="heading mb-0">{Number(item.Price / 1e8).toFixed(2)}<span>(USD) </span></h4>
                              <h4 className="fs-13"
                                style={{ fontSize: "15px" }}
                              >Tokens: {""} <span className='text-primary' style={{ fontSize: "25px" }}
                              >{""}{Number(item.NoPropertToken / 1e18).toFixed(2)}</span><span style={{ fontSize: "9px" }}>Wants to Buy</span></h4>
                            </span>
                            <span className="text-end">
                              <p className="mb-1" style={{ fontSize: "10px" }}>Expire in:<br /> {convertTime(item.ExpiryTime - Math.round(+new Date() / 1000))}</p>
                              {/* buyerAddress */}
                              <button className="btn btn-danger text-end btn-sm"
                                onClick={() => ModleData(item.buyerAddress, index, Number(item.Price / 1e8).toFixed(2), Number(item.NoPropertToken / 1e18).toFixed(2), item.Type_of_Currency, item.buyerAddress)}
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                              >Sell
                              </button>
                            </span>
                          </div>
                        </div>
<<<<<<< HEAD
                      ))} */}
                      {buyerOffer.length != 0 ? (
                        <>
                          {buyerOffer && buyerOffer.map((item, index) => (
                            <div className="card list-table  overflow-hidden " key={index}>
                              <div className="card-body  previews-info-list">
                                <span>
                                  <p className="mb-2 fs-13"
                                    style={{ fontSize: "10px" }}
                                  ><i className="fa fa-caret-up scale5 me-2 text-success" aria-hidden="true"></i>
                                    Accepet Crypto<span className='text-success'>
                                      {item.Type_Of_Currency == 0 ? (<> USDT</>) : <> USDC</>
                                      }</span>
                                  </p>
                                  <h4 className="heading mb-0">{Number(item.Price_of_Tokens / 1e8).toFixed(2)}<span>(USD) </span></h4>
                                  <h4 className="fs-13"
                                    style={{ fontSize: "15px" }}
                                  >Tokens: {""} <span className='text-primary' style={{ fontSize: "25px" }}
                                  >{""}{Number(item.Number_of_Tokens / 1e18).toFixed(2)}</span><span style={{ fontSize: "9px" }}> Avaliable</span></h4>
                                </span>
                                <span className="text-end">
                                  <p className="mb-1" style={{ fontSize: "10px" }}>Expire in:<br /> {convertTime(item.expireIn - Math.round(+new Date() / 1000))}</p>
                                  <button className="btn btn-danger text-end btn-sm"
                                    onClick={() => ModleData(index, Number(item.Price_of_Tokens),
                                      Number(item.Number_of_Tokens / 1e18).toFixed(2), item.Type_Of_Currency,
                                      item.BuyersAddress, item._id)}
                                  >Sell
                                  </button>
                                </span>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : ""}

=======
                      ))}
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </aside>
      <Modal className="modal fade" id="exampleModal" centered show={contactModal} onHide={setContactModal}>
        <div className="modal-content">
          <div className="modal-header">
            <a id="exampleModalLabel" style={{ fontSize: "13px" }}>
              Price: <span className="modal-title text-danger" style={{ fontSize: "20px" }}
<<<<<<< HEAD
              >{Number(clickPrice / 1e8).toFixed(2)} $</span></a>
=======
              >{clickPrice} $</span></a>
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
            <button type="button" className="btn-close"
              onClick={() => setContactModal(false)}></button>
          </div>
          <form>
            <div className="modal-body">
              <div className="sell-blance">
                <p className="mb-2 fs-13"
                  style={{ fontSize: "10px" }}
                ><i className="fa fa-caret-up scale5 me-2 text-danger" aria-hidden="true"></i>
                  Accepet Crypto <span className='text-danger'>
<<<<<<< HEAD
                    {tokenTypeAcc == 0 ? (<> USDT</>) : <> USDC</>}
                  </span>
                </p>
                <div className="input-group">
                  {tokenTypeAcc == 0 ?
=======
                    {tokenTypeAcc == 0 ? (<>USDT</>) : <>USDC</>}
                  </span>
                </p>
                <div className="input-group">
                  {tokenType == 0 ?
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                    (
                      <input
                        type="text"
                        className="form-control"
                        value="USDT"
                      // onChange={(e) => settokenQuant(e.target.value)}
                      // placeholder= {tokenType == 0 ?
                      //   (<a className="text-black"> -USDT</a>) : (
                      //     tokenType == 1 ?
                      //       <a className="text-black"> -USDC</a>
                      //       : ("")
                      //   )}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        value="USDC"
                      // onChange={(e) => settokenQuant(e.target.value)}
                      // placeholder= {tokenType == 0 ?
                      //   (<a className="text-black"> -USDT</a>) : (
                      //     tokenType == 1 ?
                      //       <a className="text-black"> -USDC</a>
                      //       : ("")
                      //   )}
                      />
                    )}
                  <span className="input-group-text">
                    {/* {Number(CalTokens).toFixed(2)} */}
<<<<<<< HEAD
                    {tokenTypeAcc == 0 ?
=======
                    {tokenType == 0 ?
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                      (<a className="text-black"> USDT</a>) : (
                        <a className="text-black"> USDC</a>
                      )}
                  </span>
                  {/* <select
                    className=""
                    onChange={(e) => settokenType(e.target.value)}
                    required
                  >
                    <option value="">Select Payable Token Types </option>
                    <option value="0">USDT</option>
                    <option value="1">USDC</option>
                  </select> */}
                  {/* <span className="input-group-text">Payable Token Types</span> */}
                </div>
                <p className="mb-2 fs-13"
                  style={{ fontSize: "12px" }}
                >
                  <i className="fa fa-caret-up scale5 me-2 text-secondary " aria-hidden="true"></i>
                  {clickToken} <span className='text-danger'> Avaliable Tokens</span>
                </p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => settokenQuant(e.target.value)}
                    placeholder={"Enter Quantity"}
                  />
<<<<<<< HEAD
                  <span className="input-group-text">{Number(checkNumbers).toFixed(3)}
                    {tokenTypeAcc == 0 ?
                      (<a className="text-black"> -USDT</a>) : (
                        <a className="text-black"> -USDC</a>
=======
                  <span className="input-group-text">{Number(CalTokens).toFixed(2)}
                    {tokenType == 0 ?
                      (<a className="text-black"> -USDT</a>) : (
                        tokenType == 1 ?
                          <a className="text-black"> -USDC</a>
                          : (<>
                            <a className="text-black"> -Select</a>
                          </>)
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                      )}
                  </span>
                </div>
                {tokenQuant > clickToken ? (
                  <a className="text-danger">Limit is exceeded </a>
                ) : ""}
              </div>
            </div>
          </form>
          <div className="modal-footer mt-0">
            <button type="button" className="btn btn-secondary" style={{ fontSize: "14px" }}>
              Please read the terms & condition before placing an order.
            </button>
            <button type="button" className="btn btn-danger text-end btn-sm"
              onClick={() => Sell()}>Sell</button>
          </div>
        </div>
      </Modal>
      <Modal className="modal fade" id="exampleModal" centered show={contactsModal} onHide={setContactsModal}>
        <div className="modal-content">
          <div className="modal-header">
            <a id="exampleModalLabel" style={{ fontSize: "13px" }}>
              Price: <span className="modal-title text-success" style={{ fontSize: "20px" }}
<<<<<<< HEAD
              >{Number(clickPrice / 1e8).toFixed(2)} $</span></a>
=======
              >{clickPrice} $</span></a>
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
            <button type="button" className="btn-close"
              onClick={() => setContactsModal(false)}></button>
          </div>
          <form>
            <div className="modal-body">
              <div className="sell-blance">
                <p className="mb-2 fs-13"
                  style={{ fontSize: "10px" }}
                ><i className="fa fa-caret-up scale5 me-2 text-success" aria-hidden="true"></i>
                  Accepet Crypto <span className='text-success'> USDT/USDC</span>
                </p>
                <div className="input-group">
                  {/* <label className="form-label text-secondary">
                  Limit
                  <span className="text-danger"> {clickToken} Tokens</span>
                </label> */}
                  <select
                    className=""
                    onChange={(e) => settokenType(e.target.value)}
                    required
                  >
                    <option value="">Select Payable Token Types </option>
                    <option value="0">USDT</option>
                    <option value="1">USDC</option>
                  </select>
                  {/* <span className="input-group-text">Payable Token Types</span> */}
                </div>
                {/* <label className="form-label text-secondary">
                  Limit
                  <span className="text-danger"> {clickToken} Tokens</span>
                </label> */}
                <p className="mb-2 fs-13"
                  style={{ fontSize: "12px" }}
                >
                  <i className="fa fa-caret-up scale5 me-2 text-secondary " aria-hidden="true"></i>
                  {clickToken} <span className='text-success'> Tokens</span>
                </p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => settokenQuant(e.target.value)}
                    placeholder={"Enter Quantity"}
                  />
<<<<<<< HEAD
                  <span className="input-group-text">{Number(calculatedNum).toFixed(2)}
=======
                  <span className="input-group-text">{Number(CalTokens).toFixed(2)}
>>>>>>> 85d30f519c30a2cd2ba72ddc63486af8441bb1bf
                    {tokenType == 0 ?
                      (<a className="text-black"> -USDT</a>) : (
                        tokenType == 1 ?
                          <a className="text-black"> -USDC</a>
                          : (<>
                            <a className="text-black"> -Select</a>
                          </>)
                      )}
                  </span>
                </div>
                {tokenQuant > clickToken ? (
                  <a className="text-danger">Limit is exceeded </a>
                ) : ""}
              </div>
            </div>
          </form>
          <div className="modal-footer mt-0">
            <button type="button" className="btn btn-secondary" style={{ fontSize: "14px" }}>
              Please read the terms & condition before placing an order.
            </button>
            <button type="button" className="btn btn-success text-end btn-sm"
              onClick={() => Buy()}>Buy</button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Sidebar;
