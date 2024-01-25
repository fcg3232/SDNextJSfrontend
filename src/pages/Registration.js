import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "../assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
// import { loginUser } from "../slices/authSlice";
import { registerUser } from "../slices/authSlice";
import * as yup from "yup";

const SignUpValidationSchema = yup.object({
  name: yup.string().required("Please Enter Your First Name"),
  phone: yup.string().required("Please Enter Your Phone Number"),
  email: yup.string().email().required("Please Enter Your Email"),
  password: yup
    .string()
    .matches(
      /^(?=.*[!@#$%^&*])/g,
      "Must be at least 8 characters and use at least one special character."
    )
    .min(8)
    .required("Password is required"),
});

const initialValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
};

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values) => {
        dispatch(registerUser(values));
      },
      validationSchema: SignUpValidationSchema,
    });

  useEffect(() => {
    if (auth._id) {
      navigate("/account");
    }
  }, [auth._id, navigate]);

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
                    <p className="font-18">
                      Fill up the form and our team will get back to you within
                      24 hours.
                    </p>
                  </div>

                  <div className="widget widget_about">
                    <div className="widget widget_getintuch">
                      <ul>
                        <li>
                          <i className="fa fa-phone"></i>
                          <span>+14129513882</span>
                        </li>
                        <li>
                          <i className="fa fa-envelope"></i>
                          <span>
                            info@secondarydao.com
                            <br />
                            secondarydao@gmail.com
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>
                          <span>
                            6 State RD, Suite 117
                            <br />
                            Mechanicsburg, PA 17050-7957
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="social-box dz-social-icon style-3">
                    <h6>Our Socials</h6>
                    <ul className="social-icon">
                      <li>
                        <a
                          className="social-btn"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/company/SecondaryDAO/"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="social-btn"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.twitter.com/secondaryDAO"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="social-btn"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.youtube.com/channel/UCbAfRu0udgs0Ur2LsVXLbyA"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
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
                        <p className="mb-0 font-18 text-primary">
                          Enter your personal details below:
                        </p>
                      </div>
                      <form className="dzForm" onSubmit={handleSubmit}>
                        <div className="dzFormMsg"></div>
                        {/* <input type="hidden" className="form-control" name="dzToDo" value="Contact"
                            value={}
                                                onChange={}
                                                onBlur={}
                                                /> */}
                        <div className="row">
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input
                              name="name"
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.name}
                              </p>
                            ) : null}
                          </div>
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input
                              name="phone"
                              type="phone"
                              className="form-control"
                              placeholder="Phone No."
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.phone}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input
                              autoComplete="email"
                              name="email"
                              type="email"
                              className="form-control"
                              placeholder="Email Address"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.email}
                              </p>
                            ) : null}
                          </div>

                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input
                              autoComplete="current-password"
                              name="password"
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.password}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <button
                              name="submit"
                              type="submit"
                              value="Submit"
                              className="btn btn-primary"
                            >
                              {auth.rigisterStatus === "pending"
                                ? "Submitting..."
                                : "Submit Now"}
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
  );
};

export default Registration;
