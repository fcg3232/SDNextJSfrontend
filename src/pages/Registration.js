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
  first_name: yup.string().required("Please Enter Your First Name"),
  last_name: yup.string().required("Please Enter Your Last Name"),
  phone: yup.string().required("Please Enter Your Phone Number"),
  email: yup.string().email().required("Please Enter Your Email"),
  dateofBirth: yup.date().required("Please Enter Your Date of Birth"),
  residence_country: yup.string().required("Please Enter Residency Country Name"),
  nationality: yup.string().required("Please Enter Nationality"),
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
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  dateofBirth: "",
  residence_country: "",
  nationality: "",
  password: "",
};

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [location, setlocation] = useState("");
  const [nationality, setnationality] = useState("");

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: initialValues,
      // {
      //   name: "",
      //   phone: "",
      //   email: "",
      //   dateofBirth: "",
      //   residence_country: location,
      //   nationality: nationality,
      //   password: "",
      // },
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

              <div className="col-xl-7 col-lg-7 mt-5">
                <div className="contact-box mt-5">
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
                        <div className="row">
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input
                              name="first_name"
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                              value={values.first_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.first_name}
                              </p>
                            ) : null}
                          </div>
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input
                              name="last_name"
                              type="last_name"
                              className="form-control"
                              placeholder="Last Name No."
                              value={values.last_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.last_name}
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
                              autoComplete="dateofBirth"
                              name="dateofBirth"
                              type="date"
                              className="form-control"
                              placeholder="Date of Birth"
                              value={values.dateofBirth}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.dateofBirth}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="row">
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
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input
                              autoComplete="residence_country"
                              name="residence_country"
                              type="string"
                              className="form-control"
                              placeholder="Residence Country"
                              value={values.residence_country}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.residence_country}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input
                              autoComplete="nationality"
                              name="nationality"
                              type="string"
                              className="form-control"
                              placeholder="Nationality"
                              value={values.nationality}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.nationality}
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
                        {/* <div className="row">
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <select 
                            autoComplete="residence_country"
                              onChange={(e) => setlocation(e.target.value)}
                              value={location}
                              onBlur={handleBlur}
                            >
                              <option value="">Residence Country</option>
                              <option value="Alabama">Alabama</option>
                              <option value="Alaska">Alaska</option>
                              <option value="Arizona">Arizona</option>
                              <option value="Arkansas">Arkansas</option>
                              <option value="California">California</option>
                              <option value="Colorado">Colorado</option>
                              <option value="Connecticut">Connecticut</option>
                              <option value="Delaware">Delaware</option>
                              <option value="Florida">Florida</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Hawaii">Hawaii</option>
                              <option value="Idaho">Idaho</option>
                              <option value="Illinois">Illinois</option>
                              <option value="Indiana">Indiana</option>
                              <option value="Iowa">Iowa</option>
                              <option value="Kansas">Kansas</option>
                              <option value="Kentucky">Kentucky</option>
                              <option value="Louisiana">Louisiana</option>
                              <option value="Maine">Maine</option>
                              <option value="Maryland">Maryland</option>
                              <option value="Massachusetts">Massachusetts</option>
                              <option value="Michigan">Michigan</option>
                              <option value="Minnesota">Minnesota</option>
                              <option value="Mississippi">Mississippi</option>
                              <option value="Missouri">Missouri</option>
                              <option value="Montana">Montana</option>
                              <option value="Nebraska">Nebraska</option>
                              <option value="Nevada">Nevada</option>
                              <option value="New Hampshire">New Hampshire</option>
                              <option value="New Jersey">New Jersey</option>
                              <option value="New Mexico">New Mexico</option>
                              <option value="New York">New York</option>
                              <option value="North Carolina">North Carolina</option>
                              <option value="North Dakota">North Dakota</option>
                              <option value="Ohio">Ohio</option>
                              <option value="Oklahoma">Oklahoma</option>
                              <option value="Oregon">Oregon</option>
                              <option value="Pennsylvania">Pennsylvania</option>
                              <option value="Rhode Island">Rhode Island</option>
                              <option value="South Carolina">South Carolina</option>
                              <option value="South Dakota">South Dakota</option>
                              <option value="Tennessee">Tennessee</option>
                              <option value="Texas">Texas</option>
                              <option value="Utah">Utah</option>
                              <option value="Vermont">Vermont</option>
                              <option value="Virginia">Virginia</option>
                              <option value="Washington">Washington</option>
                              <option value="West Virginia">West Virginia</option>
                              <option value="Wisconsin">Wisconsin</option>
                              <option value="Wyoming">Wyoming</option>
                              <option value="District of Columbia">District of Columbia</option>
                              <option value="American Samoa">American Samoa</option>
                              <option value="Guam">Guam</option>
                              <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option value="Puerto Rico">Puerto Rico</option>
                              <option value="California"> U.S. Virgin Islands</option>
                            </select>
                            {errors && touched ? (
                              <p className="text-red mt-2 text-p">
                                {errors.residence_country}
                              </p>
                            ) : null}
                          </div>

                          <div className="col-xl-6 mb-3 mb-md-4">
                          <select 
                            autoComplete="nationality"
                              onChange={(e) => setnationality(e.target.value)}
                              value={nationality}
                              onBlur={handleBlur}
                            >
                              <option value="">Nationality</option>
                              <option value="Alabama">Alabama</option>
                              <option value="Alaska">Alaska</option>
                              <option value="Arizona">Arizona</option>
                              <option value="Arkansas">Arkansas</option>
                              <option value="California">California</option>
                              <option value="Colorado">Colorado</option>
                              <option value="Connecticut">Connecticut</option>
                              <option value="Delaware">Delaware</option>
                              <option value="Florida">Florida</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Hawaii">Hawaii</option>
                              <option value="Idaho">Idaho</option>
                              <option value="Illinois">Illinois</option>
                              <option value="Indiana">Indiana</option>
                              <option value="Iowa">Iowa</option>
                              <option value="Kansas">Kansas</option>
                              <option value="Kentucky">Kentucky</option>
                              <option value="Louisiana">Louisiana</option>
                              <option value="Maine">Maine</option>
                              <option value="Maryland">Maryland</option>
                              <option value="Massachusetts">Massachusetts</option>
                              <option value="Michigan">Michigan</option>
                              <option value="Minnesota">Minnesota</option>
                              <option value="Mississippi">Mississippi</option>
                              <option value="Missouri">Missouri</option>
                              <option value="Montana">Montana</option>
                              <option value="Nebraska">Nebraska</option>
                              <option value="Nevada">Nevada</option>
                              <option value="New Hampshire">New Hampshire</option>
                              <option value="New Jersey">New Jersey</option>
                              <option value="New Mexico">New Mexico</option>
                              <option value="New York">New York</option>
                              <option value="North Carolina">North Carolina</option>
                              <option value="North Dakota">North Dakota</option>
                              <option value="Ohio">Ohio</option>
                              <option value="Oklahoma">Oklahoma</option>
                              <option value="Oregon">Oregon</option>
                              <option value="Pennsylvania">Pennsylvania</option>
                              <option value="Rhode Island">Rhode Island</option>
                              <option value="South Carolina">South Carolina</option>
                              <option value="South Dakota">South Dakota</option>
                              <option value="Tennessee">Tennessee</option>
                              <option value="Texas">Texas</option>
                              <option value="Utah">Utah</option>
                              <option value="Vermont">Vermont</option>
                              <option value="Virginia">Virginia</option>
                              <option value="Washington">Washington</option>
                              <option value="West Virginia">West Virginia</option>
                              <option value="Wisconsin">Wisconsin</option>
                              <option value="Wyoming">Wyoming</option>
                              <option value="District of Columbia">District of Columbia</option>
                              <option value="American Samoa">American Samoa</option>
                              <option value="Guam">Guam</option>
                              <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option value="Puerto Rico">Puerto Rico</option>
                              <option value="California"> U.S. Virgin Islands</option>
                            </select>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="col-xl-12 mb-3 mb-md-4">
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
