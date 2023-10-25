import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Dropdown } from 'react-bootstrap';
// import house from './../assets/images/house.png';
import logoo from "./../assets/images/logoo.png";
import { layout } from "./style";
// import robo from './../assets/images/robo.png';
//components
import BannerCard from "./../components/Home/BannerCard";
import OneStop from "./../components/Home/OneStop";
import RecentNews from "./../components/Home/RecentNews";
// import { loadBlockchain } from '../slices/web3ContractSlice';
import { useAppDispatch, useAppSelector } from "../reducer/store";
import Marquee from "react-fast-marquee";
import about1 from "./../assets/images/about1.png";
import pic from "./../assets/images/pic.png";
import ma3 from "./../assets/images/ma3.png";
// import robo from './../assets/images/robo.png';

//images
// import imag1 from './../assets/images/home-banner/imag1.png';
// import img3 from './../assets/images/home-banner/img3.png';
import Shape1 from "./../assets/images/home-banner/shape1.png";
// import Shape3 from './../assets/images/home-banner/shape3.png';
import wallet from "./../assets/images/icons/wallet.svg";
// import friend from './../assets/images/icons/friend.svg';

// import coin1 from './../assets/images/coins/coin1.png';
// import coin3 from './../assets/images/coins/coin3.png';
import coin4 from "./../assets/images/coins/coin4.png";

// import blogig from './../assets/images/blog/blog-ig.png';
// import picture1 from './../assets/images/blog/picture1.png';
// import avatar3 from './../assets/images/avatar/avatar3.jpg';
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const trustBlog = [
  {
    image: wallet,
    title: "Fully Transparent",
    desc: "The projects declare everything openly, be it project costs or legal affairs",
  },
  {
    image: wallet,
    title: "Flexible Payments",
    desc: "Making real estate affordable and inclusive for everyone. Get in and out of your investment, while getting paid rent daily.",
  },
];

