import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "./../layouts/PageLayout";
import blog3 from "../assets/images/blog3.png";
import Shape1 from "../assets/images/home-banner/shape1.png";
import logoo from "../assets/images/logoo.png";
import { useAppSelector } from "../reducer/store";
import Research from "../components/MarketPlace/search/Research";
import LandPage from "../components/MarketPlace/LandPage";
import ListProperty from "../components/MarketPlace/ListProperty";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Filter from "../layouts/Filter";
import CountdownTimer from "../components/MarketPlace/countdownTimer";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { url } from "../slices/api";
import axios from "axios";
import { useSelector } from "react-redux";
import { getEnsName } from "wagmi/actions";
import { config } from "../slices/config";

const MarketPlace = () => {
  const account = useAccount();
  // console.log("account =>>", account);
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const [timeLeft, setTimeLeft] = useState(CountdownTimer());
const user = useSelector((state) => state.auth);

  const { address, addresses, isConnected } = useAccount(); // Destructure the required data from useAccount

  useEffect(() => {
    if (isConnected && address && addresses?.length && user._id) {
      updateWalletsInDB(addresses, address, user._id);
    }
  }, [isConnected, address, addresses, user._id]);

  const updateWalletsInDB = async (walletAddresses, activeWallet, userID) => {
    try {
      const response = await axios.patch(
        `${url}/users/wallet/update/${userID}`,
        {
          walletAddresses,
          activeWallet,
        }
      );
      const data = response.data;

      if (response.ok) {
        console.log("Wallets updated successfully:", data);
      } else {
        console.error("Error updating wallets:", data.message);
      }
    } catch (error) {
      console.error("Failed to update wallets:", error);
    }
  };

  return (
    <div>
      <Header />
      {account.status === "connected" ? (
        // web3
        <div>
          <PageLayout desc={false} pageTitle="MarketPLace" />
          {/* <Research /> */}
          {/* <Filter /> */}
          {/* <div className='text-center row' style={{ 
                             marginLeft: "10px" , backgroundColor:"white"
                            }}>
                            <nav className="col cltext-center">
                                <div className='timer'>
                                    <div className='box'>
                                        <p>{timeLeft.days}</p>
                                        <span>Days</span>
                                    </div>
                                    <span className='columnns'>:</span>
                                    <div className='box'>
                                        <p>{timeLeft.hours}</p>
                                        <span>Hours</span>
                                    </div>
                                    <span className='columnns'>:</span>
                                    <div className='box'>
                                        <p>{timeLeft.minutes}</p>
                                        <span>Minutes</span>
                                    </div>
                                    <span className='columnns'>:</span>
                                    <div className='box'>
                                        <p>{timeLeft.seconds}</p>
                                        <span>Seconds</span>
                                    </div>
                                </div>
                            </nav>
                            <p className='col titless'>
                                COMING SOON
                            </p>
                            <div className='logo text-start ml-4 mb-2'>
                                <img src={logoo} width="30px" height="30px" className="App-logo" alt="logo" />
                                <span>SecondaryDAO</span>
                            </div>
                        </div> */}
          <ListProperty />
        </div>
      ) : (
        <LandPage />
      )}
      <Footer />
    </div>
  );
};

export default MarketPlace;
