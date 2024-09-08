import React, { useEffect, useState ,useMemo} from "react";
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
import { buyerOfferCreate } from "../../slices/buyersSlice";
// import { RiFileCopyLine } from 'react-icons/ri';
// import { IoCheckmarkDone } from "react-icons/io5";

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


const BuyerOrder = () => {
    const params = useParams();
    const [USDTprice, setUSDTprice] = useState(0);
    const [USDCprice, setUSDCprice] = useState(0);
    const [tokenType, settokenType] = useState();
    const [buySell, setbuySell] = useState();
    const [quantity, setquantity] = useState();
    const [product, setProduct] = useState({});
    const [loadchain, setloadchain] = useState(null);
    const [loadEscrow, setloadEscrow] = useState(null);
    const [EscrowAddress, setEscrowAddress] = useState(null);
    const [tokensPrice, settokensPrice] = useState(0);
    const [tokenPrice, settokenPrice] = useState();
    const [datas, setdatas] = useState([]);
    const [totaltoken, settotaltoken] = useState();
    const [loading, setLoading] = useState(false);
    const [contractAddr, setcontractAddr] = useState();
    const [checkID, setcheckID] = useState();
    const [balnc, setbalnc] = useState(0);
    const [CalToken, setCalToken] = useState(0);
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
    const {buyerOffer} = useAppSelector((state) => state.buyerOrder);
    const [textToCopy, setTextToCopy] = useState();

    const CalculateValue =  (_tokensPrice,_quantity) => {
        if (tokenType == 0) {
          let tokens = ((_tokensPrice * _quantity * 10 ** 6) / (USDTprice)).toFixed(0).toString();
          let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
          // setCalToken(Number(tokens) + Number(fee))
          const num = Number(tokens) + Number(fee)
          return num;
        } else {
          let tokens = ((_tokensPrice * _quantity * 10 ** 6) / (USDCprice)).toFixed(0).toString();
          let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
          // setCalToken(Number(tokens) + Number(fee))
          const num = Number(tokens) + Number(fee)
          return num;
        }
      }
      const checkNumbers = useMemo(()=>{
        return CalculateValue(tokensPrice,quantity)
      },[tokensPrice,quantity])
    


    // useEffect(() => {
    //     if (window.ethereum) {
    //         if (tokenType == 0) {
    //             let tokens = ((tokensPrice * quantity * 10 ** 14) / (USDTprice)).toFixed(0).toString();
    //             let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
    //             setCalToken(Number(tokens) + Number(fee) + Number(2 * 1e6))
    //         } else {
    //             let tokens = ((tokensPrice * quantity * 10 ** 14) / (USDCprice)).toFixed(0).toString();
    //             let fee = ((tokens / (10 ** 10)) * buySell).toFixed(0).toString();
    //             setCalToken(Number(tokens) + Number(fee) + Number(2 * 1e6))
    //         }
    //         // const timer = setTimeout(() => {
    //         //     setTimeLeft(CountdownTimer());
    //         // }, 10);
    //         // return () => clearTimeout(timer);
    //         // timeLeft,
    //     }
    // })
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


    const OfferSubmit = () => {
      const QuantNo = Number(quantity * 10 ** 18).toFixed(0).toString();
      const pri = Number(tokenPrice * 10 ** 8).toFixed(0).toString();
      dispatch(
        buyerOfferCreate({
            PropertyAddress: product.uid,
            BuyersAddress:accounts[0],
            Type_Of_Currency: tokenType,
            Number_of_Tokens: QuantNo,
            Price_of_Tokens: pri
        })
      );
    };
    
    // const BuyerOffer = async () => {
    //     try {
    //       let fee = (2*1e6).toFixed(0).toString();
    //         if (tokenType == 0) {
    //             await UsdtContract?.methods
    //                 .approve(EscrowAddress, Number(checkNumbers)+ Number(fee))
    //                 .send({ from: accounts[0]})
    //                 .then(async () => {
    //                     const QuantNo = Number(quantity * 10 ** 18).toFixed(0).toString();
    //                     const pri = Number(tokenPrice * 10 ** 8).toFixed(0).toString();
    //                     await loadEscrow?.methods
    //                         .BuyersOffer(accounts[0], tokenType, QuantNo, pri)
    //                         .send({ from: accounts[0]});
    //                 })
    //         }else{
    //             await UsdcContract?.methods
    //             .approve(EscrowAddress, Number(checkNumbers) + Number(fee))
    //             .send({ from: accounts[0] })
    //             .then(async () => {
    //                 const QuantNo = Number(quantity * 10 ** 18).toFixed(0).toString();
    //                 const pri = Number(tokenPrice * 10 ** 8).toFixed(0).toString();
    //                 await loadEscrow?.methods
    //                     .BuyersOffer(accounts[0], tokenType, QuantNo, pri)
    //                     .send({ from: accounts[0] });
    //             })
    //         }
    //     } catch (error) {
    //         console.log("BuyerOffer Error", error);
    //     }
    // };


  // get property Address
  useEffect(() => {
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
  },[params.id,checkID])

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
          if(loadchain == null){
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
                  if(tokensPrice == 0){
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
                console.log("Property Details Fetch error",err);
              }
            };
            fetchData();
          }
        }
      },[loadchain])

        // get Escrow Address of property
  useEffect(() => {
    if (window.ethereum) {
      if (loadchain) {
        const fetchEscrowAdd = async () => {
          try {
            let Add = await loadchain.methods.EscrowAccount().call();
            if(EscrowAddress == null){
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
      },[EscrowAddress])

          // get Escrow Balance of property
    useEffect(() => {
        if (window.ethereum) {
            if (loadEscrow) {
              const fetchBal = async () => {
                try {
                  let bal = await loadEscrow.methods.balanceOf(EscrowAddress).call();
                  if(balnc == 0){
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

    //  fetch USDT and USDC price
    useEffect(() => {
        if (window.ethereum) {
          if (web3) {
            const USDTPrice = async () => {
              const USDTpriceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, USDTaddr);
              USDTpriceFeed.methods.latestRoundData().call()
                .then((roundData) => {
                  // const price = Number((roundData.answer) / 1e8).toFixed(3);
                  if(USDTprice ==0){
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
                  
                  if(USDCprice ==0){
                    setUSDCprice(roundData.answer);
                  }
                })
            }
            USDCPrice();
          }
        }
      },[])

    return (
        <>
            <form>
                <div className="sell-blance">
                    {datas.length > 0 ? (
                        <>
                            <label className="form-label text-prime">
                                Current Property Token: {""}
                                <span className="" style={{ fontSize: "18px" }}>
                                    { Number(tokensPrice/1e8).toFixed(2)}
                                </span>
                            </label>
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
                            className="form-control"
                            onChange={(e) => settokenType(e.target.value)}
                            required
                        >
                            <option value="">Select</option>
                            <option value="0">USDT</option>
                            <option value="1">USDC</option>
                        </select>
                        <span className="input-group-text">Payable Token Types</span>
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
                        <span className="input-group-text">
                            {Number(checkNumbers/1e6).toFixed(2)} {""}
                            {tokenType == 0 ?
                                (<a className="text-black"> -USDT</a>) : (
                                    <a className="text-black"> -USDC</a>
                                )}
                        </span>
                    </div>
                </div>
                <div className="sell-blance">
                    <label className="form-label text-primary">
                        Property Token Price
                    </label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => settokenPrice(e.target.value)}
                            placeholder="0.00"
                        />
                        <span className="input-group-text">
                            USD
                        </span>
                    </div>
                </div>
                <div className="text-center">
                    <Button
                        className="btn btn-primary w-75"
                        onClick={() => OfferSubmit()}
                    >
                        Place Order
                    </Button>
                </div>
            </form>
        </>
    );
};
export default BuyerOrder;