function Home() {
  // const nav = useNavigate();
  // const formDetails = (e) => {
  // 	e.preventDefault();
  // 	nav("/contact-us");
  // };
  // const [selecttext, setSelectText] = useState([coin4, 'Bitcoin']);

  // const dispatch = useAppDispatch()
  // const { web3, contract, accounts, socketContract } = useAppSelector((state) => state.web3Connect);
  const { items: data } = useAppSelector((state) => state.products);

  return (
    <div>
      <Header />
      <div className="page-content">
        <div className="main-bnr style-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h1 className="">
                  Fractional and frictionless
                  <br />
                  Real Estate investing wisdom from the pros.
                </h1>
                <p className="text text-primary ">
                  Invest in projects for as little as $50
                </p>

                <ul className="image-before">
                  <li className="left-img ">
                    <img width="350" height="350" src={logoo} alt="" />
                  </li>
                  <li className="right-img">
                    <img width="200" height="200" src={logoo} alt="" />
                  </li>
                </ul>
                <Link
                  to={"/"}
                  className="btn space-lg btn-gradient btn-shadow btn-primary "
                >
                  Visit MarketPlace
                </Link>
              </div>
            </div>
          </div>
          <img loading="lazy" className="bg-shape1" src={Shape1} alt="" />
          <img loading="lazy" className="bg-shape2" src={Shape1} alt="" />
          {/* <img className="bg-shape3" src={Shape3} alt="" /> */}
          {/* <img className="bg-shape4" src={Shape3} alt="" /> */}
        </div>
        <div className="text-center clearfix bg-primary-light ">
          <div className="container">
            <div className="currancy-wrapper">
              <div className="row justify-content-center">
                <BannerCard />
              </div>
            </div>
          </div>
        </div>
        <section className="clearfix section-wrapper1 bg-primary-light">
          <div className="container">
            <div className="content-inner-1">
              <div className="section-head text-center">
                <h2 className="title">Why Trust Us?</h2>
                <p>
                  SecondaryDAO leverages the security of Ethereum, and the
                  affordability of layer 2 solutions like Arbitrum, to power
                  it's transactions, backed by a team with over 50 years
                  experience.Maybe Investing in any tokenized fractionalized
                  real estate platform, including SecondaryDAO,involves risk,
                  and Investing in any tokenized fractionalized real estate
                  platform, including SecondaryDAO it's important to thoroughly
                  research and understand the potential risks before investing.
                  However, there are several factors that may contribute to
                  building trust in SecondaryDAO and fractionalized tokenized
                  real estate investing:
                </p>
              </div>
              <div className="row">
                {trustBlog.map((data, ind) => (
                  <div className="col-lg-6 m-b30" key={ind}>
                    <div className="icon-bx-wraper style-2">
                      <div className="icon-media">
                        <img src={data.image} alt="" />
                      </div>
                      <div className="icon-content">
                        <h4 className="title">{data.title}</h4>
                        <p>{data.desc}</p>
                        <Link
                          className="btn btn-primary btn-gradient btn-shadow"
                          to={"/about-us"}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img loading="lazy" className="bg-shape1" src={Shape1} alt="" />
        </section>
        <section className="content-inner bg-light icon-section section-wrapper2">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">
                Servicing{" "}
                <span className="text-primary">
                  {" "}
                  Sellers and Property Investors{" "}
                </span>
                through a digital platform
              </h2>
            </div>
            <div className="row sp60">
              <OneStop />
            </div>
          </div>
          <img loading="lazy" className="bg-shape1" src={Shape1} alt="" />
        </section>
        <div className="row bg-white">
          <div className=" mt-5">
            <ul>
              <Marquee speed={80} loop={0} pauseOnHover={true}>
                {data.map((item, index) => (
                  <div className="card overflow-hidden ms-4 " key={index}>
                    <div className="card-body d-flex align-items-center">
                      <div className="me-4 ">
                        <p className="mb-2 fs-13">
                          <i
                            className="fa fa-caret-up scale5 me-2 text-success"
                            aria-hidden="true"
                          ></i>
                          {new Date(item.createdAt).toDateString()}
                        </p>
                        <h4 className="heading mb-0">{item.name}</h4>
                      </div>
                      <div className="coin-img">
                        <img
                          loading="lazy"
                          width="42"
                          height="42"
                          src={item.image?.url}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </ul>
          </div>
        </div>
        <div className="content-inner bg-white">
          <section className={layout.sectionReverse}>
            <div className="row">
              <div className="col">
                <div className={layout.sectionImgReverse}>
                  <img
                    loading="lazy"
                    src={pic}
                    alt="pic"
                    className="w-[60%] h-[80%] relative z-[5]"
                  />
                </div>
              </div>
              <div className="col">
                <div className={layout.sectionInfo}>
                  <h2 className="title mt-5 mr-7">
                    Build wealth with real <br /> estate one brick at a time
                  </h2>
                  <p>
                    Invest in rental properties without getting locked in (or
                    out). Start with just $50 and collect your first rent
                    payment later today
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="content-inner bg-white blog-wrapper">
          <img className="bg-shape1" loading="lazy" src={Shape1} alt="" />

          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-12">
                <div className="section-head ">
                  <h6 className="sub-title text-primary">FROM OUR BLOG</h6>
                  <h2 className="title">Recent News &amp; Updates</h2>
                </div>
                <RecentNews />
              </div>
              <div className="col-xl-5 col-lg-12 m-b30 ">
                <div
                  className="dz-card style-2"
                  loading="lazy"
                  style={{ backgroundImage: "url(" + ma3 + ")" }}
                >
                  <div className="dz-category">
                    <ul className="dz-badge-list">
                      <li>
                        <Link to={"#"} className="dz-badge">
                          14 Fan 2022
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dz-info">
                    <h2 className="dz-title">
                      <Link to={"/blog-details"} className="text-white">
                        Directly support individuals Crypto
                      </Link>
                    </h2>
                    <div className="dz-meta">
                      <ul>
                        <li className="post-author">
                          <Link to={"#"}>
                            <img src={about1} alt="" className="me-2" />
                            <span>Joshua Freedman</span>
                          </Link>
                        </li>
                        <li className="post-date">
                          <Link to={"#"}> 12 May 2022</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
