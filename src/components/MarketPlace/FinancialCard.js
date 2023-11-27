import React from "react";
import "../../components/MarketPlace/compo.css";

const FinancialCard = ({
  data: {
    Heading,
    TotalPrice,
    FirstText,
    FirstRight,
    secondText,
    secondRight,
    thirdText,
    thirdRight,
    fourthText,
    fourthRight,
  },
}) => {
  return (
    <>
      <div className="financial-card shadow-xl">
        <div className="financial-sub-card">
          <span className="financial-card-heading">
            {Heading}
          </span>
          <span className="financial-card-heading">{TotalPrice}</span>
        </div>
        <div className="financial-sub-card">
          <span className="financial-card-text">{FirstText}</span>
          <span className="financial-card-price">
            <span>{FirstRight}</span>
          </span>
        </div>
        <div className="financial-sub-card">
          <span className="financial-card-text ">{secondText}</span>
          <span className="financial-card-price">
            <span>{secondRight}</span>
          </span>
        </div>
        <div className="financial-sub-card-end">
          <span className="financial-card-text">{thirdText}</span>
          <span className="financial-card-price">
            <span>{thirdRight}</span>
          </span>
        </div>
        <div className="financial-sub-card-end">
          <span className="financial-card-text md:text-lg">{fourthText}</span>
          <span className="financial-card-price md:text-lg flex items-center">
            <span>{fourthRight}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default FinancialCard;
