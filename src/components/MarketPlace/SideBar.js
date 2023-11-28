import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import OrderForm from "./OrderForm";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../slices/api";
import { CONTRACT_ABIS } from "../../contract/property";
import { useAppSelector, useAppDispatch } from "../../reducer/store";
import { loadBlockchain, updatAccount } from "../../slices/web3ContractSlice";

const listData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const Sidebar = () => {
  const params = useParams();
  // const [usdtToken, setusdtToken] = useState();
  // const [isApprove, setisApprove] = useState(false);
  // const [tokenType, settokenType] = useState();
  const [TokenToUSD, setTokenToUSD] = useState();
  const [price, setprice] = useState();
  // const [quantity, setquantity] = useState();
  const [product, setProduct] = useState({});
  const [loadchain, setloadchain] = useState();
  const [tokensPrice, settokensPrice] = useState();
  const [datas, setdatas] = useState([]);
  const [totaltoken, settotaltoken] = useState();
  const [loading, setLoading] = useState(false);
  const [contractAddr, setcontractAddr] = useState();
  const [checkID, setcheckID] = useState();
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
  const [checkTokens, setcheckTokens] = useState();

  // update account
  // window.ethereum.on("accountsChanged", async (data) => {
  // 	dispatch(updatAccount(data));
  // 	console.log("updated Account", data)
  // })

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
    dispatch(loadBlockchain());
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
      if (checkID) {
        const contractofProperty = new web3.eth.Contract(
          CONTRACT_ABIS,
          product.uid
        );
        !loadchain && setloadchain(contractofProperty);
        if (loadchain) {
          const fetchData = async () => {
            try {
              let completeProp = await contractofProperty.methods
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
        }
      }
      if (EscrowContract) {
        const escrowUSD = async () => {
          try {
            let TokeninUSD = await EscrowContract?.methods.TokenToUSD(1).call();
            // let priceinUSD = TokeninUSD / (10 ** 8);
            setTokenToUSD(TokeninUSD);
          } catch (err) {
            console.log(err);
          }
        };
        escrowUSD();
      }
    }
  }, [params.id, loadchain, checkID]);

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
                        buy
                      </Nav.Link>
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        eventKey="Navsell"
                        type="button"
                      >
                        sell
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
                            {datas.PropertyDetails.StatrtResell == true ? (
                              <>
                                <div className="limit-sell">
                                  <Nav className="nav nav-tabs">
                                    <Nav.Link
                                      as="button"
                                      eventKey="Navsellmarket"
                                      type="button"
                                    >
                                      market order
                                    </Nav.Link>
                                    <Nav.Link
                                      as="button"
                                      eventKey="Navselllimit"
                                      type="button"
                                    >
                                      limit order
                                    </Nav.Link>
                                  </Nav>
                                </div>
                                <Tab.Content id="nav-tabContent2">
                                  <Tab.Pane id="Navsellmarket"></Tab.Pane>
                                  <Tab.Pane id="Navselllimit"></Tab.Pane>
                                </Tab.Content>
                                <div className="sell-element">
                                  <OrderForm />
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="sell-element">
                                  <h1 className="text-center">
                                    Resell Not Start Yet
                                  </h1>
                                </div>
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
                      {listData.map((data, i) => (
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
                      {listData.map((data, i) => (
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
                      {listData.map((data, i) => (
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
                      {listData.map((data, i) => (
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
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
