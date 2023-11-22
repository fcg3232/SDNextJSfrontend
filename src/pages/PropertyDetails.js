import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "./../layouts/PageLayout";
// import BlogSidebar from './../components/Blog/BlogSidebar';
import { Nav } from "react-bootstrap";
import { CONTRACT_ABIS } from "../contract/property";
import { useAppSelector, useAppDispatch } from "../reducer/store";
import { loadBlockchain } from "../slices/web3ContractSlice";
// import styled from "styled-components";
// import styles, { layout } from "../../style";
import axios from "axios";
import { url } from "../slices/api";
//images
// import blog from './../assets/images/blog/blog-detaills-1.jpg';
import avat3 from "./../assets/images/avatar/avatar3.jpg";
import avat2 from "./../assets/images/avatar/avatar2.jpg";
import avat1 from "./../assets/images/avatar/avatar1.jpg";
// import pic4 from './../assets/images/blog/pic4.jpg';
// import pic5 from './../assets/images/blog/pic5.jpg';
import Sidebar from "../components/MarketPlace/SideBar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Details from "../components/MarketPlace/Details";
import Financials from "../components/MarketPlace/Financials";
import Documents from "../components/MarketPlace/Documents";
import BuyingProcess from "../components/MarketPlace/BuyingProcess";
import Market from "../components/MarketPlace/Market";
import OrderBook from "../components/MarketPlace/OrderBook";

// const relatedBlog = [
//     { image1: pic4, image2: avat2, title: 'Why You Should Not Go To Cryptocurrency.' },
//     { image1: pic5, image2: avat3, title: 'Five Easy Rules Of bitcoin.' },
// ];

