import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import PageLayout from "./../layouts/PageLayout";
import blog3 from '../assets/images/blog3.png';
import Shape1 from "../assets/images/home-banner/shape1.png";
import logoo from "../assets/images/logoo.png";
import { useAppSelector } from '../reducer/store';
import Research from '../components/MarketPlace/search/Research';
import LandPage from '../components/MarketPlace/LandPage';
import ListProperty from '../components/MarketPlace/ListProperty';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import CountdownTimer from '../components/MarketPlace/countdownTimer';

const MarketPlace = () => {
    const [timeLeft, setTimeLeft] = useState(CountdownTimer());
    const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);
    // const { items: data, status } = useAppSelector((state) => state.products);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(CountdownTimer());
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div>
            <Header />
            {web3 ?
                (
                    <div >
                        <PageLayout desc={false} pageTitle="MarketPLace" />
                        <Research />
                        <div className='text-center row' style={{ 
                             marginLeft: "10px" , backgroundColor:"white"
                            }}>
                            <navss className="col cltext-center">
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
                            </navss>
                            <p className='col titless'>
                                COMING SOON
                            </p>
                            <div className='logo text-start ml-4 mb-2'>
                                <img src={logoo} width="30px" height="30px" className="App-logo" alt="logo" />
                                <span>SecondaryDAO</span>
                            </div>
                        </div>
                        <ListProperty />
                    </div>
                ) :
                (
                    <LandPage />
                )

            }
            <Footer />
        </div>
    )
}

export default MarketPlace




