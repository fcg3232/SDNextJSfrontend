import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { resetPassword } from "../slices/resetPassword";

const OtpCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const otp = useSelector((state) => state.resetPassword);

  const [user, setUser] = useState({
    email: "",
    code: "",
    password: "",
  });

  useEffect(() => {
    if (otp.resetStatus === "success") {
      navigate("/login");
    }
  }, [otp.resetStatus, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(resetPassword(user));
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
                    <p className="font-18">
                      Fill out the form and our team will get back to you within
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
                        <h2 className="mb-0">Reset Password</h2>
                      </div>
                      <form className="dzForm" onSubmit={handleSubmit}>
                        <div className="dzFormMsg"></div>
                        <input
                          type="hidden"
                          className="form-control"
                          name="dzToDo"
                          value="Contact"
                        />
                        <div className="row">
                          <div className="mb-3 mb-md-4">
                            <label className="form-label text-primary">
                              Enter your Registered Email
                            </label>
                            <input
                              name="dzFirstName"
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                              }
                            />
                          </div>
                          <div className="mb-3 mb-md-4">
                            <label className="form-label text-primary">
                              Please Enter OTP Here
                            </label>
                            <input
                              name="OTP"
                              type="number"
                              className="form-control"
                              placeholder="OTP"
                              onChange={(e) =>
                                setUser({ ...user, code: e.target.value })
                              }
                            />
                          </div>
                          <div className=" mb-3 mb-md-4">
                            <label className="form-label text-primary">
                              Enter New Password
                            </label>
                            <input
                              name="dzLastName"
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                              }
                            />
                          </div>
                          <div className="col-xl-12">
                            <button
                              name="submit"
                              type="submit"
                              value="Submit"
                              className="btn btn-primary"
                            >
                              {otp.resetStatus === "pending"
                                ? "Submitting..."
                                : // <>
                                  // {
                                  //   otp.resetStatus === "success" ?  "submited": "Submitting..."
                                  // }
                                  // </>
                                  "  Submit"}
                            </button>
                            {/* {otp.resetStatus === "rejected" ? <p>{otp.otpError}</p> : null} */}
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

export default OtpCode;
