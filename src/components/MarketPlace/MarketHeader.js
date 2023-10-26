import React, { lazy } from "react";
// import styled from "styled-components";
import styles from "../../pages/style";
import blog3 from "../../assets/images/blog3.png";

const MarketHeader = () => {
  return (
    <section className={`flex md:flex-row flex-col `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            SecondaryDAO <br className="sm:block hidden" />{" "}
            <span className="text-gradient">MarketPlace</span>{" "}
          </h1>
        </div>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            loading="lazy"
            src={blog3}
            alt="discount"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Invest</span> in Property{" "}
            <span className="text-white">Only For</span> $50
          </p>
        </div>
      </div>

      <div
        className={`flex-1 flex  animate-bounce ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          loading="lazy"
          src={blog3}
          alt="billing"
          className=" animate-bounce  w-[100%] h-[85%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default MarketHeader;

// const animation  = styled.div
// `  animation: animate 7s linear infinite;
// `;

// const animate =  styled.div
// `  animation: animate 7s linear infinite;
// `;
