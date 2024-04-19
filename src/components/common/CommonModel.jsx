import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";


function CommonModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  const availableCoins = [
    {
      id: "common-base-ETH",
      name: "ETH",
      logoUrl: "https://token-icons.s3.amazonaws.com/eth.png",
    },
    {
      id: "common-base-DAI",
      name: "DAI",
      logoUrl:
        "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
    },
    {
      id: "common-base-USDC",
      name: "USDC",
      logoUrl:
        "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
    },
    {
      id: "common-base-USDT",
      name: "USDT",
      logoUrl:
        "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    },
    {
      id: "common-base-WBTC",
      name: "WBTC",
      logoUrl:
        "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
    },
    {
      id: "common-base-WETH",
      name: "WETH",
      logoUrl:
        "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    },
  ];

  return (
    <>
      <Modal
        show={open}
        onHide={handleClose}
        centered
        className="modal-backdrop"
      >
        <Modal.Header closeButton>
          <Modal.Title> <p className="text-color"> Select a token </p> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
       
          <input
            type="text"
            id="token-search-input"
            data-testid="token-search-input"
            placeholder="Search name or paste address"
            class="styled__SearchInput-sc-78ef87e9-2 customInput"
          />
          

          </div>

          <div className="coin-container">
            {availableCoins?.map((coin, index) => (
              <div
                key={coin.id}
                tabIndex={0}
                data-testid="common-base-ETH"
                className="common-base-wrapper"
              >
                <div className="logo-container">
                  <div className="circle-logo">
                    <img
                      src={coin.logoUrl}
                      alt="ETH Logo"
                      className="circle-logo-image"
                    />
                  </div>
                </div>
                <div className="base-text">{coin.name}</div>
              </div>
            ))}
          </div>

          <hr />
          <p className="_popular-icons">Popular tokens</p>
          <div tabIndex="0" className="menu-item">
            <div className="logo-container">
              <div className="logo">
                <img
                  src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xE41d2489571d322189246DaFA5ebDe1F4699F498/logo.png"
                  alt="0x Protocol Token"
                />
              </div>
            </div>
            <div className="info">
              <div className="currency-name">0x Protocol Token</div>
              <div className="currency-code">ZRX</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default CommonModal;
