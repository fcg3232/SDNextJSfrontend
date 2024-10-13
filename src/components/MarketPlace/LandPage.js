import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import meta from "./../../assets/images/meta.png";
import walet from "./../../assets/images/walet.png";
import { Modal } from 'react-bootstrap';
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const LandPage = () => {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [contactModal, setContactModal] = useState(false);
  const connectorImages = {
		MetaMask: meta,
		WalletConnect: walet,
	};

  return (

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
          </div>
        </div>
      </div>
      <Modal className="modal fade z-[100] overflow-hidden" id="exampleModal" centered show={contactModal} onHide={setContactModal}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="exampleModalLabel">Connect a Wallet</h2>
            <button type="button" className="btn-close" onClick={() => setContactModal(false)}></button>
          </div>
          <div className=" text-center mt-5 fw-bold">
            <div className="flex flex-row cursor-pointer flex-wrap sm:mt-10 ">
            <div className="row" style={{marginLeft:"1px", marginRight:"1px"}}>
                {connectors.map((connector) => (
                  <div className="tagcloud mt-4 col" key={connector.id}>
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
                        width="35"
                        height="30"
                        // src={wal}
                        src={connectorImages[connector.name]}
                        alt="meta"
                        marginLeft="20"
                        marginRight="20"
                      />
                      <h5 className="mr-3 ml-2"
                        style={{ marginRight: "3px", marginLeft: "13px" }}
                        key={connector.uid}
                        onClick={() => connect({ connector })}>

                        {connector.name}
                      </h5>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-body">
            <label className="form-label d-block fw-bold">Select your favourite wallet to Access MarktetPlace.</label>
          </div>
          <div className="modal-footer">
            <a>By connecting a wallet, you agree to SecondaryDAO Terms of Service and consent to its Privacy Policy. </a>
            <button type="button" className="btn btn-secondary" onClick={() => setContactModal(false)}>Close</button>
          </div>
        </div>
      </Modal >
    </div >

  );
};

export default LandPage;
