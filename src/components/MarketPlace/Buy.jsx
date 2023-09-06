import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import styles, { layout } from "../../style";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../slices/api";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Dropdown, Nav, Tab } from 'react-bootstrap';
import BalanceCardSlider from './BuySell/Dashboard/BalanceCardSlider';
import OrderForm from './OrderForm';
import { CONTRACT_ABIS } from '../contract/property';
import { useAppSelector, useAppDispatch } from '../../reducer/store';
import { loadBlockchain } from '../../slices/web3ContractSlice';

// const DashboardComboChart = loadable(() =>
// 	pMinDelay(import("./Dashboard/DashboardComboChart"), 1000)
// );
// const AssetsChart = loadable(() =>
// 	pMinDelay(import("./Dashboard/AssetsChart"), 1000)
// );

const ServerStatusBar = loadable(() =>
	pMinDelay(import("./BuySell/Dashboard/ServerStatusBar"), 1000)
);


// const pickerData = [
// 	{ fillcolor: 'var(--primary)', datatitle: 'XTZ(40%)', price: '763' },
// 	{ fillcolor: '#2A353A', datatitle: 'BTC(20%)', price: '321' },
// 	{ fillcolor: '#C0E192', datatitle: 'BNB(10%)', price: '69' },
// 	{ fillcolor: '#E085E4', datatitle: 'ETH(10%)', price: '154' },
// ];


// const marketBlog = [
// 	{ icon: LtcIcon, classBg: 'bg-success', Name: 'LTC', },
// 	{ icon: BtcIcon, classBg: 'bg-warning', Name: 'BTC', },
// 	{ icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
// 	{ icon: EthIcon, classBg: 'bg-pink', Name: 'ETH', },
// 	{ icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
// ];

const listData = [
	{}, {}, {},
	{}, {}, {},
	{}, {}, {},
	{}, {},
];

