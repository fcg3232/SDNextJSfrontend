import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../reducer/store";
import { RiDeleteBinLine } from "react-icons/ri";
import { Dropdown } from 'react-bootstrap';
import Filter from '../../layouts/Filter';

function ListProperty() {
  const { items: data, status } = useAppSelector((state) => state.products);
  const { Country } = useAppSelector((state) => state.FiterProperty);

  return (
    <>
      <section className="content-inner bg-white">
        <div className="container">
          <div className="row ">
            <div className="col-xl-12 col-lg-4">
              <Filter />
            </div>
            <div className="col-xl-12 col-lg-8">
              <div className="row">
                {status === "success" ? (
                  <>
                    {Country != 0 ? (
                      <>
                        {data &&
                          data
                            ?.filter((key) => key.location == Country)
                            .map((item) => (
                              <div className="col-xl-3 col-md-6" key={item._id}>
                                <div className="card contact_list ">
                                  <div className="card-body text-center">
                                    <div className="user-content">
                                      <div className="user-info">
                                        <div className="user-img">
                                          <Link to={"/propertydetails/" + item._id}>
                                            <img
                                              style={{
                                                width: "13.50rem",
                                                minWidth: "13.50rem",
                                                height: "8.50rem",
                                                borderRadius: "20px",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                position: "relative",
                                                zIndex: "0",
                                              }}
                                              src={item.image?.url} alt="" />
                                          </Link>
                                        </div>
                                        <div className="user-details">
                                          <div className="ms-0">
                                            <span className='fs-8'>{item.propertytype}</span>
                                          </div>
                                          <h4 className="user-name">{item.uid?.substring(0, 11) + "..."}</h4>
                                          <p className="mb-0 fs-14 text-success">{item.location}</p>
                                          <div className='col'>
                                            <p className="mb-0 fs-14 text-black">Created</p>
                                            <span className="fs-8">{new Date(item.createdAt).toDateString()}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="contact-icon">
                                      <div className="">
                                        <Link to={"/propertydetails/" + item._id}
                                          type="button" className="btn btn-outline-primary" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                          Explore More
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                      </>
                    ) : (
                      <>
                        {data && data?.map((item) => (
                          <div className="col-xl-3 col-md-6" key={item._id}>
                            <div className="card contact_list ">
                              <div className="card-body text-center">
                                <div className="user-content">
                                  <div className="user-info">
                                    <div className="user-img">
                                      <Link to={"/propertydetails/" + item._id}>
                                        <img
                                          style={{
                                            width: "13.50rem",
                                            minWidth: "13.50rem",
                                            height: "8.50rem",
                                            borderRadius: "20px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            position: "relative",
                                            zIndex: "0",
                                          }}
                                          src={item.image?.url} alt="" />
                                      </Link>
                                    </div>
                                    <div className="user-details">
                                      <div className="ms-0">
                                        <span className='fs-8'>{item.propertytype}</span>
                                      </div>
                                      <h4 className="user-name">{item.uid?.substring(0, 11) + "..."}</h4>
                                      <p className="mb-0 fs-14 text-success">{item.location}</p>
                                      <div className='col'>
                                        <p className="mb-0 fs-14 text-black">Created</p>
                                        <span className="fs-8">{new Date(item.createdAt).toDateString()}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="contact-icon">
                                  <div className="">
                                    <Link to={"/propertydetails/" + item._id}
                                      type="button" className="btn btn-outline-primary" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                      Explore More
                                    </Link>
                                  </div>
                                </div>
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
                  <p>Unexpected error occurred...</p>
                )}

                <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                  <nav aria-label="Blog Pagination">
                    <ul className="pagination style-1 text-center">
                      <li className="page-item"><Link to={"#"} className="page-link prev"><i className="fas fa-chevron-left"></i></Link></li>
                      <li className="page-item"><Link to={"#"} className="page-link active">1</Link></li>
                      <li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
                      <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                      <li className="page-item"><Link to={"#"} className="page-link next"><i className="fas fa-chevron-right"></i></Link></li>
                    </ul>
                  </nav>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="page-content bg-primary-light">
        <section className="content-inner">
          <div className="container">
            <div className="row">
              {status === "success" ? (
                <>
                  {Country != 0 ? (
                    <>
                      {data &&
                        data
                          ?.filter((key) => key.location == Country)
                          .map((item) => (
                            <div className="col-xl-3 col-md-6" key={item._id}>
                              <div className="card contact_list ">
                                <div className="card-body text-center">
                                  <div className="user-content">
                                    <div className="user-info">
                                      <div className="user-img">
                                        <Link to={"/propertydetails/" + item._id}>
                                          <img
                                            style={{
                                              width: "13.50rem",
                                              minWidth: "13.50rem",
                                              height: "8.50rem",
                                              borderRadius: "20px",
                                              marginLeft: "auto",
                                              marginRight: "auto",
                                              position: "relative",
                                              zIndex: "0",
                                            }}
                                            src={item.image?.url} alt="" />
                                        </Link>
                                      </div>
                                      <div className="user-details">
                                        <div className="ms-0">
                                          <span className='fs-8'>{item.propertytype}</span>
                                        </div>
                                        <h4 className="user-name">{item.uid?.substring(0, 11) + "..."}</h4>
                                        <p className="mb-0 fs-14 text-success">{item.location}</p>
                                        <div className='col'>
                                          <p className="mb-0 fs-14 text-black">Created</p>
                                          <span className="fs-8">{new Date(item.createdAt).toDateString()}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="contact-icon">
                                    <div className="">
                                      <Link to={"/propertydetails/" + item._id}
                                        type="button" className="btn btn-outline-primary" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                        Explore More
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                    </>
                  ) : (
                    <>
                      {data && data?.map((item) => (
                        <div className="col-xl-3 col-md-6" key={item._id}>
                          <div className="card contact_list ">
                            <div className="card-body text-center">
                              <div className="user-content">
                                <div className="user-info">
                                  <div className="user-img">
                                    <Link to={"/propertydetails/" + item._id}>
                                      <img
                                        style={{
                                          width: "13.50rem",
                                          minWidth: "13.50rem",
                                          height: "8.50rem",
                                          borderRadius: "20px",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          position: "relative",
                                          zIndex: "0",
                                        }}
                                        src={item.image?.url} alt="" />
                                    </Link>
                                  </div>
                                  <div className="user-details">
                                    <div className="ms-0">
                                      <span className='fs-8'>{item.propertytype}</span>
                                    </div>
                                    <h4 className="user-name">{item.uid?.substring(0, 11) + "..."}</h4>
                                    <p className="mb-0 fs-14 text-success">{item.location}</p>
                                    <div className='col'>
                                      <p className="mb-0 fs-14 text-black">Created</p>
                                      <span className="fs-8">{new Date(item.createdAt).toDateString()}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="contact-icon">
                                <div className="">
                                  <Link to={"/propertydetails/" + item._id}
                                    type="button" className="btn btn-outline-primary" data-mdb-ripple-init data-mdb-ripple-color="dark">
                                    Explore More
                                  </Link>
                                </div>
                              </div>
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
                <p>Unexpected error occurred...</p>
              )}
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                <nav aria-label="Blog Pagination">
                  <ul className="pagination style-1 text-center">
                    <li className="page-item">
                      <Link to={"#"} className="page-link prev">
                        <i className="fas fa-chevron-left"></i>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to={"#"} className="page-link active">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to={"#"} className="page-link">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to={"#"} className="page-link">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to={"#"} className="page-link next">
                        <i className="fas fa-chevron-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
}
export default ListProperty;
