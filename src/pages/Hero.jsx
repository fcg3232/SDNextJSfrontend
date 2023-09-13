import React, { lazy } from "react";
import styles from "./style";
import { Link } from "react-router-dom";
// import {house} from "../assets";
import house from "./../assets/images/house.png";
import GetStarted from "./GetStarted";
import { memo } from "react";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            loading="lazy"
            src={house}
            alt="discount"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Invest</span> in Property{" "}
            <span className="text-white">Only For</span> $50
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Feature of <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Real Estate</span>{" "}
          </h1>
          <Link to="/marketplace">
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </Link>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Investment.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Real estate investing is notoriously one of the best ways to build
          generational wealth. Investment properties are excellent long-term
          investments due to appreciation and are also a great source of passive
          income.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          loading="lazy"
          src={house}
          alt="billing"
          className="w-[100%] h-[75%] relative z-[5]"
        />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default memo(Hero);