const CommentBlog = ({ image, title }) => {
  return (
    <>
      <div className="comment-body">
        <div className="comment-author vcard">
          <img className="avatar photo" src={image} alt="" />
        </div>
        <div className="comment-info">
          <div className="title">
            <cite className="fn">{title}</cite>
            <span>07 March, 2022</span>
          </div>
          <p>
            Integer consectetur diam vitae imperdiet iaculis. In faucibus, sem
            sit amet tincidunt egestas, magna ligula interdum leo.
          </p>
          <div className="reply">
            <Link to={"#"} className="comment-reply-link">
              <span>
                <i className="fa-solid fa-share"></i>REPLY
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

function PropertyDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [loadchain, setloadchain] = useState();
  const [datas, setdatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isContractLoad, setisContractLoad] = useState(false);
  const [checkID, setcheckID] = useState();
  const dispatch = useAppDispatch();
  const { web3, contract, accounts, socketContract } = useAppSelector(
    (state) => state.web3Connect
  );

  useEffect(() => {
    dispatch(loadBlockchain());
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${url}/products/find/${params.id}`);
        setProduct(res.data);
        !checkID && setcheckID(res.data.uid);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
    if (checkID) {
      const contractofProperty = new web3.eth.Contract(
        CONTRACT_ABIS,
        product.uid
      );
      !loadchain && setloadchain(contractofProperty);
      if (loadchain) {
        const fetchData = async () => {
          try {
            let completeProp = await contractofProperty.methods
              .getCompletePropDetails()
              .call();
            setdatas(completeProp);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }
    }
  }, [params.id, loadchain, checkID]);

  let currentSelected = <OrderBook />;

  const switchComp = (type) => {
    console.log("🚀 ~ file: PropertyDetails.js:108 ~ switchComp ~ type:", type);

    switch (type) {
      case "Financials":
        currentSelected = <Financials />;
        break;
      case "Documents":
        currentSelected = <Documents />;
        break;
      case "Buying Process":
        currentSelected = <BuyingProcess />;
        break;
      case "Market":
        currentSelected = <Market />;
        break;
      case "Order Book":
        currentSelected = <OrderBook />;
        break;
      default:
        currentSelected = <Details />;
    }

    return currentSelected;
  };
  return (
    <>
      <Header />
      <div className="page-content">
        <PageLayout desc={false} pageTitle={product.name} />
        <section className="content-inner" style={{ background: "white" }}>
          <div className="container">
            <div className="row ">
              <div className="col-xl-8 col-lg-8">
                <div className="blog-single dz-card sidebar">
                  <div className="dz-media dz-media-rounded">
                    <img src={product.image?.url} alt="" />
                  </div>
                  <div className="buy-sel mt-5">
                    <Nav className="nav nav-tabs" role="tablist">
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        eventKey="Navbuy"
                        type="button"
                        onClick={() => switchComp("Details")}
                      >
                        Details
                      </Nav.Link>
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        eventKey="Navsell"
                        type="button"
                        onClick={() => switchComp("Financials")}
                      >
                        Financials
                      </Nav.Link>
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        eventKey="Doc"
                        type="button"
                        onClick={() => switchComp("Documents")}
                      >
                        Documents
                      </Nav.Link>
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        eventKey="buy"
                        type="button"
                        onClick={() => switchComp("Buying Process")}
                      >
                        Buying Process
                      </Nav.Link>
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        eventKey="Mar"
                        type="button"
                        onClick={() => switchComp("Market")}
                      >
                        Market
                      </Nav.Link>
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        eventKey="Orb"
                        type="button"
                        onClick={() => switchComp("Order Book")}
                      >
                        Order Book
                      </Nav.Link>
                    </Nav>
                  </div>
                  {currentSelected}
                </div>
                {/* <div className="widget-title">
                                    <h4 className="title">Related Blog</h4>
                                </div> */}
                {/* <div className="row m-b30 m-sm-b10">
                                    {relatedBlog.map((item, ind) => (
                                        <div className="col-md-6 m-b30" key={ind}>
                                            <div className="dz-card style-1  blog-lg overlay-shine ">
                                                <div className="dz-media ">
                                                    <Link to={"/blog-details"}><img src={item.image1} alt="" /></Link>
                                                </div>
                                                <div className="dz-info">
                                                    <div className="dz-meta">
                                                        <ul>
                                                            <li className="post-author">
                                                                <Link to={"#"}>
                                                                    <img src={item.image2} alt="" />
                                                                    <span>By Jemmy</span>
                                                                </Link>
                                                            </li>
                                                            <li className="post-date"><Link to={"#"}> 24 May 2022</Link></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="dz-title"><Link to={"/blog-details"}>{item.title}</Link></h4>
                                                    <p>A wonderful serenity has taken of my entire soul, like these.</p>
                                                    <Link to={"/blog-details"} className="btn btn-primary">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                <div className="clear" id="comment-list">
                  <div className="comments-area style-1 clearfix" id="comments">
                    <div className="widget-title">
                      <h4 className="title">Comments</h4>
                    </div>
                    <div className="clearfix">
                      <ol className="comment-list">
                        <li className="comment">
                          <CommentBlog image={avat1} title="Lillian Walsh" />
                          <ol className="children">
                            <li className="comment">
                              <CommentBlog image={avat2} title="Walsh Nehan" />
                            </li>
                          </ol>
                        </li>
                        <li className="comment">
                          <CommentBlog image={avat3} title="Boni Joye" />
                        </li>
                      </ol>
                    </div>

                    <div className="widget-title">
                      <h4 className="title">Leave A Reply</h4>
                    </div>
                    <div className="clearfix">
                      <div
                        className="default-form comment-respond style-1"
                        id="respond"
                      >
                        <form
                          className="comment-form"
                          id="commentform"
                          method="post"
                        >
                          <p className="">
                            <label>
                              Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="FirstName"
                              placeholder="First Name"
                              id="FirstName"
                              className="form-control"
                            />
                          </p>
                          <p className="">
                            <label>
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Email"
                              name="email"
                              id="email"
                              className="form-control"
                            />
                          </p>
                          <p className="comment-form-comment">
                            <label>Message</label>
                            <textarea
                              rows="8"
                              name="Message"
                              placeholder="Message"
                              id="Message"
                              className="form-control"
                            ></textarea>
                          </p>
                          <p className="form-submit">
                            <button
                              type="submit"
                              className="btn btn-primary btn-skew btn-icon"
                              id="submit"
                            >
                              <span>Submit Now</span>
                            </button>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default PropertyDetails;
