import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logos from "./../assets/images/logos.png";
import LogoWhite from "./../assets/images/logos.png";
import { logoutUser } from "../slices/authSlice";
import { loadUser } from "../slices/authSlice";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  /* for sticky header */
  const [headerFix, setheaderFix] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <>
      <header className="site-header mo-left header header-transparent style-1">
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix">
            <div className="container clearfix">
              <div className="logo-header"> 
                <Link to={"/"} className="logo-dark">
                  <img src={Logos} alt="" />
                </Link>
                <Link to={"/"} className="logo-light">
                  <img src={LogoWhite} alt="" />
                </Link>
              </div>
              <button
                type="button"
                className={`navbar-toggler  navicon justify-content-end ${
                  sidebarOpen ? "open" : "collapsed"
                }`}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <div className="extra-nav">
                                <div className="extra-cell">
                                    <a className="btn btn-outline-primary text-white" target="_blank" rel="noreferrer" href="https://tasty-earrings-bee.cyclic.app/">Login</a>
                                    <a className="btn btn-primary btn-gradient btn-shadow" target="_blank" rel="noreferrer" href="https://tasty-earrings-bee.cyclic.app/page-register">Register</a>
                                </div>
                            </div> */}

              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  sidebarOpen ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header mostion">
                  <NavLink to={"#"} className="logo-dark">
                    <img width="150" height="150" src={Logos} alt="" />
                  </NavLink>
                </div>
                <ul className="nav navbar-nav navbar">
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/marketplace"}>MarketPlace</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about-us"}>About Us</NavLink>
                  </li>
                  {/* <li><NavLink to={"/pricing"}>Pricing</NavLink></li> */}
                  <li>
                    <NavLink to={"/blog-list"}>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact-us"}>Contact Us</NavLink>
                  </li>
                  {auth._id && !auth.isAdmin ? (
                    <>
                      <li>
                        <NavLink to={"/account"}>
                          <button
                            type="button"
                            className="btn btn-outline-primary text-primary"
                          >
                            {/* <NavLink  to={"/account"}>Account</NavLink> */}
                            Account
                          </button>
                        </NavLink>
                      </li>
                      {/* <li className={`sub-menu-down  ${showMenu ? "open" : ""}`} id="menushow"
                                                onClick={() => setShowMenu(!showMenu)}>
                                                <button type="button" className='btn btn-outline-primary text-primary dropdown-toggle'
                                                    >Account</button>
                                                <ul className="sub-menu">
                                                    <li><NavLink to={"/account"}>Dashboard</NavLink></li>
                                                    <li><NavLink to={"/login"}
                                                        onClick={() => { dispatch(logoutUser(null));
                                                            // toast.warning("Logged out!", { position: "bottom-left" });
                                                        }}
                                                    >Logout</NavLink></li>
                                                </ul>
                                            </li> */}
                    </>
                  ) : (
                    <>
                      <li
                        className={`sub-menu-down  ${showMenu ? "open" : ""}`}
                        id="menushow"
                        onClick={() => setShowMenu(!showMenu)}
                      >
                        <button
                          type="button"
                          className="btn btn-outline-primary text-primary dropdown-toggle"
                        >
                          Get Started
                        </button>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to={"/login"}>User Login</NavLink>
                          </li>
                          {/* <li><NavLink href="https://tasty-earrings-bee.cyclic.app/page-register">Admin Login</NavLink></li> */}
                          {/* <li><a target="_blank" rel="noreferrer" href="https://tasty-earrings-bee.cyclic.app/">Admin Login</a></li> */}
                          {/* <a className="btn btn-primary btn-gradient btn-shadow" target="_blank" rel="noreferrer" href="https://tasty-earrings-bee.cyclic.app/page-register">Register</a> */}
                          <li>
                            <NavLink to={"/signup"}>Sign Up</NavLink>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                </ul>

                <div className="header-bottom">
                  <div className="dz-social-icon">
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          className="fab fa-facebook-f"
                          rel="noreferrer"
                          href="https://www.facebook.com/"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          target="_blank"
                          className="fab fa-twitter"
                          rel="noreferrer"
                          href="https://twitter.com/"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          target="_blank"
                          className="fab fa-linkedin-in"
                          rel="noreferrer"
                          href="https://www.linkedin.com/"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          target="_blank"
                          className="fab fa-instagram"
                          rel="noreferrer"
                          href="https://www.instagram.com/"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
