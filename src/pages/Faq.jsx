import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Shape1 from './../assets/images/home-banner/shape1.png';
import Shape3 from './../assets/images/home-banner/shape3.png';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
// import { ContentToggle } from "../components/toggles";
import { ContentToggle } from '../components/toggles';


const questions = [
    { title: ' What Information do we collect?', content: 'Personal information you disclose to us.Information automatically collected.' },
    { title: 'How do we use your information?', content: 'We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.' },
    { title: 'Will your information shared with anyone?', content: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.' },
    { title: 'Do we use Cookies and other trancking Technology?', content: 'We may use cookies and other tracking technologies to collect and store your information.' },
    { title: 'How long do we keep your infomration?', content: 'We may use cookies and other tracking technologies to collect and store your information.' },
    { title: 'How can you contact us about the Notice?', content: 'Mechanicsburg, 6 State RD Suite 117 Mechanicsburg,PA 17050-7957 USA' },
];

function Faq() {
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
                            <h1>FAQ's</h1>
                            <nav className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                                    <li className="breadcrumb-item active">FAQs</li>
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
                                                {/* <li className="post-date"><Link to={"#"}>{new Date().toDateString()}</Link></li> */}
                                                {/* <li className="post-comment"><Link to={"#"}>3 comment</Link></li> */}
                                            </ul>
                                        </div>
                                        <h3 className="dz-title">FAQs</h3>
                                        <div className="dz-post-text">
                                            {questions.map((data, ind) => (
                                                <div key={ind}>
                                                    <ContentToggle
                                                        title={data.title}
                                                        content={data.content}
                                                    />
                                                </div>
                                            ))}
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
export default Faq;