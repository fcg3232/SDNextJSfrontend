import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "./../layouts/PageLayout";
import { Nav } from "react-bootstrap";
import  Property_ABI  from "../contract/property.json";
import { useAppSelector, useAppDispatch } from "../reducer/store";
import { loadBlockchain } from "../slices/web3ContractSlice";
import axios from "axios";
import { url } from "../slices/api";
import Sidebar from "../components/MarketPlace/SideBar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Details from "../components/MarketPlace/Details";
import Financials from "../components/MarketPlace/Financials";
import Documents from "../components/MarketPlace/Documents";
import BuyingProcess from "../components/MarketPlace/BuyingProcess";
import Market from "../components/MarketPlace/Market";
import OrderBook from "../components/MarketPlace/OrderBook";
import { config } from '../slices/config'
import { useWriteContract, useReadContract ,useAccountEffect   } from 'wagmi';
import { readContract } from '@wagmi/core'

const navbarLink = ['Details', "Financials", 'Documents', 'Buying Process', 'Market', 'Order Book']
const CONTRACT_ADDRESS="0x910603b35A1fD922094F5243BC30182611db13bC"
const AllComponents = ({ componentType }) => {
  const componentMap = {
    Details: Details,
    Financials: Financials,
    Documents: Documents,
    "Buying Process": BuyingProcess,
    Market: Market,
    "Order Book": OrderBook,
  };

  const ComponentToRender = componentMap[componentType];

  return <>{ComponentToRender && <ComponentToRender />}</>;
};

function PropertyDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [loadchain, setloadchain] = useState();
  const [datas, setdatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkID, setcheckID] = useState();
  const [activeComponent, setActiveComponent] = useState('Details');
  const dispatch = useAppDispatch();
  const { web3, contract, accounts, socketContract } = useAppSelector(
    (state) => state.web3Connect
  );

  const functionRead = async(addres) => {
    const result = await readContract(config, {
      abi: Property_ABI,
      address: addres,
      functionName: 'getCompletePropDetails',
    })
      return result;
      }

  useEffect(() => {
    // dispatch(loadBlockchain());
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
      const fetchda = async () => {
        await functionRead(checkID)
        .then((result) => {
          setdatas(result.PropertyDetails)
          // console.log("Property Details",result.PropertyDetails);
        })
        }
        fetchda()

      // const contractofProperty = new web3.eth.Contract(
      //   Property_ABI,
      //   product.uid
      // );
      // !loadchain && setloadchain(contractofProperty);
      // if (loadchain) {
      //   const fetchData = async () => {
      //     try {
      //       let completeProp = await contractofProperty.methods
      //         .getCompletePropDetails()
      //         .call();
      //       setdatas(completeProp);
      //     } catch (err) {
      //       console.log(err);
      //     }
      //   };
      //   fetchData();
      // }
    }
  }, [params.id, checkID]);

// console.log("Property Details in array",product);

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
                    <Nav defaultActiveKey={'Details'} className="nav nav-tabs" role="tablist">
                      {navbarLink.map((navLink) => (
                        <Nav.Link
                          as="button"
                          className={`nav-link ${navLink === activeComponent ? 'active' : ''} `}
                          eventKey={navLink}
                          type="button"
                          onClick={() => setActiveComponent(navLink)}
                        >
                          {navLink}
                        </Nav.Link>
                      ))}
                    </Nav>
                  </div>
                  <AllComponents componentType={activeComponent} />
                </div>
                {/* <div className="clear" id="comment-list">
                  <div className="comments-area style-1 clearfix" id="comments">
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
                </div> */}
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
