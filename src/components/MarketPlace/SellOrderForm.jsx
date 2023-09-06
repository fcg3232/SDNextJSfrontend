import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../slices/api";
import Button from 'react-bootstrap/Button';
// import ReactSlider from 'react-slider'
import { CONTRACT_ABIS } from '../../contract/property';
import { useAppSelector, useAppDispatch } from '../../reducer/store';
import { loadBlockchain, updatAccount } from '../../slices/web3ContractSlice';

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

const OrderForm = () => {

	const params = useParams();
	const [usdtToken, setusdtToken] = useState();
	const [isApprove, setisApprove] = useState(false);
	const [tokenType, settokenType] = useState();
	const [TokenToUSD, setTokenToUSD] = useState();
	const [price, setprice] = useState();
	const [quantity, setquantity] = useState();
	const [product, setProduct] = useState({});
	const [loadchain, setloadchain] = useState();
	const [tokensPrice, settokensPrice] = useState();
	const [datas, setdatas] = useState([]);
	const [totaltoken, settotaltoken] = useState();
	const [loading, setLoading] = useState(false);
	const [contractAddr, setcontractAddr] = useState();
	const [checkID, setcheckID] = useState()
	const dispatch = useAppDispatch()
	const { web3, contract, accounts, socketContract, UsdtContract, UsdcContract, EscrowContract } = useAppSelector((state) => state.web3Connect);

	const [checkTokens, setcheckTokens] = useState()
	// console.log(checkTokens);
	// console.log(price);
	// console.log(usdtToken);


	const UsdtApprove = async () => {
		try {
			let tokens = (((tokensPrice * quantity) * (10 ** 14)) / (TokenToUSD)).toFixed(0).toString();
			setcheckTokens(tokens)
			await UsdtContract?.methods.approve(contractAddr, tokens).send({ from: accounts[0] })
			setisApprove(true);
		} catch (error) {
			console.log("First Approve Error", error)
		}
	}



	const UsdcApprove = async () => {
		try {
			let tokens = ((price * quantity) * (10 ** 14)) / (TokenToUSD);
			await UsdtContract?.methods.approve(contractAddr, tokens).send({ from: accounts[0] })
			setisApprove(true);
		} catch (error) {
			console.log("Second Approve Error", error)
		}
	}

	// update account
	useEffect(() => {
		window.localStorage.setItem("accounts[0]", accounts[0]);
		if (window.ethereum) {
			window.ethereum.on('accountsChanged', async (data) => {
				dispatch(updatAccount(data));
				window.localStorage.setItem("data", data);
				console.log("updated Account", data);
			})
		}
	})



	const BuyToken = async () => {
		try {
			await loadchain?.methods.Buyers(tokenType, quantity, price).send({ from: accounts[0] })
		} catch (error) {
			console.log("buy token Error", error)
		}
	}

	// SecondApprove().then(()=>{

	// })

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
			const contractofProperty = new web3.eth.Contract(CONTRACT_ABIS, product.uid);
			!loadchain && setloadchain(contractofProperty);
			if (loadchain) {
				const fetchData = async () => {
					try {
						let completeProp = await contractofProperty.methods.getCompletePropDetails().call();
						settokensPrice(completeProp.PropertyDetails.TokenPrice);
						setcontractAddr(completeProp.PropertyDetails.propertyAddress);
						setdatas(completeProp);
						let TotalTokens = await contractofProperty.methods.TokenCount().call();
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
		// if (quantity !== 0 && tokensPrice !== 0) {
		// 	let tokens = (((tokensPrice * quantity) * (10 ** 14)) / (TokenToUSD)).toFixed(0).toString();
		// 	let tkn = (tokens / 100000);
		// 	setusdtToken(tkn);
		// }
	}
	}, [params.id, loadchain, checkID]);

	return (
		<>
			{/* <label className="form-label text-primary">{TokenToUSD}</label>
			<label className="form-label text-primary">{tokensPrice}</label> */}
			<form>
				<div className="sell-blance">
					{datas.length > 0 ? (
						<>
							{
								datas.PropertyDetails.StartSell == true ? (
									<label className="form-label text-primary">Staring at: $50.00</label>
								) : (
									<></>
								)
							}
						</>
					) : (<></>)}
					<div className="form-label blance">
						<span className='text-primary'>Tokens Left:</span><p className='text-warning'>{totaltoken}</p>
					</div>
					<div className="input-group">
						<select className="form-control"
							onChange={(e) => settokenType(e.target.value)}
							required >
							<option value="">Select</option>
							<option value="0">USDT</option>
							<option value="1">USDC</option>
						</select>
						<span className="input-group-text">Payable Token Types</span>
					</div>

				</div>
				<div className="sell-blance">
					<label className="form-label text-primary">Property Token Quantity</label>
					<div className="input-group">
						<input type="text" className="form-control"
							onChange={(e) => setquantity(e.target.value)} placeholder="0.00" />
						{tokenType == 0 ? (
							<span className="input-group-text">USDT</span>
						) :
							<span className="input-group-text">USDC</span>
						}
					</div>
				</div>
				{datas.length > 0 ? (
					<>
						{datas.PropertyDetails.StatrtResell == true ? (
							<div className="sell-blance">
								<label className="form-label text-primary">Limit Price Per Token</label>
								<div className="input-group">
									<input type="text" className="form-control"
										onChange={(e) => setprice(e.target.value)} placeholder="0.00" />
									<span className="input-group-text">USD</span>
								</div>
							</div>
						) : (
							<div className="sell-blance">
								<label className="form-label text-primary">Limit Price Per Token</label>
								<div className="input-group">
									<input type="text" className="form-control"
										onChange={(e) => setprice(e.target.value)} placeholder="0.00" />
									<span className="input-group-text">USD</span>
								</div>
							</div>
						)}
					</>
				) : (
					<></>
				)}

				{/* <div className="slider-wrapper">
					<ReactSlider
						min={5}
						max={99}
						defaultValue={27}
						className="progress-slider"
						renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
					/>

				</div> */}
				<div className="text-center">
					{datas.length > 0 ? (
						<>
							{datas.PropertyDetails.StartSell == true ? (
								<>
									{isApprove == false ? (
										<>
											{tokenType == 0 ? (
												<Button className="btn btn-primary w-75" onClick={() => UsdtApprove()}>Approval and Send</Button>
											) : (
												<Button className="btn btn-primary w-75" onClick={() => UsdcApprove()}> Approval and Send</Button>
											)}
										</>
									) : (
										<>
											<Button className="btn btn-primary w-75" onClick={() => BuyToken()}>Buy</Button>
										</>
									)}
								</>
							) : (
								<>
									{datas.PropertyDetails.StatrtResell == true ? (
										<>
											{isApprove == false ? (
												<>
													{tokenType == 0 ? (
														<Button className="btn btn-primary w-75" onClick={() => UsdtApprove()}>Approval and Send</Button>
													) : (
														<Button className="btn btn-primary w-75" onClick={() => UsdcApprove()}> Approval and Send</Button>
													)}
												</>
											) : (
												<>
													<Button className="btn btn-primary w-75" onClick={() => BuyToken()}>Buy</Button>
												</>
											)}
										</>
									) : (
										<>
											<label className="btn btn-primary w-75">Not Start Resell</label>
										</>
									)
									}
								</>
							)
							}
						</>
					) : (
						<></>

					)}
					{/* <Link className="btn btn-primary w-75" onClick={() => BuyToken()}>BUY BTC</Link> */}

					{/* <Link to={"/exchange"} className="btn btn-primary w-75">BUY BTC</Link> */}
				</div>

			</form>
		</>
	)
}
export default OrderForm;