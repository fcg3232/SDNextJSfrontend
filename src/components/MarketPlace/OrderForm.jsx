import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { url, setHeaders } from "../../slices/api";
import Button from "react-bootstrap/Button";
// import ReactSlider from 'react-slider'
import Property_ABI from '../../contract/property.json';
import Escrow_ABI from '../../contract/Escrow.json'
import USDT_ABI from '../../contract/USDT.json';
import USDC_ABI from '../../contract/USDC.json';
import { useAppSelector, useAppDispatch } from "../../reducer/store";
import { loadBlockchain, updatAccount } from "../../slices/web3ContractSlice";
import "../../components/MarketPlace/compo.css";
import CountdownTimer from "./countdownTimer";
import { RiFileCopyLine } from 'react-icons/ri';
import { IoCheckmarkDone } from "react-icons/io5";
import Loader from './Loader';
import { config } from '../../slices/config'
import { readContract } from '@wagmi/core'
import { http, createConfig, useAccount } from 'wagmi'
import { mainnet, sepolia,arbitrumSepolia, arbitrum } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
const projectId = '6467c18267b081ccdb07148fff803e6f';
export const configure = createConfig({
  chains: [mainnet, sepolia,arbitrumSepolia, arbitrum],
  connectors: [
    injected(),
    coinbaseWallet(),
    walletConnect({ projectId}),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrumSepolia.id]:http(),
  },
})
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
  const [SEDTprice, setSEDTprice] = useState(0);
  const [USDCprice, setUSDCprice] = useState(0);
  const [usdtToken, setusdtToken] = useState();
  const [isApprove, setisApprove] = useState(false);
  const [tokenType, settokenType] = useState();
  const [TokenToUSD, setTokenToUSD] = useState();
  const [buySell, setbuySell] = useState(0);
  const [price, setprice] = useState();
  const [quantity, setquantity] = useState();
  const [product, setProduct] = useState({});
  const [loadchain, setloadchain] = useState(null);
  const [loadEscrow, setloadEscrow] = useState();
  const [EscrowAddress, setEscrowAddress] = useState(null);
  const [tokensPrice, settokensPrice] = useState(0);
  const [datas, setdatas] = useState(null);
  const [totaltoken, settotaltoken] = useState(0);
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
  const { address, isConnected, status } = useAccount();
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
 const USDT_Wallet = process.env.USDT_ADDRESS;
 const USDC_Wallet = process.env.USDC_ADDRESS;

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


  const CalculateValue = (_tokensPrice, _quantity) => {
    if (tokenType == 0) {
      let tokens = ((Number(_tokensPrice) * (_quantity) * 1e6) / (USDTprice)).toFixed(0).toString();
      let fee = ((tokens / 1e10) * Number(buySell)).toFixed(0).toString();
      // setCalToken(Number(tokens) + Number(fee))
      const num = Number(tokens) + Number(fee)
      return num;
    } else if (tokenType == 1) {
      let tokens = ((Number(_tokensPrice) * (_quantity) * 1e6) / (USDCprice)).toFixed(0).toString();
      let fee = ((tokens / (1e10)) * Number(buySell)).toFixed(0).toString();
      // setCalToken(Number(tokens) + Number(fee))
      const num = Number(tokens) + Number(fee)
      return num;
    } else {
      let tokens = ((Number(_tokensPrice) * (_quantity) * 1e6) / Number(SEDTprice)).toFixed(0).toString();
      let fee = ((tokens / (1e10)) * Number(buySell));
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


  useEffect(() => {
    const USDTPrice = async () => {
      try {
        await axios.get(`${url}/products/usdt/${params.id}`)
            .then((result) => {
              if (USDTprice == 0) {
                setUSDTprice(result.data);
              }
            })
      } catch (err) {
        console.log(err);
      }
    };
    USDTPrice();
  })

  useEffect(() => {
        const USDCPrice = async () => {
          try {
          await axios.get(`${url}/products/usdc/${params.id}`)
            .then((roundData) => {
              if (USDCprice == 0) {
                setUSDCprice(roundData.data);
              }
            })
          } catch (err) {
            console.log(err);
          }
        }
        USDCPrice();
  })
 

  // get property Address
  useEffect(() => {
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
  }, [params.id, checkID])


  const CompleteDetaisl = async (addres) => {
    const result = await readContract(config, {
      abi: Property_ABI,
      address: addres,
      functionName: 'getCompletePropDetails',
    })
    return result;
  }
  const EscrowAcont = async (addres) => {
    const result = await readContract(config, {
      abi: Property_ABI,
      address: addres,
      functionName: 'EscrowContractAddress',
    })
    return result;
  }

  const EscrowBalance = async (addres) => {
    const result = await readContract(config, {
      abi: Escrow_ABI,
      address: addres,
      functionName: 'balanceOf',
      args: [addres],
    })
    return result;
  }

  const TokenCont = async (addres) => {
    const result = await readContract(config, {
      abi: Property_ABI,
      address: addres,
      functionName: 'TokenCount',
    })
    return result;
  }

const USDT_ADDRESS = "0xdF137d51199ecCf4f667fcF9d8C1C7809C47f88e";
const USDC_ADDRESS = "0xB5f2449917e29d08fB4cA4Ebe6fe7EF3Ed0DCD6e";

  const USDTApproval = async (addres, _tokens) => {
    const result = await readContract(config, {
      abi: USDT_ABI,
      address: USDT_ADDRESS,
      functionName: 'approve',
      args: [addres,_tokens],
      account: address,
    })
    return result;
  }

  const USDCApproval = async (addres, _tokens) => {
    const result = await readContract(config, {
      abi: USDC_ABI,
      address: USDC_ADDRESS,
      functionName: 'approve',
      args: [addres,_tokens],
      account: address,
    })
    return result;
  }

  const UsdtApprove = async () => {
    try {
      let tokens = ((Number(tokensPrice) * quantity * 10 ** 6) / (USDTprice)).toFixed(0).toString();
      let fee = ((tokens / (10 ** 10)) * Number(buySell)).toFixed(0).toString();
      
      setcheckUSDTTokens(Number(tokens) + Number(fee));
      setLoading(true);
      await USDTApproval(EscrowAddress, Number(tokens) + Number(fee))
      .then(async () => {
        const QuantNo = Number(quantity * 10 ** 18).toFixed(0).toString();
        await axios.patch(
          `${url}/products/order/${params.id}`,
          {
            "buyer":address,
            "currency": tokenType,
            "tokens":QuantNo,
            "Receivabletokens":tokens,
            "Receivablefee":fee
          },
          setHeaders()
          )
        setLoading(false);
      })
    } catch (error) {
      setLoading(false);
      console.log("First Approve Error", error);
    }
  };

  const UsdcApprove = async () => {
    try {
      let tokens = ((Number(tokensPrice) * quantity * 10 ** 6) / (USDCprice)).toFixed(0).toString();
      let fee = ((tokens / (10 ** 10)) * Number(buySell)).toFixed(0).toString();
      setLoading(true);
      await USDCApproval(EscrowAddress, Number(tokens) + Number(fee))
      .then(async () => {
        const QuantNo = Number(quantity * 10 ** 18).toFixed(0).toString();
        await axios.post(
          `${url}/products/order/${params.id}`,
          {
            "buyer":address,
            "currency": tokenType,
            "tokens":QuantNo,
            "Receivabletokens":tokens,
            "Receivablefee":fee
          },
          setHeaders()
          )
        setLoading(false);

      })
    } catch (error) {
      setLoading(false);
      console.log("Second Approve Error", error);
    }
  };

  // get contract of property
  useEffect(() => {
    if (checkID) {
      const fetchda = async () => {
        await CompleteDetaisl(checkID)
          .then((result) => {
            setdatas(result.PropertyDetails)
            if (tokensPrice == 0) {
              settokensPrice(result.PropertyDetails.TokenPrice);
            }
            if (buySell == 0) {
              setbuySell(result.PropertyDetails.BuySellingFee);
            }
            // console.log("Property Details", result.PropertyDetails);
          })
      }
      fetchda();
    }
  }, [checkID])


  useEffect(() => {
    if (checkID) {
      const FetchTokenCount = async () => {
        if (totaltoken == 0) {
          await TokenCont(checkID)
            .then((result) => {
              settotaltoken(result)
            })
        }
      }
      FetchTokenCount();
    }
  })
  // get Escrow Address of property
  useEffect(() => {
    if (checkID) {
      const EscrowAddressFetch = async () => {
        if (EscrowAddress == null) {
          await EscrowAcont(checkID)
            .then((result) => {
              setEscrowAddress(result);
              !textToCopy && setTextToCopy(result);
            })
        }
      }
      EscrowAddressFetch();
    }
  })

  useEffect(() => {
    if (EscrowAddress) {
      const FetchEscrowBal = async () => {
        if (balnc == 0) {
          await EscrowBalance(EscrowAddress)
            .then((result) => {
              setbalnc((Number(result) / 1e18).toFixed(4));
            })
        }
      }
      FetchEscrowBal();
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
              className="btn w-100" style={{ backgroundColor: "white" }}
            >
              <Loader />
            </Button>
          </div>
        ) : (
          <>
            <div className="sell-blance">
              {datas == null ? (
                <>
                </>
              ) : (
                <>
                 {datas.StartSell == true || datas.Resell == true ? (
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
                      {Number(checkNumbers / 1e6).toFixed(3)}</span> {""}-USDT</span>
                ) : (
                  <span className="input-group-text">
                    <span className="text-warning">
                      {Number(checkNumbers / 1e6).toFixed(3)}</span> {""}-USDC</span>
                )}
              </div>
            </div>

            {datas == null ? (
              <>
              </>
            ) : (
              <>
               {datas.StartSell == true || datas.Resell == true ? (
                  <div className="sell-blance">
                    <label className="form-label text-primary">
                      Limit Price Per Token
                    </label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        // onChange={(e) => setprice(e.target.value)}
                        value={Number(Number(tokensPrice) / 1e8).toFixed(2)}
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
            )}

            <div className="text-center">
              {datas == null ? (
                <>
                </>
              ) : (
                <>
                 {datas.StartSell == true || datas.Resell == true ? (
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
                      {datas.Resell == true ? (
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
