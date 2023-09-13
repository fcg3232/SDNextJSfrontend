import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Shape1 from "./../assets/images/home-banner/shape1.png";
import Shape3 from "./../assets/images/home-banner/shape3.png";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function TermsofService() {
  const nav = useNavigate();
  const formDetails = (e) => {
    e.preventDefault();
    nav("/contact-us");
  };
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Header />
      <div className="page-content">
        <div className="dz-bnr-inr style-1 text-center">
          <div className="container">
            <div className="dz-bnr-inr-entry">
              <h1>Terms of Service</h1>
              <nav className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Terms of Service</li>
                </ul>
              </nav>
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape1} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </div>

        <section className="content-inner" style={{ background: "white" }}>
          <div className="container">
            <div className="row ">
              <div className="col-xl-12 col-lg-8">
                <div className="blog-single dz-card sidebar">
                  <div className="buy-sel mt-5"></div>
                  <div className="dz-info m-b30">
                    <div className="dz-meta">
                      <ul>
                        <li className="post-author">
                          <Link to={"#"}>
                            {/* <img src={avat3} alt="" />  */}
                            <span>Last Updated</span>
                          </Link>
                        </li>
                        <li className="post-date">
                          <Link to={"#"}>{new Date().toDateString()}</Link>
                        </li>
                        {/* <li className="post-comment"><Link to={"#"}>3 comment</Link></li> */}
                      </ul>
                    </div>
                    <h3 className="dz-title">Terms of Service</h3>
                    <div className="dz-post-text">
                      <p>
                        This site, SecondaryDAO.com (SD), is operated by
                        Freedman Capital Group, LLC (FCG), ISAOA ATIMA, which is
                        not a registered broker-dealer or investment advisor.
                        FCG does not provide investment advice, endorsement, or
                        recommendations with respect to any properties listed on
                        this site.
                      </p>
                      <p>
                        Nothing on this website should be construed as an offer
                        to sell, solicitation of an offer to buy, or a
                        recommendation in respect of a security. You are solely
                        responsible for determining whether any investment,
                        investment strategy, or related transaction is
                        appropriate for you based on your personal investment
                        objectives, financial circumstances, and risk tolerance.
                        You should consult with licensed legal professionals and
                        investment advisors for any legal, tax, insurance, or
                        investment advice. FCG does not guarantee any investment
                        performance, outcome, or return of capital for any
                        investment opportunity posted on this site.
                      </p>
                      <p>
                        By accessing this site and any pages thereof, you agree
                        to be bound by the Terms of Service and Privacy Policy.
                        You are responsible for all activity on your account.
                        You must open an account with us (a “SecondaryDAO
                        Account”) to use the Services. During registration, we
                        will ask you for information, which may include, but is
                        not limited to, your name and other personal
                        information. You must provide accurate and complete
                        information in response to our questions, and you must
                        keep that information current. You are fully responsible
                        for all activity that occurs under your SecondaryDAO
                        Account, including for any actions taken by persons to
                        whom you have granted access to the SecondaryDAO
                        Account. We reserve the right to change the account
                        type, suspend or terminate the SecondaryDAO Account of
                        anyone who provides inaccurate, untrue, or incomplete
                        information, or who fails to comply with the account
                        registration requirements. All investments involve risk
                        and may result in partial or total loss. By accessing
                        this site, investors understand and acknowledge
                      </p>
                      <blockquote className="wp-block-quote">
                        <ul className="m-b30">
                          <li>
                            Investing in real estate, like investing in other
                            fields, is risky and unpredictable;
                          </li>
                          <li>
                            that the real estate industry has its ups and downs;
                          </li>
                          <li>
                            that the real property you invest in might not
                            result in a positive cash flow or perform as you
                            expected; and
                          </li>
                          <li>
                            that the value of any real property you invest in
                            may decline at any time, and the future property
                            value is unpredictable.
                          </li>
                        </ul>
                        {/* <p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p> */}
                        {/* <cite> William Son </cite> */}
                      </blockquote>
                      <p>
                        Before making an investment decision, prospective
                        investors are advised to review all available
                        information and consult with their tax and legal
                        advisors. FCG does not provide investment advice or
                        recommendations regarding any offering posted on this
                        website. Any investment-related information contained
                        herein has been secured from sources that FCG believes
                        to be reliable, but we make no representations or
                        warranties as to the accuracy or completeness of such
                        information and accept no liability therefore.
                        Hyperlinks to third-party sites, or reproduction of
                        third-party articles, do not constitute an approval or
                        endorsement by FCG of the linked or reproduced content.
                        There is a $50,000 USD weekly withdrawal limit per user
                        from the FCG platform for cash and cash equivalents
                        including cryptocurrencies, but excluding property
                        tokens. For more information on this policy, refer to
                        our "Learn" center. This limit may change from time to
                        time without warning, but efforts will be made to ensure
                        liquidity. FCG may offer its users on its marketplace
                        and other services the option to use a custodial wallet.
                        This wallet may be used multiple times and does not
                        function like a traditional custodial wallet. Funds in
                        this wallet wholly belong to the users, and they have
                        control of the wallet at all times. FCG is not a
                        registered or licensed custodial service. It is not
                        responsible for the contents of the custodial wallet.
                        Through the relevant smart contracts, the users
                        acknowledge that they are the sole managers and owners
                        of their respective custodial wallets. Lofty will not
                        use the funds in these custodial wallets for any
                        purposes unless directed by the owners. This feature
                        will be enabled by default, but users can, at any time,
                        take full control of the wallet off of Lofty's platform
                        and self-custody of the wallet and its contents. Any
                        property escrows may be held in an IOLTA account by FCG
                        ISAOA ATIMA and may or may not accrue interest. Any
                        interest accrued may be paid to FCG as a partial fee for
                        managing the account, in addition to fees charged by FCG
                        from time to time.
                      </p>
                    </div>
                    <div className="dz-share-post">
                      <div className="post-tags">
                        {/* <h6 className="m-b0 m-r10 d-inline">Tags:</h6> */}
                        <Link to={"#"}>
                          <span>SecondaryDAO</span>
                        </Link>
                        <Link to={"#"}>
                          <span>Cryptocurrency</span>
                        </Link>
                        <Link to={"#"}>
                          <span>Decentralization</span>
                        </Link>
                      </div>
                      <div className="dz-social-icon dark">
                        <ul>
                          <li>
                            <a
                              target="_blank"
                              className="fab fa-facebook-f"
                              href="https://www.facebook.com/"
                            ></a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              className="fab fa-instagram"
                              href="https://www.instagram.com/"
                            ></a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              className="fab fa-twitter"
                              href="https://twitter.com/"
                            ></a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              className="fab fa-youtube"
                              href="https://www.youtube.com/"
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="form-sec bg-light mb-5">
          <img className="bg-shape2" src={Shape1} alt="" />

          <div className="container">
            <div className="bg-primary form-wrapper1 style-1">
              <div className="row align-items-center">
                <div className="col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="section-head">
                    <h5 className="sub-title text-white">JOIN US</h5>
                    <h2 className="title text-white">We Need Your Help</h2>
                  </div>
                </div>
                <div className="col-xl-9">
                  <form className="dzForm" onSubmit={(e) => formDetails(e)}>
                    <div className="dzFormMsg"></div>
                    <input
                      type="hidden"
                      className="form-control"
                      name="dzToDo"
                      value="Contact"
                    />
                    <input
                      type="hidden"
                      className="form-control"
                      name="reCaptchaEnable"
                      value="0"
                    />

                    <div className="row">
                      <div
                        className="col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <input
                          name="dzFirstName"
                          required=""
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div
                        className="col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <input
                          name="dzLastName"
                          required=""
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                      <div
                        className="col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <input
                          name="dzEmail"
                          required=""
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div
                        className="col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <input
                          name="dzPhoneNumber"
                          required=""
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div
                        className="col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <input
                          name="dzMessage"
                          required=""
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                        />
                      </div>
                      <div
                        className="col-md-4 col-sm-6 m-b30 wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="btn btn-dark btn-block h-100"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default TermsofService;
