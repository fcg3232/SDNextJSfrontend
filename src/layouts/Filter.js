import React from 'react';
import { Link } from 'react-router-dom';
import CountryDropdown from '../components/MarketPlace/search/CountryDropdown';
import LocationDropdown from '../components/MarketPlace/search/LocationDropdown';
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
    { title: 'SEDT' },
    { title: 'USDC' }, { title: 'USDT' },

];

const Filter = () => {

    return (
        <>
            <aside className="side-bar sticky-top right">
                <div className='row'>
                    <div className="widget col-xl-4">
                        <div className="widget-title">
                            <h4 className="title"
                            style={{
                                color: "#213166",
                            }}>Search</h4>
                        </div>
                        <div className="search-bx">
                            <form role="search" method="post">
                                <div className="input-group">
                                    <div className="input-skew">
                                        <input name="text" className="form-control" placeholder="Search.." type="text" />
                                    </div>
                                    <span className="input-group-btn">
                                        <button
                                            style={{
                                                backgroundColor: "#213166",
                                                color: "white",
                                                // borderRadius:"10px"
                                            }}
                                            type="submit" className="btn sharp radius-no"><i className="fa-solid fa-magnifying-glass scale3"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="widget widget_categories col-xl-4">
                        <div className="widget-title">
                            <h4 className="title" style={{
                                color: "#213166",
                            }}>Location and Type</h4>
                        </div>
                        <div className="row">
                        <CountryDropdown />
                        <LocationDropdown />
                        </div>
                        {/* <ul>
                            {categories.map((data, ind) => (
                                <li className="cat-item" key={ind}>
                                    <Link style={{
                                        color: "#213166",
                                    }}
                                        to={"#"}>{data.title}</Link>
                                </li>
                            ))}
                        </ul> */}

                    </div>

                    <div className="widget widget_tag_cloud col-xl-4">
                        <div className="widget-title">
                            <h4 className="title"
                            style={{
                                color: "#213166",
                            }}>Popular Tags</h4>
                        </div>
                        <div className="tagcloud">
                            {tagData.map((data, index) => (
                                <Link to={"#"} key={index}>{data.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}
export default Filter;