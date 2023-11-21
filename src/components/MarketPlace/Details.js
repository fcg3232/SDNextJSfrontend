import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../reducer/store";
import { loadBlockchain } from "../../slices/web3ContractSlice";
import axios from "axios";
import { url } from "../../slices/api";
import { CONTRACT_ABIS } from "../../contract/property";

import avat3 from "../../assets/images/avatar/avatar3.jpg";
// import avat3 from "../../assets/images/avatar/avatar";


const Details = () => {
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

  return (
    <>
      <div className="dz-info m-b30">
        <div className="dz-meta">
          <ul>
            <li className="post-author">
              <Link to={"#"}>
                <img src={avat3} alt="" /> 
                <span>By Jone Doe</span>
              </Link>
            </li>
            <li className="post-date">
              <Link to={"#"}>
                {" "}
                {new Date(product.createdAt).toDateString()}
              </Link>
            </li>
            <li className="post-comment">
              <Link to={"#"}>3 comment</Link>
            </li>
          </ul>
        </div>
        {/* <h3 className="dz-title">{product.name}</h3> */}
        <div className="dz-post-text">
          {/* <p>{product.desc}</p> */}
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy
          </p>
          <p>
            For the bliss of souls like mine. I am so happy, my dear friend, so
            absorbed in the exquisite sense of mere tranquil existence, that I
            neglect my talents. I should be incapable of drawing a single stroke
            at the present moment; and yet I feel that I never was a greater
            artist than now. When, while the lovely valley teems with vapour
            around me, and the meridian sun strikes the upper surface of the
            impenetrable foliage of my trees, and but a few stray gleams steal
            into.
          </p>
          <blockquote className="wp-block-quote">
            <p>
              “ A wonderful serenity has taken possession of my entire soul,
              like these sweet mornings of spring which I enjoy with my whole
              heart. I am alone, and feel the charm. ”.
            </p>
            <cite> William Son </cite>
          </blockquote>
          <p>
            The inner sanctuary, I throw myself down among the tall grass by the
            trickling stream; and, as I lie close to the earth, a thousand
            unknown plants are noticed by me: when I hear the buzz of the little
            world among the stalks, and grow familiar with the countless
            indescribable forms of the insects and flies, then I feel the
            presence of the Almighty, who formed us in his own image, and the
            breath.
          </p>
          <ul className="m-b30">
            <li>A wonderful serenity has taken possession.</li>
            <li>
              Of my entire soul, like these sweet mornings of spring which.
            </li>
            <li>I enjoy with my whole heart.</li>
            <li>
              This spot, which was created For the bliss of souls like mine.
            </li>
          </ul>
          <p>
            The inner sanctuary, I throw myself down among the tall grass by the
            trickling stream; and, as I lie close to the earth, a thousand
            unknown plants are noticed by me: when I hear the buzz of the little
            world among the stalks, and grow familiar with the countless
            indescribable forms of the insects and flies, then I feel the
            presence of the Almighty.
          </p>
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
    </>
  );
};

export default Details;
