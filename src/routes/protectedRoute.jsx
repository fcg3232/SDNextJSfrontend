import React from "react";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

import Login from "../pages/Login";
import MarketPlace from "../pages/MarketPlace";
import PrivateRoutes from "./route";
import Registration from "../pages/Registration";
import EnterEmail from "../pages/EnterEmail";
import OtpCode from "../pages/OtpCode";

const AppRoutes = () => {
  const isUserLoggedIn = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="logout" element={<Logout />} /> */}
        {isUserLoggedIn ? (
          <>
            <Route path="/*" element={<PrivateRoutes />} />
            {/* <Route index element={<Navigate to="/dashboard" />} /> */}
          </>
        ) : (
          <>
            <Route path="/signup" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/enteremail" exact element={<EnterEmail />} />
            <Route path="/otpcode" exact element={<OtpCode />} />
            <Route path="/" element={<MarketPlace />} />
            <Route path="*" element={<Navigate to="/login" />} />
            </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
export { AppRoutes };
