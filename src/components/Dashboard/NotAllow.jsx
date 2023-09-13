import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../slices/api";
// import BerbixVerify from "berbix-react";
// import BerbixVerify from '../berbix';
import Start from "./Start";

const NotAllow = () => {
  const params = useParams();
  // const [userID, setuserID] = useState();
  const [clientID, setclientID] = useState();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${url}/berbix/find/${user._id}`);
        // !clientID &&
        setclientID(res.data[0].client_token);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [params.id, clientID]);
  // customerUid
  console.log("clientID:", clientID);
  console.log("ID:", user._id);
  const verify = () => {
    // ${url}/berbix/create-transaction
    // https://api.berbix.com/v0/transactions
    axios
      .post(`${url}/berbix/create-transaction`, {
        userId: user._id,
        email: user.email,
        phone: user.phone,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      {/* {!clientID ? (
        <>
          <Start />
        </>
      ) : (
        <>
          {
        <div className=" mt-5 text ">
          <h1 className="display-2 ml-5 text-center fw-bold text-Black">
            Start <br />
            ID  <span className="text-gradient">Verification....</span>
            <br />
            <Link className="btn btn-primary" onClick={() => verify()}>Start</Link>
            <BerbixVerify
              clientToken={clientID}
              onComplete={() => {
                // the user has completed the verification flow
              }}
            />

          </h1>

        </div>
      }
        </>
      )} */}
      <Start />
      <div className="mb-5"></div>
    </div>
  );
};

export default NotAllow;
