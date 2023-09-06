import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../reducer/store';



function ListProperty() {
    const { items: data, status } = useAppSelector((state) => state.products);
    const { Country } = useAppSelector((state) => state.FiterProperty);

    return (
        <>
            <div className="page-content bg-primary-light">
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            {status === "success" ?
                                (<>
                                    {Country != 0 ? (
                                        <>
                                            {data &&
                                                data?.filter((key) => key.location == Country).map((item) => (
                                                    <div className="col-md-6 col-xl-4 m-b30" key={item._id}>
                                                        <div class="card bg-dark text-white">
                                                            <Link to={"/propertydetails/" + item._id}><img width="200" height="200" src={item.image?.url} alt="" /></Link>
                                                            <div class="card-img-overlay">
                                                                <h5 class="card-title">Card title</h5>
                                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                                <p class="card-text">Last updated 3 mins ago</p>
                                                            </div>
                                                        </div>
                                                        {/* <div className="dz-card style-1 blog-lg overlay-shine">
                                                            <div className="dz-media"
                                                             style={{ width: "200px", height: "200px" }}>
                                                                <Link to={"/propertydetails/" + item._id}><img width="200" height="200" src={item.image?.url} alt="" /></Link>
                                                            </div>
                                                            <div className="dz-info">
                                                                <div className="dz-meta">
                                                                    <ul>
                                                                        <Link to={"#"}>
                                                                            <img src={item.image2} alt="" />
                                                                            <span>{item.location} - {item.propaddress}</span>
                                                                        </Link>
                                                                        <li className="post-date"><Link to={"#"}>{new Date(item.createdAt).toDateString()}</Link></li>
                                                                    </ul>
                                                                    <p className="post-date"><Link to={"#"}>{new Date(item.createdAt).toDateString()}</Link></p>
                                                                </div>
                                                                <h4 className="dz-title"><Link to={"/propertydetails/" + item._id}>{item.name}</Link></h4>
                                                                <p>
                                                                    <span className="price">50% IRR</span>
                                                                    <span className="price">10% CoC</span>
                                                                </p>
                                                                <Link to={"/propertydetails/" + item._id} className="btn btn-primary">Availiable: 500 Tokens at $50</Link>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                ))}
                                        </>
                                    ) : (
                                        <>
                                            {data &&
                                                data?.map((item) => (
                                                    <div className="col-md-6 col-xl-4 m-b30" key={item._id}>
                                                        <div className="dz-card style-1 blog-lg overlay-shine">
                                                            <div className="dz-media">
                                                                <Link to={"/propertydetails/" + item._id}><img width="400" height="400" src={item.image?.url} alt="" /></Link>
                                                            </div>
                                                            <div className="dz-info">
                                                                <div className="dz-meta">
                                                                    <ul>
                                                                        <Link to={"#"}>
                                                                            {/* <img src={item.image2} alt="" /> */}
                                                                            <span>{item.location} - {item.propaddress}</span>
                                                                        </Link>
                                                                        {/* <li className="post-date"><Link to={"#"}>{new Date(item.createdAt).toDateString()}</Link></li> */}
                                                                    </ul>
                                                                    <p className="post-date"> Date: <Link to={"#"}>{new Date(item.createdAt).toDateString()}</Link></p>
                                                                </div>
                                                                <h4 className="dz-title"><Link to={"/propertydetails/" + item._id}>{item.name}</Link></h4>
                                                                <p>
                                                                    <span className="price">50% IRR</span>
                                                                    <br />
                                                                    <span className="price">10% CoC</span>
                                                                </p>
                                                                <Link to={"/propertydetails/" + item._id} className="btn btn-primary">Availiable: 500 Tokens at $50</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </>
                                    )}
                                </>
                                ) : status === "pending" ? (
                                    <p>Loading...</p>
                                ) : (
                                    <p>Unexpected error occured...</p>
                                )
                            }
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                                <nav aria-label="Blog Pagination">
                                    <ul className="pagination style-1 text-center">
                                        <li className="page-item"><Link to={"#"} className="page-link prev" ><i className="fas fa-chevron-left"></i></Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link active" >1</Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link" >2</Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link" >3</Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link next" ><i className="fas fa-chevron-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ListProperty;