const Buy = () => {
	const params = useParams();
	const [product, setProduct] = useState({});
	const [loadchain, setloadchain] = useState();
	const [datas, setdatas] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isContractLoad, setisContractLoad] = useState(false);
	const [checkID, setcheckID] = useState()
	const dispatch = useAppDispatch()
	const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);


	useEffect(() => {
		dispatch(loadBlockchain());
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
			const contractofProperty = new web3.eth.Contract(CONTRACT_ABIS, product.uid);
			!loadchain && setloadchain(contractofProperty);
			if (loadchain) {
				const fetchData = async () => {
					try {
						let completeProp = await contractofProperty.methods.getCompletePropDetails().call();
						setdatas(completeProp);

					} catch (err) {
						console.log(err);
					}
				};
				fetchData();
			}

		}
	}, [params.id, loadchain, checkID]);

	console.log(datas)
	return (
		<>
			{
				loading && web3 ? (
					<p>Loading...</p>
				) : (
					<>
						<section className={`flex md:flex-row flex-col `}>
							<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
								<div className="flex flex-row justify-between items-center w-full">
									<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
										{/* {datas.length > 0 ? (
											<>
												{datas.PropertyDetails.StartSell == false ? (
													<h3 className="absolute mt-5 text-2xl bg-gray-800 ml-8 py-2 px-4 text-green-300 uppercase rounded-xl">InActive</h3>
												) : (
													<>
														<h3 className="absolute mt-5 ml-8 text-2xl bg-gray-800  py-2 px-4 text-green-300 uppercase rounded-xl">Active</h3>
													</>
												)
												}
											</>
										) : (<></>)} */}
										<br className="sm:block hidden" />{" "}
										<span className="text-gradient">{product.name}</span>{" "}
										{datas.length > 0 ? (
											<div className='text-primary'>Starting at : ${datas.PropertyDetails.TokenPrice}</div>
										) : (
											<></>
										)}
									</h1>
								</div>
							</div>

							<div className={`flex-1 flex   ${styles.flexCenter} md:my-0 my-10 relative`}>
								<img width="444" height="444" src={product.image?.url} className="img-fluid" alt="" />
							</div>
						</section>
						<div className="row mt-5">
							<div className="col-xl-8">
								<div className="row">
									<div className="col-xl-12">
										<div className="card">
											<div className="card-body">
												<div className="buy-coin">
													<div>
														<h1>{product.name}</h1>
														{datas.length > 0 ? (
															<a>{datas.PropertyDetails.propertyAddress}</a>
														) : (
															<></>

														)}
														<br /><br />
														<h3 > located {product.location} -{product.propaddress}</h3>
														<h3>{product.desc}</h3>
														<br />
														{datas.length > 0 ? (
															<h3 className='text-primary'>Starting at : ${datas.PropertyDetails.TokenPrice}</h3>
														) : (
															<></>

														)}
														<br /><br />
														{datas.length > 0 ? (
															<>
																{datas.PropertyDetails.StartSell == false ? (
																	<h3 className="absolute text-2xl bg-gray-800 ml-8 py-2 px-4 text-green-300 uppercase rounded-xl bottom-5 left-5">InActive</h3>
																) : (
																	<>
																		<h3 className="absolute ml-8 text-2xl bg-gray-800  py-2 px-4 text-green-300 uppercase rounded-xl bottom-5 left-5">Active</h3>
																	</>
																)
																}
															</>
														) : (
															<></>

														)}
														{/* <h2 className="btn btn-primary">Buy Coin</h2> */}
													</div>
													<div className="coin-img">
														{/* <img src={product.image?.url} className="img-fluid" alt="" /> */}
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-12">
										<BalanceCardSlider />
									</div>
								</div>
							</div>
							<div className="col-xl-4">
								<div className="row">
									<div className="col-xl-12 col-sm-6">
										<div className="card h-auto">
											<div className="card-body  bg-primary px-0 pt-1">
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
																		{/* <Nav className="nav nav-tabs" id="nav-tab3" role="tablist">
																		<Nav.Link as="button" eventKey="Navbuymarket" type="button"  >market order</Nav.Link>
																		<Nav.Link as="button" eventKey="Navbuylimit" type="button" >limit order</Nav.Link>
																	</Nav> */}
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
									</div>
									<div className="col-xl-12 col-sm-6">

										<div className="card">
											<div className="card-header py-2">
												<h2 className="heading">Order Book <span>(BTC/USDT)</span></h2>
											</div>
											<div className="card-body pt-0 pb-3 px-2">
												<Tab.Container defaultActiveKey="Openorder">
													<nav className="buy-sell style-1">
														<Nav className=" nav-tabs" id="nav-tab1" role="tablist">
															<Nav.Link as="button" className="nav-link " eventKey="Openorder" type="button" >Open Orders</Nav.Link>
															<Nav.Link as="button" className="nav-link" eventKey="Orderhistory" type="button" >Order History</Nav.Link>
														</Nav>
													</nav>
													<Tab.Content>
														<Tab.Pane eventKey="Openorder" >
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
																<h6 className="text-danger mb-0">19858.19 <i className="fa-solid fa-caret-up"></i></h6>
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
														<Tab.Pane eventKey="Orderhistory" >
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
																<h6 className="text-danger mb-0">19858.19 <i className="fa-solid fa-caret-up"></i></h6>
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
									<div className="col-xl-12 col-sm-6 server-chart">
										<div className="card">
											<div className="card-header border-0 pb-0">
												<h2 className="heading mb-0">Server Status</h2>
											</div>
											<div className="card-body pt-0 custome-tooltip">
												<ServerStatusBar />
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
														<span><i className="fa-solid fa-caret-up text-secondary scale-2"></i></span>
														<h4 className="fs-14 mb-0">2.0 mbps</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
		</>
	)
}
export default Buy;

const StyledSummary = styled.div`
  width: 100%;
  display: flex;
`;



