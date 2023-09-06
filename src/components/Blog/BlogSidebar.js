import React from 'react';
import { Link } from 'react-router-dom';
// import { Nav, Tab } from 'react-bootstrap';
// import OrderForm from '../MarketPlace/OrderForm';
// import pic1 from './../../assets/images/blog/small/pic1.jpg';
// import pic2 from './../../assets/images/blog/small/pic2.jpg';
// import pic3 from './../../assets/images/blog/small/pic3.jpg';
import { useAppSelector } from '../../reducer/store';

// const listData = [
// 	{}, {}, {},
// 	{}, {}, {},
// 	{}, {}, {},
// 	{}, {},
// ];

const categories = [
    { title: 'Investment Markets' }, 
    { title: 'Real Estate Investing 101' }, 
    { title: 'News' }
];

const tagData = [
    { title: 'USDT' }, { title: 'USDC' },
    { title: 'Ethereum' }, { title: 'SecondaryDAO' },
];

const BlogSidebar = () => {
    const { blogs: data, status } = useAppSelector((state) => state.blogdb);
    const PF = "http://localhost:5000/imges/";

    return (
        <>
            <aside className="side-bar sticky-top right">
                <div className="widget">
                    <div className="widget-title">
                        <h4 className="title">Search</h4>
                    </div>
                    <div className="search-bx">
                        <form role="search" method="post">
                            <div className="input-group">
                                <div className="input-skew">
                                    <input name="text" className="form-control" placeholder="Search.." type="text" />
                                </div>
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary sharp radius-no"><i className="fa-solid fa-magnifying-glass scale3"></i></button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="widget widget_categories">
                    <div className="widget-title">
                        <h4 className="title">Categories</h4>
                    </div>
                    <ul>
                        {categories.map((data, ind) => (
                            <li className="cat-item" key={ind}>
                                <Link to={"#"}>{data.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-posts-entry">
                    <div className="widget-title">
                        <h4 className="title">Recent Post</h4>
                    </div>
                    <div className="widget-post-bx">
                        {data.map((item, ind) => (
                            <div className="widget-post clearfix" key={ind}>
                                <div className="dz-media">
                                    <img src={PF + item.photo} alt="" />
                                </div>
                                <div className="dz-info">
                                    <h6 className="title"><Link to={"/blog-details"}>{item.title}</Link></h6>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"><Link to={"#"}> {new Date(item.createdAt).toDateString()}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="widget widget_tag_cloud">
                    <div className="widget-title">
                        <h4 className="title">Popular Tags</h4>
                    </div>
                    <div className="tagcloud">
                        {tagData.map((data, index) => (
                            <Link to={"#"} key={index}>{data.title}</Link>
                        ))}

                    </div>
                </div>
            </aside>
        </>
    )
}
export default BlogSidebar;