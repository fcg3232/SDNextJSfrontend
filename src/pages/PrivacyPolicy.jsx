import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Shape1 from './../assets/images/home-banner/shape1.png';
import Shape3 from './../assets/images/home-banner/shape3.png';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';


function PrivacyPolicy() {
    const nav = useNavigate();
    const formDetails = (e) => {
        e.preventDefault();
        nav("/contact-us");
    };
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <Header />
            <div className="page-content">
                <div className="dz-bnr-inr style-1 text-center">
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Privacy Policy</h1>
                            <nav className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                                    <li className="breadcrumb-item active">Privacy Policy</li>
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
                                    <div className="buy-sel mt-5">
                                    </div>
                                    <div className="dz-info m-b30">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <Link to={"#"}>
                                                        {/* <img src={avat3} alt="" />  */}
                                                        <span>Last Updated</span>
                                                    </Link>
                                                </li>
                                                <li className="post-date"><Link to={"#"}>{new Date().toDateString()}</Link></li>
                                                {/* <li className="post-comment"><Link to={"#"}>3 comment</Link></li> */}
                                            </ul>
                                        </div>
                                        <h3 className="dz-title">Privacy Policy for FCG dba SecondaryDAO </h3>
                                        <div className="dz-post-text">
                                            <p>
                                                At FCG dba SecondaryDAO, we are committed to protecting the privacy of our users.
                                                This Privacy Policy outlines how we collect, use, disclose, and protect
                                                personal information on our tokenized real estate platform.
                                            </p>
                                            <h4>Collection of Personal Information</h4>
                                            <p>
                                                We collect personal information from our users when they register for an
                                                account, invest in real estate properties, and engage in other activities
                                                on our platform. The personal information we collect may include:
                                            </p>
                                            <blockquote className="wp-block-quote">
                                                <ul className="m-b30">
                                                    <li>Name and contact information, such as email address and phone number</li>
                                                    <li>Investment and financial information, such as payment details</li>
                                                    <li>Property preferences and interests</li>
                                                </ul>
                                            </blockquote>
                                            <h4>Use of Personal Information</h4>
                                            <p>We use the personal information we collect for the following purposes:</p>
                                            <blockquote className="wp-block-quote">
                                                <ul className="m-b30">
                                                    <li>To provide and improve our platform and services</li>
                                                    <li>To process and manage investments and transactions</li>
                                                    <li>To communicate with users about their investments and our platform</li>
                                                    <li>To comply with legal and regulatory requirements</li>
                                                </ul>
                                            </blockquote>
                                            <h4>Disclosure of Personal Information</h4>
                                            <p>We may disclose personal information to third-party service providers
                                                that help us operate and manage our platform and services. We may also
                                                disclose personal information to comply with legal and regulatory requirements,
                                                to protect our rights and interests, or to investigate and prevent fraud and
                                                other unlawful activities.</p>
                                            <h4>Protection of Personal Information</h4>
                                            <p>
                                                We use reasonable and appropriate technical and organizational measures to protect
                                                the personal information we collect from unauthorized access, use, or disclosure.
                                                We also require our third-party service providers to implement appropriate security
                                                measures to protect personal information.
                                            </p>
                                            <h4>Retention of Personal Information</h4>
                                            <p>
                                                We retain personal information for as long as necessary to fulfill the purposes for which
                                                it was collected, to comply with legal and regulatory requirements, and to protect our
                                                rights and interests.
                                            </p>
                                            <h4>Access and Correction of Personal Information</h4>
                                            <p>
                                                Users may access, review, and update their personal information on our platform.
                                                Users may also request that we delete their personal information by contacting us at the
                                                email address provided below.
                                            </p>
                                            <h4>Changes to Privacy Policy</h4>
                                            <a>We may update this Privacy Policy from time to time. We will notify users of any material
                                                changes by posting a notice on our platform or by sending an email to the email address
                                                on file.</a>
                                                <h4>Contact Us</h4>
                                                <a>If you have any questions or concerns about this Privacy Policy, please contact us at </a>
                                                <br/>
                                                <a>info@secondarydao.com.</a>
                                                <br/>
                                                <a>Effective Date: April 1, 2023</a>
                                        </div>
                                        <div className="dz-share-post">
                                            <div className="post-tags">
                                                {/* <h6 className="m-b0 m-r10 d-inline">Tags:</h6> */}
                                                <Link to={"#"}><span>SecondaryDAO</span></Link>
                                                <Link to={"#"}><span>Cryptocurrency</span></Link>
                                                <Link to={"#"}><span>Decentralization</span></Link>
                                            </div>
                                            <div className="dz-social-icon dark">
                                                <ul>
                                                    <li><a target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                                                    <li><a target="_blank" className="fab fa-instagram" href="https://www.instagram.com/"></a></li>
                                                    <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/"></a></li>
                                                    <li><a target="_blank" className="fab fa-youtube" href="https://www.youtube.com/"></a></li>
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
                                        <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                        <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />

                                        <div className="row">
                                            <div className="col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.1s">
                                                <input name="dzFirstName" required="" type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div className="col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                                <input name="dzLastName" required="" type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                            <div className="col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.3s">
                                                <input name="dzEmail" required="" type="text" className="form-control" placeholder="Email Address" />
                                            </div>
                                            <div className="col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                                <input name="dzPhoneNumber" required="" type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                            <div className="col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.5s">
                                                <input name="dzMessage" required="" type="text" className="form-control" placeholder="Your Message" />
                                            </div>
                                            <div className="col-md-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                                <button name="submit" type="submit" value="Submit" className="btn btn-dark btn-block h-100">Submit</button>
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
    )
}
export default PrivacyPolicy;