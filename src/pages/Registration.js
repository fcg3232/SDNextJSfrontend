import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "../assets";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
// import { loginUser } from "../slices/authSlice";
import { registerUser } from "../slices/authSlice";

const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        if (auth._id) {
            navigate("/account");
        }
    }, [auth._id, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(user);
        dispatch(registerUser(user));
    };


    return (
        <>
            <Header />
            <div className="page-content bg-black">
                <section className="content-inner contact-form-wraper style-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-5 m-b30 mt-5">
                                <div className="info-box">
                                    <div className="info">
                                        <h2>Contact Information</h2>
                                        <p className="font-18">Fill up the form and our team will get back to you within 24 hours.</p>
                                    </div>

                                    <div className="widget widget_about">
                                        <div className="widget widget_getintuch">
                                            <ul>
                                                <li>
                                                    <i className="fa fa-phone"></i>
                                                    <span>+19168060052</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <span>info@secondarydao.com<br />secondarydao@gmail.com</span>
                                                </li>
                                                <li>
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <span>6 State RD, Suite <br />117 Mechanicsburg, PA 17050-7957</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="social-box dz-social-icon style-3">
                                        <h6>Our Socials</h6>
                                        <ul className="social-icon">
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/SecondaryDAO/"><i className="fa-brands fa-linkedin"></i></a></li>
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.twitter.com/secondaryDAO"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCbAfRu0udgs0Ur2LsVXLbyA"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-7 col-lg-7">
                                <div className="contact-box">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <h2 className="mb-0">Sign Up</h2>
                                                <p className="mb-0 font-18 text-primary">Enter your personal details below:</p>
                                            </div>
                                            <form className="dzForm" onSubmit={handleSubmit}>
                                                <div className="dzFormMsg"></div>
                                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzFirstName" type="text" className="form-control" placeholder="Name"
                                                            onChange={(e) => setUser({ ...user, name: e.target.value })} />
                                                    </div>
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzPhoneNumber" type="phone" className="form-control" placeholder="Phone No."
                                                            onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                                    </div>
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzEmail" type="email" className="form-control" placeholder="Email Address"
                                                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                                    </div>
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzPassword" type="password" className="form-control" placeholder="Password"
                                                            onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <button name="submit" type="submit" value="Submit" className="btn btn-primary">
                                                            {auth.rigisterStatus === "pending" ? "Submitting..." : "Submit Now"}
                                                        </button>
                                                        {auth.registerStatus === "rejected" ? (
                                                            <p>{auth.registerError}</p>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Registration