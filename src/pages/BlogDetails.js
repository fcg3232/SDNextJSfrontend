import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../slices/api";
import PageLayout from './../layouts/PageLayout';
import BlogSidebar from './../components/Blog/BlogSidebar';
import prf from './../assets/images/prf.png';
import { useAppSelector } from '../reducer/store';
//images
// import blog from './../assets/images/blog/blog-detaills-1.jpg';
import avat3 from './../assets/images/avatar/avatar3.jpg';
import avat2 from './../assets/images/avatar/avatar2.jpg';
import avat1 from './../assets/images/avatar/avatar1.jpg';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
// import pic4 from './../assets/images/blog/pic4.jpg';
// import pic5 from './../assets/images/blog/pic5.jpg';

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
                    <p>Integer consectetur diam vitae imperdiet iaculis. In faucibus, sem sit amet tincidunt egestas, magna ligula interdum leo.</p>
                    <div className="reply">
                        <Link to={"#"} className="comment-reply-link"><span><i className="fa-solid fa-share"></i>REPLY</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

function BlogDetails() {
    const params = useParams();
    const [Loading, setLoading] = useState(false)
    const [blogs, setblogs] = useState({});
    const { blogs: data, status } = useAppSelector((state) => state.blogdb);
    // {"/propertydetails/" + item._id}
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${url}/blogdb/${params.id}`);
                setblogs(res.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchBlog();
    }, [params.id]);
    const PF = "http://localhost:5000/imges/";

    return (
        <>
            <Header />
            <div className="page-content">
                <PageLayout desc={false} pageTitle="Blog Details " />
                <section className="content-inner" style={{ background: "white" }}>
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-8 col-lg-8">
                                <div className="blog-single dz-card sidebar">
                                    <div className="dz-media dz-media-rounded">
                                        <img src={PF + blogs.photo} alt="" />
                                    </div>
                                    <div className="dz-info m-b30">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <Link to={"#"}>
                                                        <img src={prf} alt="" />
                                                        <span>{blogs.name}</span>
                                                    </Link>
                                                </li>
                                                <li className="post-date"><Link to={"#"}> {new Date(blogs.createdAt).toDateString()}</Link></li>
                                                <li className="post-comment"><Link to={"#"}>3 comment</Link></li>
                                            </ul>
                                        </div>
                                        <h3 className="dz-title">{blogs.title}</h3>
                                        <div className="dz-post-text">
                                            {/* <p>{blogs.desc}</p> */}
                                            <blockquote className="wp-block-quote">
                                                <p>“ {blogs.desc} ”.</p>
                                                <cite> {blogs.name} </cite>
                                            </blockquote>
                                            <p>There are several reasons why you may want to
                                                consider investing in the SecondaryDAO fractionalized tokenized real
                                                estate platform:</p>
                                            <ul className="m-b30">
                                                <li>Diversification: SecondaryDAO allows investors to diversify their investment portfolios by allowing them to invest in a range of real estate assets, including commercial, residential, and industrial properties, in multiple regions and countries.</li>
                                                <li>Increased Accessibility: SecondaryDAO provides access to a wider range of real estate investment opportunities that may have been previously unavailable or difficult to access for individual investors</li>
                                                <li>Liquidity: SecondaryDAO provides investors with the ability to trade their real estate assets more easily, which can lead to quicker exits and exits at a more favorable price.</li>
                                                <li>Transparent and efficient investment process: SecondaryDAO's use of blockchain technology provides a more transparent and efficient investment process, as all investment data and transactions are recorded on a secure and decentralized ledger.</li>
                                                <li>Reduced costs: SecondaryDAO's use of technology can reduce the costs associated with traditional real estate investment, as the investment process is streamlined and automated, reducing the need for intermediaries and manual processes.</li>
                                            </ul>
                                            <p>Please note that investing in any tokenized fractionalized real estate platform, including SecondaryDAO, involves risks and it's important to conduct thorough due diligence and understand the potential risks before investing.</p>
                                        </div>
                                        <div className="dz-share-post">
                                            <div className="post-tags">
                                                <h6 className="m-b0 m-r10 d-inline">Tags:</h6>
                                                <Link to={"#"}><span>Corporate</span></Link>
                                                <Link to={"#"}><span>Blog</span></Link>
                                                <Link to={"#"}><span>Marketing</span></Link>
                                            </div>
                                            <div className="dz-social-icon dark">
                                                <ul>
                                                    <li><a target="_blank" className="fab fa-linkedin" href="https://www.linkedin.com/company/SecondaryDAO/"></a></li>{" "}
                                                    <li><a target="_blank" className="fab fa-twitter" href="https://www.twitter.com/secondaryDAO"></a></li>{" "}
                                                    <li><a target="_blank" className="fab fa-youtube" href="https://www.youtube.com/channel/UCbAfRu0udgs0Ur2LsVXLbyA"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-title">
                                    <h4 className="title">Related Blog</h4>
                                </div>
                                <div className="row m-b30 m-sm-b10">
                                    {data?.map((item, ind, arr) => (
                                        <div className="col-md-6 m-b30" key={ind}>
                                            {arr.length - 2 >= ind ? (
                                                <>
                                                    <div className="dz-card style-1  blog-lg overlay-shine ">
                                                        <div className="dz-media ">
                                                            <Link to={"/blog-details"}><img src={PF + item.photo} alt="" /></Link>
                                                        </div>
                                                        <div className="dz-info">
                                                            <div className="dz-meta">
                                                                <ul>
                                                                    <li className="post-author">
                                                                        <Link to={"#"}>
                                                                            <img src={prf} alt="" />
                                                                            <span>{item.name}</span>
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
                                                </>) : (<></>)}

                                        </div>
                                    ))}
                                </div>
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

                                            <div className="default-form comment-respond style-1" id="respond">
                                                <form className="comment-form" id="commentform" method="post">
                                                    <p className="">
                                                        <label>Name <span className="required">*</span></label>
                                                        <input type="text" name="FirstName" placeholder="First Name" id="FirstName" className="form-control" />
                                                    </p>
                                                    <p className="">
                                                        <label>Email <span className="required">*</span></label>
                                                        <input type="text" placeholder="Email" name="email" id="email" className="form-control" />
                                                    </p>
                                                    <p className="comment-form-comment">
                                                        <label>Message</label>
                                                        <textarea rows="8" name="Message" placeholder="Message" id="Message" className="form-control"></textarea>
                                                    </p>
                                                    <p className="form-submit">
                                                        <button type="submit" className="btn btn-primary btn-skew btn-icon" id="submit"><span>Submit Now</span></button>
                                                    </p>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default BlogDetails;