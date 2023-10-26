import styles from "./style";
// import { arrowUp } from "../assets";
import { memo } from "react";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Visit</span>
        </p>
        {/* <img loading="lazy" src={arrowUp} alt="arrow-up" className="animate-ping  w-[23px] h-[23px] object-contain" /> */}
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">MarketPlace</span>
      </p>
    </div>
  </div>
);

export default memo(GetStarted);
