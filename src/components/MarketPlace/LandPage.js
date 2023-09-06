import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Shape1 from './../../assets/images/home-banner/shape1.png';
import Shape3 from './../../assets/images/home-banner/shape3.png';
import meta from './../../assets/images/meta.png'
import walet from './../../assets/images/walet.png'
import { useAppDispatch,useAppSelector } from '../../reducer/store';
import { loadBlockchain, loadWalletConnect, updatAccount } from '../../slices/web3ContractSlice';



const LandPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { web3, contract, accounts, socketContract, UsdtContract, UsdcContract, EscrowContract } = useAppSelector((state) => state.web3Connect);
  const dispatch = useAppDispatch()


  const handleblockchain = () => {
    dispatch(loadBlockchain());
    setIsConnected(true);
  };

  const handleWalletConnect = () => {
    dispatch(loadWalletConnect());
    setIsConnected(true);
  };

  // Account Switching
	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.on('accountsChanged', async (data) => {
				dispatch(updatAccount(data));
				window.localStorage.setItem("data", data);
				console.log("updated Account", data);
			})
		}
	})


  return (
    <div >
      <div className="dz-bnr-inr style-1 text-center">
        <div className="container">
          <div className=" dz-bnr-inr-entry">
            <h1></h1>
            {
              <div className=" mt-5 text ">
                <h1 className="display-2 ml-5 fw-bold text-white">
                  Welcome to <br />
                  Secondary<span className="text-gradient">DAO MarketPlace </span>

                </h1>

              </div>
            }
            <Link className="flex flex-row cursor-pointer flex-wrap sm:mt-10 ">
              <img loading="lazy" width="100" height="100"  src={meta} alt="meta"
                className="w-[50%] h-[50%] object-contain cursor-pointer"
                onClick={() => handleblockchain()}
              />
              <img loading="lazy" width="100" height="100"  src={walet} alt="walet"
                className=" cursor-pointer"
                onClick={() => handleWalletConnect()}
              />
            </Link>
            {/* <Button type="submit" className="btn space-lg btn-gradient btn-shadow btn-primary " onClick={() => handleblockchain()}>Connect MetaMask</Button> */}

          </div>
        </div>
        <img className="bg-shape1" src={Shape1} alt="" />
        <img className="bg-shape2" src={Shape1} alt="" />
        <img className="bg-shape3" src={Shape3} alt="" />
        <img className="bg-shape4" src={Shape3} alt="" />
      </div>
    </div>
  )
}

export default LandPage