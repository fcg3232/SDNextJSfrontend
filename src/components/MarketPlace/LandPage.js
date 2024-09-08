import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Shape1 from "./../../assets/images/home-banner/shape1.png";
import Shape3 from "./../../assets/images/home-banner/shape3.png";
import meta from "./../../assets/images/meta.png";
import walet from "./../../assets/images/walet.png";
import wal from "./../../assets/images/icons/wal.svg";
import { Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from "../../reducer/store";
import {
  loadBlockchain,
  loadWalletConnect,
  updatAccount,
} from "../../slices/web3ContractSlice";
// import { Connector, useConnect } from 'wagmi'

import { Core } from '@walletconnect/core'
import { Web3Wallet } from '@walletconnect/web3wallet'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const LandPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const {
    web3,
    contract,
    accounts,
    socketContract,
    UsdtContract,
    UsdcContract,
    EscrowContract,
  } = useAppSelector((state) => state.web3Connect);
  const dispatch = useAppDispatch();
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [contactModal, setContactModal] = useState(false);
  // const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const core = new Core({
    projectId: '6467c18267b081ccdb07148fff803e6f'
  })

  const metadata = {
    name: 'SecondaryDAO',
    description: 'AppKit Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

  const web3wallet = async () => {
    await Web3Wallet.init({
      core,
      metadata
    })
  }


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
      window.ethereum.on("accountsChanged", async (data) => {
        dispatch(updatAccount(data));
        window.localStorage.setItem("data", data);
        console.log("updated Account", data);
      });
    }
  });

  return (
    // <div>
    //   <div className="dz-bnr-inr style-1 text-center">
    //     <div className="container">
    //       <div className=" dz-bnr-inr-entry">
    //         <h1></h1>
    //         {
    //           <div className=" mt-5 text " style={{marginTop:"20px" }}>
    //             <h1 className="display-2 ml-5 fw-bold text-white">
    //               Welcome to <br />
    //               Secondary
    //               <span className="text-gradient">DAO MarketPlace </span>
    //             </h1>
    //           </div>
    //         }

    //         <div>
    //           <div>
    //             status: {account.status}
    //             <br />
    //             addresses: {JSON.stringify(account.addresses)}
    //             <br />
    //             chainId: {account.chainId}
    //           </div>
    //         </div>
    //         <div className="widget col-xl-12">
    //         <div className="tagcloud">
    //           {connectors.map((connector) => (
    //             <button
    //               key={connector.uid}
    //               onClick={() => connect({ connector })}
    //               type="button"
    //               className="btn space-lg btn-gradient btn-shadow btn-primary"
    //               style={{ marginLeft: "10px", marginTop:"10" }}
    //             >
    //               {connector.name}
    //             </button>
    //           ))}
    //           <div>{status}</div>
    //           <div className="mt-3">{error?.message}</div>
    //         </div>
    //       </div>
    //       <Link className="flex flex-row cursor-pointer flex-wrap sm:mt-10 ">
    //           <img
    //             loading="lazy"
    //             width="100"
    //             height="100"
    //             src={meta}
    //             alt="meta"
    //             className="w-[50%] h-[50%] object-contain cursor-pointer"
    //             onClick={() => handleblockchain()}
    //           />
    //           <img
    //             loading="lazy"
    //             width="100"
    //             height="100"
    //             src={walet}
    //             alt="walet"
    //             className=" cursor-pointer"
    //             onClick={() => handleWalletConnect()}
    //           />
    //         </Link>
    //       <Button type="submit" className="btn space-lg btn-gradient btn-shadow btn-primary " onClick={() => handleblockchain()}>Connect MetaMask</Button>
    //     </div>
    //   </div>
    //   <img className="bg-shape1" src={Shape1} alt="" />
    //   <img className="bg-shape2" src={Shape1} alt="" />
    //   <img className="bg-shape3" src={Shape3} alt="" />
    //   <img className="bg-shape4" src={Shape3} alt="" />
    // </div>
    // </div >

    <div >
      <div className="dz-bnr-inr style-1 text-center">
        <div className="container">
          <div className=" dz-bnr-inr-entry">
            <h1></h1>
            {
              <div className=" mt-5 text ">
                <h1 className="display-2 ml-5 fw-bold " style={{ color: "#bebfc2" }}>
                  Welcome to <br />
                  SecondaryDAO
                  <span className="text-gradient"> MarketPlace</span>
                </h1>

              </div>
            }
            <Link onClick={() => setContactModal(true)}>
              <button type="button" className='btn'
                style={{
                  backgroundColor: "#bebfc2",
                  color: "#332763",
                  borderColor: "#213166",
                  fontWeight: "800"
                }}
              >Connect Wallet</button>
            </Link>
            {/* <Link className="flex flex-row cursor-pointer flex-wrap sm:mt-10 ">
            <img loading="lazy" width="100" height="100" src={meta} alt="meta"
              className="w-[50%] h-[50%] object-contain cursor-pointer"
              onClick={() => handleblockchain()}
            />
            <img loading="lazy" width="100" height="100" src={walet} alt="walet"
              className=" cursor-pointer"
              onClick={() => handleWalletConnect()}
            />
          </Link> */}
            {/* <Button type="submit" className="btn space-lg btn-gradient btn-shadow btn-primary " onClick={() => handleblockchain()}>Connect MetaMask</Button> */}

          </div>
        </div>
        {/* <img className="bg-shape1" src={Shape1} alt="" />
      <img className="bg-shape2" src={Shape1} alt="" /> */}
        {/* <img className="bg-shape3" src={Shape3} alt="" />
      <img className="bg-shape4" src={Shape3} alt="" /> */}

      </div>
      <Modal className="modal fade z-[100] overflow-hidden" id="exampleModal" centered show={contactModal} onHide={setContactModal}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="exampleModalLabel">Connect a Wallet</h2>
            <button type="button" className="btn-close" onClick={() => setContactModal(false)}></button>
          </div>
          <div className=" text-center mt-5 fw-bold">
            <div className="flex flex-row cursor-pointer flex-wrap sm:mt-10 ">
              {/* <div className='col'>
              <Button
                type="button"
                data-toggle="dropdown"
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  color: "#3c0987",
                  marginLeft: "15px",
                }}
                onClick={() => handleblockchain()}
                className=" font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center ">
                <img
                  loading="lazy"
                  width="25"
                  height="25"
                  src={meta2}
                  alt="meta"
                  onClick={() => handleblockchain()}
                />
                <h5 className="mr-3 ml-2" style={{ marginRight: "3px", marginLeft: "13px" }}
                >MetaMask</h5>
              </Button>
            </div>
            <div className='col'>
              <Button
                type="button"
                data-toggle="dropdown"
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  color: "#3c0987",
                  marginLeft: "15px",
                  marginTop: "10px"
                }}
                onClick={() => handleWalletConnect()}
                className=" font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center ">
                <img
                  loading="lazy"
                  width="35"
                  height="25"
                  src={walet}
                  alt="meta"
                  onClick={() => handleWalletConnect()}
                />
                <h5 className="mr-3 ml-2" >WalletConnect</h5>
              </Button>
            </div> */}

              {connectors.map((connector) => (
                <div className="tagcloud mt-4">
                  <Button
                    type="button"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "16px",
                      color: "#3c0987",
                    }}
                    className=" font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center ">
                    <img
                      loading="lazy"
                      width="25"
                      height="25"
                      src={wal}
                      alt="meta"
                    // onClick={() => handleblockchain()}
                    />
                    <h5 className="mr-3 ml-2" 
                    style={{ marginRight: "3px", marginLeft: "13px" }}
                      key={connector.uid}
                      onClick={() => connect({ connector })}>{connector.name}</h5>
                  </Button>
                </div>
                // <button
                //   key={connector.uid}
                //   onClick={() => connect({ connector })}
                //   type="button"
                //   className="btn space-lg btn-gradient btn-shadow btn-primary"
                //   style={{ marginLeft: "10px", marginTop: "10" }}
                // >
                //   {connector.name}
                // </button>
              ))}

            </div>
          </div>
          <div className="modal-body">
            <label className="form-label d-block fw-bold">Select your favourite wallet to Access MarktetPlace.</label>
          </div>
          <div className="modal-footer">
            <a>By connecting a wallet, you agree to CHT Terms of Service and consent to its Privacy Policy. </a>
            <button type="button" className="btn btn-secondary" onClick={() => setContactModal(false)}>Close</button>
          </div>
        </div>
      </Modal >
    </div >

  );
};

export default LandPage;
