import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../reducer/store';
import prf from './../../assets/images/prf.png';


function RecentNews() {
    const { blogs: data, status } = useAppSelector((state) => state.blogdb);
    const PF = "http://localhost:5000/imges/";
    return (
        <>
            {data.map((item, ind, arr) => (
                <div className="dz-card style-1 blog-half m-b30" key={ind}>
                    {arr.length - 2 >= ind ? (
                        <>
                            <div className="dz-media">
                                <Link to={"/blog-details/" + item._id}><img src={PF + item.photo} alt="" /></Link>
                                <ul className="dz-badge-list">
                                    <li><Link to={"#"} className="dz-badge">{new Date(item.createdAt).toDateString()}</Link></li>
                                </ul>
                                <Link to={"/blog-details/" + item._id} className="btn btn-secondary">Read More</Link>
                            </div>
                            <div className="dz-info">
                                <div className="dz-meta">
                                    <ul>
                                        <li className="post-author">
                                            <Link to={"#"}>
                                                <img src={prf} alt="" className="me-2" />
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                        <br/>
                                        {/* <li className="post-date"><Link > {new Date(item.createdAt).toDateString()}</Link></li> */}
                                    </ul>
                                </div>
                                <h4 className="dz-title"><Link to={"/blog-details/" + item._id}>{item.title}</Link></h4>
                                {/* <p className="m-b0">{item.desc}</p> */}
                                {/* <p className="m-b0">Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute.</p> */}
                                <p className="post-date">{new Date(item.createdAt).toDateString()}</p>
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}

                </div>
            ))}
        </>
    )
}
export default RecentNews;