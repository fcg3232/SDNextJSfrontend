import React, { useState } from "react";
import "./SwapWallet.css";
import CommonModal from "../common/CommonModel";
import ArrowIcon from "../../assets/images/arrowIcon.png"
import { FaChevronDown } from "react-icons/fa";

const SwapWallet = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <>
      <CommonModal open={isModelOpen} setOpen={setIsModelOpen} />

      <div
        className="flex justify-center"
        style={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="trade-container-parent">
          <p
            className="text-[48px] text-black text-center font-bold"
            style={{ fontSize: "45px", fontWeight: "600" }}
          >
            Swap anytime, <br /> anywhere.
          </p>

          <div className="trade-container">
            <div className="trade-body">
              <div className="token-selector">
                <p>You Receive</p>
                <div className="token-selector-child">
                  <div>
                    <input
                      type="number"
                      className="token-input"
                      placeholder="0.0"
                    />
                  </div>
                  <button className="token-button eth-token-button-select" onClick={() => setIsModelOpen(true)}>
                    <img
                      src="https://token-icons.s3.amazonaws.com/eth.png"
                      alt="Ether Logo"
                      className="token-logo"
                    />
                    ETH
                    <FaChevronDown />
                    
                  </button>
                </div>
              </div>

              <div className="token-selector">
              <img src={ArrowIcon} alt="" className="_arrow-icon"/>
                <p>You Receive</p>
                <div className="token-selector-child">
                  <div>
                    <input
                      type="number"
                      className="token-input"
                      placeholder="0.0"
                    />
                  </div>
                  <button
                    className="token-button-select"
                    onClick={() => setIsModelOpen(true)}
                  >
                    Select a token
                    
                    <FaChevronDown />
                  </button>
                </div>
              </div>

              <button className="connect-wallet-button">Connect Wallet</button>
            </div>
          </div>

          <div
            className="_footer"
            style={{
              width: "480px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <p className="text-center">
              The largest onchain marketplace. Buy and cell crypto on Ethereum
              and 7+ other chains
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapWallet;
