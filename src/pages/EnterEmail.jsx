import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { url, setHeaders } from "../slices/api";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { OtpGenerated } from "../slices/otpGenerate";
import Spinner from "react-bootstrap/Spinner";
import { useAppDispatch, useAppSelector } from "../reducer/store";
const EnterEmail = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const params = useParams();
  const { code, otpStatus } = useAppSelector((state) => state.sendemail);
  // const [emails, setemails] = useState();
  // const [done, setdone] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
  });

  useEffect(() => {
    // if (auth.isAdmin) {
    //     navigate(
    //         <href="https://tasty-earrings-bee.cyclic.app/"/>
    //     );
    // }
    // else if (auth._id) {
    //     navigate("/account/assertsOverview");
    // }
    if (otpStatus === "success") {
      // if (done) {
      navigate("/otpcode");
    }
  }, [navigate, otpStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(OtpGenerated(user));
  };
  console.log(code);

  // const emailsend = (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     axios.post(`${url}/sendemail`, {
  //         email:emails
  //       },
  //       setHeaders()
  //       )
  //       .then((response) => {
  //         if (response.data.url) {
  //           window.location.href = response.data.url;
  //         }
  //         setLoading(false);
  //         setdone(true)
  //       })
  //       .catch((err) => console.log(err.message));

  //   };

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
                            6 State RD, Suite <br />
                            117 Mechanicsburg, PA 17050-7957
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
                        <h2 className="mb-0">Enter Email</h2>
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
                            <input
                              name="dzFirstName"
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              // onChange={(e) => setemails(e.target.value)} />
                              onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
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
                              {otpStatus === "pending" ? (
                                <>
                                  <Spinner
                                    animation="border"
                                    variant="secondary"
                                  />
                                  {/* <span>Please Wait</span> */}
                                </>
                              ) : (
                                // <Spinner animation="border" role="status">
                                //     <span className="visually-hidden">Loading...</span>
                                // </Spinner>
                                // "Submitting..."
                                // <>
                                // {
                                //   otp.otpStatus === "success" ?  "submited": "Submitting..."
                                // }
                                // </>
                                "  Submit"
                              )}
                            </button>

                            {/* {otp.otpStatus === "success" ? "" : null} */}
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

export default EnterEmail;
