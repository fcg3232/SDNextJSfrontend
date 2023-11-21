import React, { useEffect, useState } from 'react';
import blog3 from '../assets/images/blog3.png';
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
                    <div>
                        <div className='page-content bg-black'>
                            <div className='content-inner  bg-black' >
                                <section className={`mt-5 `}>
                                    <div className="row">
                                        <div className={`col`}>
                                            <div className={`text-center  mt-5 `}>
                                                <div className="row">
                                                    <div className="col">
                                                        <h1 className="display-2 fw-bold text-white">
                                                            SecondaryDAO <br className="sm:block hidden" />{" "}
                                                            <span className="text-gradient">MarketPlace</span>{" "}
                                                        </h1>
                                                        <p className='font-monospace'>Invest in Tokenized Real Estate Assets</p>
                                                    </div>
                                                    <div className='col'>
                                                        <img loading="lazy" width="300" height="300" src={blog3} alt="pic" />
                                                    </div>
                                                </div>
                                                <h1 className='font-monospace'>Become the landlord of the future</h1>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <Research />
                        {/* <div className='text-center row' style={{ marginTop: "40px", marginBottom: "40px", marginLeft:"10px" }}>
                            <navss className="col cltext-center">
                                <div className='logo'>
                                <img src={logo} className="App-logo" alt="logo" />
                                <span>Chrysus</span>
                            </div>
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
                        </div> */}
                        <ListProperty/>
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




