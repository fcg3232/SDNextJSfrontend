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


const navbarLink = ['Details', "Financials", 'Documents', 'Buying Process', 'Market', 'Order Book']

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
