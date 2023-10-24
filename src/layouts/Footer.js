import React from "react";
import { Link } from "react-router-dom";

//images
import shape1 from "./../assets/images/home-banner/shape1.png";
import bgimage from "./../assets/images/background/bg1.jpg";
import logowhite from "./../assets/images/logos.png";
import flags from "./../assets/images/footer/world-map-with-flags1.png";

function Footer() {
  return (
    <>
      <footer className="site-footer style-1" id="footer">
        <img className="bg-shape1" src={shape1} alt="" />
        <div
          className="footer-top background-luminosity"
          style={{ backgroundImage: "url(" + bgimage + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="widget widget_about">
                  <div className="footer-logo logo-white">
                    <Link to={"/"}>
                      <img src={logowhite} alt="" />
                    </Link>
                  </div>
                  <p>
                    For the first time, investors around the globe can buy into
                    the real estate market through fully compliant,
                    fractional, tokenized ownership. Powered by Blockchain
                  </p>
                  <div className="dz-social-icon transparent space-10">
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          className="fab fa-linkedin"
                          href="https://www.linkedin.com/company/SecondaryDAO/"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          target="_blank"
                          className="fab fa-twitter"
                          href="https://www.twitter.com/secondaryDAO"
                        ></a>
                      </li>{" "}
                      <li>
                        <a
                          target="_blank"
                          className="fab fa-youtube"
                          href="https://www.youtube.com/channel/UCbAfRu0udgs0Ur2LsVXLbyA"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="widget widget_services">
                  <h4 className="widget-title">Other Links</h4>
                  <ul>
                    <li>
                      <Link to={"/about-us"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/termsofservice"}>Terms of Service</Link>
                    </li>
                    <li>
                      <Link to={"/blog-list"}>Our Blogs</Link>
                    </li>
                    <li>
                      <Link>List Your Property</Link>
                    </li>
                    <li>
                      <Link to={"/privacypolicy"}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={"/faq"}>FAQs</Link>
                    </li>
                    <li>
                      <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-12">
                <div className="widget widget_locations">
                  <h4 className="widget-title">Locations</h4>
                  <div className="clearfix">
                    <h6 className="title">Mechanicsburg</h6>
                    <p>6 State RD, Suite 117 Mechanicsburg, PA 17050-7957</p>
                    <img src={flags} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <div className="container">
            <span className="copyright-text">
              Copyright © 2023{" "}
              <a href="https://secondarydao.com/" target="_blank">
                SecondaryDAO
              </a>
              . All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
