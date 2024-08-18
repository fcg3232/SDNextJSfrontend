import React, { Suspense, lazy, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useParams,
  useNavigate,
  Router,
} from "react-router-dom";
// import { Route, Routes, useLocation, useNavigate, useParams, BrowserRouter } from 'react-router-dom';
import NotFound from "../pages/NotFound";
import { useDispatch } from "react-redux";
import { getUser, loadUser } from "../slices/authSlice";
import ScrollToTop from "../layouts/ScrollToTop";
// import Header from './../layouts/Header';
// import Footer from './../layouts/Footer';
// import Home from './Home';
import AboutUs from "../pages/AboutUs";
import Pricing from "../pages/Pricing";
import BlogList from "../pages/BlogList";
import BlogGrid from "../pages/BlogGrid";
import BlogDetails from "../pages/BlogDetails";
import ContactUs from "../pages/ContactUs";
import MarketPlace from "../pages/MarketPlace";
import PropertyDetails from "../pages/PropertyDetails";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import TermsofService from "../pages/TermsofService";
import Faq from "../pages/Faq";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Dashboard from "../components/Dashboard/Dashboard";
import Start from "../components/Dashboard/Start";
import Verification from "../components/Dashboard/Verification";
import EnterEmail from "../pages/EnterEmail";
import OtpCode from "../pages/OtpCode";
import SWAPWALLETS from "../components/swap-wallets";
import SwapWallets from "../components/swap-wallets";
import ProtectedRoute from "./protectedRoute";
import Settings from "../components/Dashboard/Settings";
import KycForm from "../components/kyc/kycForm";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// const Login = lazy(() => import('./Login'));
const Home = lazy(() => import("../pages/Home"));

function Loading() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <div className="flex mt-5 h-screen w-screen items-center text-center justify-center">
      <button
        type="button"
        className="flex items-center rounded-lg bg-green-700 px-4 py-2 text-white"
        disabled
      >
        <svg
          className="mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="font-medium"> Processing... </span>
      </button>
    </div>
  );
}

function PrivateRoutes() {
  const user = useSelector((state) => state.auth);

  return (
    <>
      <ToastContainer />
      <div className="page-wraper">
        {/* <Header /> */}
        <Routes>
          {user?.kycVerified ? (
            <>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loading />}>
                    <MarketPlace />
                  </Suspense>
                }
              />

              {/* <Route path='/' exact element={<Home />} /> */}
              <Route path="*" element={<NotFound />} />
              <Route path="/login" exact element={<Login />} />
              {/* <Route path="/marketplace" exact element={<MarketPlace />} /> */}
              <Route
                path="/propertydetails/:id"
                exact
                element={<PropertyDetails />}
              />
              {/* <Route path='/about-us' exact element={<AboutUs />} /> */}
              {/* <Route path='/introcard' exact element={<IntroCard />} /> */}
              <Route path="/enteremail" exact element={<EnterEmail />} />
              <Route path="/otpcode" exact element={<OtpCode />} />
              {/* <Route path='/pricing' exact element={<Pricing />} /> */}
              {/* <Route path='/blog-list' exact element={<BlogList />} /> */}
              {/* <Route path='/blog-grid' exact element={<BlogGrid />} /> */}
              {/* <Route path='/blog-details/:id' exact element={<BlogDetails />} /> */}
              {/* <Route path='/contact-us' exact element={<ContactUs />} /> */}
              <Route path="/signup" exact element={<Registration />} />
              {/* <Route path='/termsofservice' exact element={<TermsofService />} /> */}
              {/* <Route path='/faq' exact element={<Faq />} /> */}
              {/* <Route path='/privacypolicy' exact element={<PrivacyPolicy />} /> */}
              <Route path="/account" exact element={<Account />}>
                <Route index element={<Dashboard />} />
                <Route path="start" exact element={<Start />} />
                <Route path="verification" exact element={<Verification />} />
                <Route path="swap" exact element={<SwapWallets />} />
              </Route>
              <Route
                path="settings"
                element={
                  <Suspense fallback={<Loading />}>
                    <Settings />
                  </Suspense>
                }
              />
              {/* <Route path="/start" element={<Start />}>
						<
					</Route> */}
            </>
          ) : (
            <>
              <Route
                path="settings"
                element={
                  <Suspense fallback={<Loading />}>
                    <Settings />
                  </Suspense>
                }
              />
              <Route path="/*" element={<Navigate to="/settings" />} />
            </>
          )}
        </Routes>
        {/* <Footer /> */}
        <ScrollToTop />
      </div>
    </>
  );
}
export default PrivateRoutes;
