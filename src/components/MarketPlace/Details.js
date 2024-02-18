import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../reducer/store";
import { loadBlockchain } from "../../slices/web3ContractSlice";
import axios from "axios";
import { url } from "../../slices/api";
import Property_ABI from '../../contract/property.json';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import avat3 from "../../assets/images/avatar/avatar3.jpg";
import icon4 from "../../assets/images/icons/icon4.svg"
import bed from "../../assets/images/bed.png";
import loc from "../../assets/images/loc.png";
import bath from "../../assets/images/bath.png";
import area from "../../assets/images/area.png";
import hom from "../../assets/images/hom.png";
// import avat3 from "../../assets/images/avatar/avatar";


const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loadchain, setloadchain] = useState();
  const [datas, setdatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isContractLoad, setisContractLoad] = useState(false);
  const [checkID, setcheckID] = useState();
  const dispatch = useAppDispatch();
  const { web3, contract, accounts, socketContract } = useAppSelector(
    (state) => state.web3Connect
  );
  const { items: data, status } = useAppSelector((state) => state.products);

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
        Property_ABI,
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

  return (
    <>
      {product != null ? (
        <div className="dz-info m-b30">
          <div className="dz-meta">
            <ul>
              <li className="post-author">
                <Link to={"#"}>
                  <img src={product.image?.url} alt="" />
                  {/* <span>{product.name}</span> */}
                  {new Date(product.createdAt).toDateString()}
                </Link>
              </li>
              {/* <li className="post-date">
            <Link to={"#"}>
              {" "}
              {new Date(product.createdAt).toDateString()}
            </Link>
          </li> */}
              <li className="post-comment">
                <Link to={"#"}>{product.uid}</Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className=" list-table card overflow-hidden ">
                <div className="previews-info-list">
                  <span>
                    <p className="mb-2 fs-16 ">
                      Bedrooms
                    </p>
                    <span className='text-secondary ml-5  fs-26'
                    >{product.bedroom}</span>
                  </span>
                  <span className="text-end">
                    {/* <p className="mb-1" >Expire: 34h</p> */}
                    {/* <Link to={"#"} className="ico-icon">
                  <img className="rounded" width="30" height="30" src={bed} alt="" />
                </Link> */}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className=" list-table card overflow-hidden ">
                <div className="previews-info-list">
                  <span>
                    <p className="mb-2 fs-16 ">
                      Bathrooms
                    </p>
                    <span className='text-secondary ml-5  fs-26'
                    >{product.bathroom}</span>
                  </span>
                  <span className="text-end">
                    {/* <p className="mb-1" >Expire: 34h</p> */}
                    {/* <Link to={"#"} className="ico-icon">
                  <img className="rounded" width="30" height="30" src={bath} alt="" />
                </Link> */}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className=" list-table card overflow-hidden ">
                <div className="previews-info-list">
                  <span>
                    <p className="mb-2 fs-16 ">
                      Location
                    </p>
                    <span className='text-secondary ml-5  fs-26'
                    >{product.location}</span>
                  </span>
                  <span className="text-end">
                    {/* <p className="mb-1" >Expire: 34h</p> */}
                    {/* <Link to={"#"} className="ico-icon">
                  <img className="rounded" width="30" height="30" src={loc} alt="" />
                </Link> */}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className=" list-table card overflow-hidden ">
                <div className="previews-info-list">
                  <span>
                    <p className="mb-2 fs-16 ">
                      Area
                    </p>
                    <span className='text-secondary ml-5  fs-26'
                    >{product.area} sq/ft</span>
                  </span>
                  <span className="text-end">
                    {/* <p className="mb-1" >Expire: 34h</p> */}
                    {/* <Link to={"#"} className="ico-icon">
                  <img className="rounded" width="30" height="30" src={area} alt="" />
                </Link> */}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="dz-post-text">
            <cite>{product.propaddress}</cite>
            <h3>About the Property</h3>
            <blockquote className="wp-block-quote">
              {/* <p>Location: {product.location}</p>
          <p>Address: {product.propaddress}</p> */}
              {product.desc}
            </blockquote>
            {/* <cite> ID: {product._id}</cite> */}
            {/* <ul className="m-b30">
            <li>A wonderful serenity has taken possession.</li>
            <li>
              Of my entire soul, like these sweet mornings of spring which.
            </li>
            <li>I enjoy with my whole heart.</li>
            <li>
              This spot, which was created For the bliss of souls like mine.
            </li>
          </ul> */}
          </div>
          <div className="dz-share-post">
            <div className="post-tags">
              <h6 className="m-b0 m-r10 d-inline">Tags:</h6>
              <Link to={"#"}>
                <span>Corporate</span>
              </Link>
              <Link to={"#"}>
                <span>Blog</span>
              </Link>
              <Link to={"#"}>
                <span>Marketing</span>
              </Link>
            </div>
            <div className="dz-social-icon dark">
              <ul>
                <li>
                  <a
                    target="_blank"
                    className="fab fa-facebook-f"
                    href="https://www.facebook.com/"
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="fab fa-instagram"
                    href="https://www.instagram.com/"
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="fab fa-twitter"
                    href="https://twitter.com/"
                  ></a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="fab fa-youtube"
                    href="https://www.youtube.com/"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : ""}

    </>
  );
};

export default Details;
