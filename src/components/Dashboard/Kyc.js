import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { url, setHeaders } from "../../slices/api";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const Kyc = () => {
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const user = useSelector((state) => state.auth);
  const [users, setusers] = useState([]);
  const [userKycData, setUserKycData] = useState(null);
  const [isKYCDataLoading, setIsKYCDataLoading] = useState(true);
  const [activeWalletData, setActiveWalletData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [userKycVerificationStatus, setUserKycVerificationStatus] =
    useState(null);

  // ----------------- DONT SHOW KYC BTN UNTIL USER IS LOADED AS WE SEND EXTERNAL ID WITH IT

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Token e31169640d9147493929ab77c9128470b16d",
  };

  // console.log("activeWallet", activeWallet);

  useEffect(() => {
    if (user._id) {
      const fetchUserData = async () => {
        try {
          setIsKYCDataLoading(true);
          const currentUserResponse = await axios.get(
            `${url}/users/find/${user._id}`,
            {
              headers: headers,
            }
          );
          const { data } = currentUserResponse;
          setUserData(data);

          // Try-Catch around the activeWallet logic
          try {
            const activeWallet = data.wallets.filter(
              (wallet) => wallet.active === true
            );
            setActiveWalletData(activeWallet);
            console.log("activeWalletactiveWallet", activeWallet);

            if (activeWallet[0]?.addressVerificationStatus === null) {
              const verifyAddress = async () => {
                try {
                  const verifyAMLResponse = await axios.post(
                    `${url}/kyc/verify-aml`,
                    {
                      walletAddress: activeWallet[0].address,
                      asset: "ETH",
                    }
                  );

                  if (verifyAMLResponse.data) {
                    await axios.patch(
                      `${url}/users/wallet/update/${user._id}`,
                      {
                        walletAddresses: data.wallets.map(
                          (wallet) => wallet.address
                        ),
                        activeWallet: activeWallet[0].address,
                        amlStatusUpdate: verifyAMLResponse.data,
                      }
                    );

                    // Fetch updated user data after AML verification
                    const updatedUserResponse = await axios.get(
                      `${url}/users/find/${user._id}`,
                      {
                        headers: headers,
                      }
                    );
                    setUserData(updatedUserResponse.data);
                  } else {
                    toast.error("Error adding AML address verification");
                  }
                } catch (err) {
                  console.error("Error verifying address:", err);
                  toast.error("Error verifying address:", err);
                }
              };
              verifyAddress();
            }
          } catch (walletError) {
            console.error("Error processing wallet data:", walletError);
            toast.error("Error processing wallet data");
          }

          console.log("data._id", data._id);
          console.log("data.verification_id", data.verification_id);

          // Fetch KYC Data Logic
          if (data._id && data.verification_id) {
            try {
              const verificationRes = await axios.get(
                `https://kyc-api.amlbot.com/verifications/${data.verification_id}`,
                {
                  headers: headers,
                }
              );

              if (
                data._id &&
                data.applicant_id &&
                verificationRes.data.status !== "pending"
              ) {
                try {
                  const kycRes = await axios.get(
                    `${url}/kyc/find/${data._id}`,
                    {
                      headers: headers,
                    }
                  );
                  setUserKycVerificationStatus(null); // Skip pending status
                  setUserKycData(kycRes.data.kyc_data);
                  console.log("kycRes.data", kycRes.data);
                  setIsKYCDataLoading(false);
                } catch (kycError) {
                  setIsKYCDataLoading(false);
                  console.error("Error fetching KYC data:", kycError);
                  toast.error("Error fetching KYC data");
                }
              }

              setUserKycVerificationStatus(verificationRes.data);
              setIsKYCDataLoading(false);
            } catch (kycVerificationError) {
              setIsKYCDataLoading(false);
              console.error(
                "Error fetching KYC verification:",
                kycVerificationError
              );
              toast.error("Error fetching KYC verification");
            }
          }
          setIsKYCDataLoading(false);
        } catch (userError) {
          setIsKYCDataLoading(false);
          console.error("Error fetching user data:", userError);
          toast.error("Error fetching user data");
        }
      };
      fetchUserData();
    }
  }, [user._id]);

  // console.log("useruseruser", user);

  const formId = "8b32344e08c0454c312878540ce69ba5892c";
  const verify = () => {
    setLoading(true);
    if (users != null && user._id) {
      axios
        .post(
          `https://kyc-api.amlbot.com/forms/${formId}/urls`,
          {
            redirect_url: `https://www.app.secondarydao.com/account?redirected=true`,
            external_applicant_id: user._id,
          },
          {
            headers: headers,
          }
        )
        .then(async (res) => {
          if (res.data.form_url) {
            setLoading(false);
            try {
              await axios.patch(
                `${url}/users/${user._id}`,
                { verification_id: res.data.verification_id },
                setHeaders()
              );
              window.location.href = res.data.form_url;
            } catch (error) {
              toast.error("Failed to update KYC verification ID:", error);
            }
          }
        })
        .catch((error) => {
          setLoading(false);

          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            // Loop through each error message and display it using toast.error
            error.response.data.errors.forEach((err) => {
              toast.error(`${err.parameter}: ${err.message}`);
            });
          } else {
            // Fallback if there are no detailed error messages
            toast.error("Error starting KYC verification.");
          }

          console.error("Error during KYC verification", error);
        });
    } else {
      toast.error("Error starting KYC verification.");
    }
  };
  console.log("userDatauserData", userData);

  const WalletData = () => {
    if (userData?.wallets.length > 0 && activeWalletData.length > 0) {
      return (
        <div
          style={{
            border: "1px solid blue",
            borderRadius: "15px",
            padding: "30px",
            position: "absolute",
            bottom: "0",
          }}
          className="start-50 translate-middle"
        >
          <h5 className="text-center fw-bold text-Black">
            <span>Wallet Address: </span>
            <span>{activeWalletData[0]?.address}</span>
          </h5>

          <h5 className="text-center fw-bold text-Black">
            <span>Network: </span>
            <span>
              {activeWalletData[0]?.addressVerificationStatus?.data.network}
            </span>
          </h5>
          <h5 className="text-center fw-bold text-Black">
            <span>Verification Status: </span>
            <span>
              {activeWalletData[0]?.addressVerificationStatus?.data.status ===
              "pending"
                ? "Results are pending"
                : activeWalletData[0]?.addressVerificationStatus?.data.status}
            </span>
          </h5>
        </div>
      );
    } else if (!isKYCDataLoading) {
      return (
        <Link to={"/"}>
          <h4
            className="text-center fw-bold text-Black start-50 translate-middle"
            style={{ position: "absolute", bottom: "0" }}
          >
            Connect a wallet to verify it's status (Click here)
          </h4>
        </Link>
      );
    }
  };

  console.log("userKycData", userKycData);
  console.log("userKycVerificationStatus", userKycVerificationStatus);

  if (
    userKycVerificationStatus !== null &&
    userKycVerificationStatus.status === "pending"
  ) {
    return (
      <div style={{ minHeight: "60vh" }}>
        <div className="text ">
          <h1 className="position-absolute top-50 start-50 translate-middle">
            Verification Pending
          </h1>
        </div>
        {WalletData()}
      </div>
    );
  }
  // else if (userKycVerificationStatus === null) {
  //   return (
  //     <>
  //       <div style={{ minHeight: "60vh" }}>
  //         <h1 className="display-2 ml-5 text-center fw-bold text-Black position-absolute top-50 start-50 translate-middle">
  //           Start <br />
  //           KYC <span className="text-gradient">Verification....</span>
  //           <br />
  //           <button className="btn btn-primary" onClick={() => verify()}>
  //             {loading ? "Loading..." : " KYC verification"}
  //           </button>
  //         </h1>
  //       </div>

  //       {WalletData()}
  //     </>
  //   );
  // }

  return (
    <div style={{ minHeight: "90vh" }}>
      <div className="text ">
        {isKYCDataLoading ? (
          <h1 className="position-absolute top-50 start-50 translate-middle">
            Loading...
          </h1>
        ) : userKycData?.status === "completed" ? (
          userKycData.verified ? (
            <>
              <h1 className="text-green position-absolute top-50 start-50 translate-middle">
                Verification Passed
              </h1>
            </>
          ) : (
            <>
              <h1
                className="position-absolute start-50 translate-middle"
                style={{ top: "35%" }}
              >
                Verification Failed
                <h4 className="mt-1 text-center mb-5">
                  Attempts Left:{" "}
                  {userKycData.verification_attempts_left === null
                    ? "Unlimited"
                    : userKycData.verification_attempts_left}
                </h4>
                <h4 className="ml-5 text-center fw-bold text-Black">
                  Attempt Verification Again
                  <br />
                </h4>
                <button
                  className="mt-5 position-absolute start-50 translate-middle btn btn-primary"
                  onClick={() => verify()}
                >
                  {loading ? "Loading..." : " KYC verification"}
                </button>
              </h1>
            </>
          )
        ) : userKycData?.status === "unused" ||
          userKycData?.status === "new" ||
          userKycData === null ||
          userKycVerificationStatus === null ? (
          <>
            <h1 className="display-2 ml-5 text-center fw-bold text-Black position-absolute top-50 start-50 translate-middle">
              Start <br />
              KYC <span className="text-gradient">Verification....</span>
              <br />
              <button className="btn btn-primary" onClick={() => verify()}>
                {loading ? "Loading..." : " KYC verification"}
              </button>
            </h1>
            {/* <div className="mb-5">{activeWallet.address}</div> */}
          </>
        ) : (
          ""
        )}
        {/* ----- REMOVED A CONDITION FORM HERE FOR TESTING, CONTENT CAN BE SEEN BELOW */}
      </div>
      {WalletData()}
      {/* <div className="mt-5">
        <button onClick={verifyAddress} disabled={loading}>
          {loading ? "Verifying..." : "Verify Address"}
        </button>
      </div> */}

      <Models show={modalShow} onHide={() => setModalShow(false)} />

      {/* <div className="mb-5">{activeWallet.address}</div> */}
    </div>
  );
};

export default Kyc;

const Models = (props) => {
  const params = useParams();
  const [checkTerm, setcheckTerm] = useState(false);
  const [updating, setUpdating] = useState(false);
  const user = useSelector((state) => state.auth);
  const { list } = useSelector((state) => state.users);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!checkTerm) {
          const response = await axios.get(`${url}/TermsofCondition`);
          setcheckTerm(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [checkTerm]);

  const handleSubmit = () => {
    // e.preventDefault();
    try {
      // setUpdating(true);
      axios.put(
        `${url}/users/isaccept/${user._id}`,
        {
          // ...users,
          isAccept: true,
        },
        setHeaders()
      );

      // setUsers({ ...res.data});
      toast.success("Profile updated...", {
        position: "bottom-left",
      });

      setUpdating(true);
    } catch (err) {
      console.log(err);
      setUpdating(false);
      toast.error(err.response.data, {
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      {updating === false ? (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {checkTerm &&
            checkTerm?.map((item) => (
              <>
                <Modal.Header
                  key={item._id}
                  style={{ backgroundColor: "white" }}
                >
                  <Modal.Title id="contained-modal-title-vcenter">
                    <h4>Terms of Services</h4>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body
                  className="overflow-scroll"
                  style={{
                    height: "50vh",
                    width: "412px",
                    backgroundColor: "black",
                  }}
                >
                  <a className="text-white">
                    {new Date(item.createdAt).toDateString()}
                  </a>
                  <br />
                  <div>
                    <p>{item.heading}</p>
                    <br />
                    <p>{item.desc}</p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <a>
                    I agree to the Terms of Services and I read the Privacy
                    Notice
                  </a>
                </Modal.Footer>
                <Modal.Footer>
                  {/* <form onSubmit={handleSubmit}> */}
                  <Button onClick={() => handleSubmit()}>Accept</Button>
                  <Button onClick={props.onHide}>Reject</Button>
                  {/* </form> */}
                </Modal.Footer>
              </>
            ))}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

// const Section = styled.section`
//       margin-left: 18vw;
//       padding: 2rem;
//       height: 100%;
//       .grid {
//         display: flex;
//       flex-direction: column;
//       height: 100%;
//       gap: 1rem;
//       margin-top: 2rem;
//       .row__one {
//         display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       height: 50%;
//       gap: 1rem;
//     }
//       .row__two {
//         display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 1rem;
//       height: 50%;
//     }
//   }
//       @media screen and (min-width: 280px) and (max-width: 1080px) {
//         margin - left: 0;
//       .grid {
//       .row__one,
//       .row__two {
//         grid - template - columns: 1fr;
//       }
//     }
//   }
//       `;

// const ImagePreview = styled.div`
//   margin: 2rem 0 2rem 0rem;
//   padding: 2rem;
//   height: 150px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.1rem;
//   color: rgb(78, 78, 78);

//   img {
//     max-width: 100%;
//     max-height: 100%;
//   }
// `;

// ---------------- THIS CONDITION WAS USED ABOVE, REMOVED FOR TESTING
// ) : (
//   <>
//     <section>
//       <form
//       // onSubmit={handleSubmit}
//       >
//         <div className="row">
//           <div className="col-xl-9 col-lg-8">
//             <div className="card">
//               <div className="card-header">
//                 <h4 className="card-title">
//                   Verfication{" "}
//                   <span className="text-gradient">ID</span>
//                 </h4>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-lg-6 mb-2">
//                     <div className="form-group mb-3">
//                       <label className="text-label">
//                         Government ID
//                       </label>
//                       <input
//                         id="imgUpload"
//                         accept="image/*"
//                         type="file"
//                         onChange={handleProductImageUpload}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6 mb-2">
//                     <div className="form-group mb-3">
//                       <h5
//                         className="text-label"
//                         style={{ fontSize: "15px" }}
//                       >
//                         First Name:
//                         <span
//                           style={{ fontSize: "15px", color: "black" }}
//                         >
//                           {" "}
//                           {users.first_name}
//                         </span>
//                       </h5>
//                       <h5
//                         className="text-label"
//                         style={{ fontSize: "15px" }}
//                       >
//                         Last Name:
//                         <span
//                           style={{ fontSize: "15px", color: "black" }}
//                         >
//                           {" "}
//                           {users.last_name}
//                         </span>
//                       </h5>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 mb-2">
//                     <div className="form-group mb-3">
//                       <h5
//                         className="text-label"
//                         style={{ fontSize: "15px" }}
//                       >
//                         Email:
//                         <span
//                           className="card-title"
//                           style={{ fontSize: "15px", color: "black" }}
//                         >
//                           {" "}
//                           {users.email}
//                         </span>
//                       </h5>
//                       <h5
//                         className="text-label"
//                         style={{ fontSize: "15px" }}
//                       >
//                         Date of Birth:
//                         <span
//                           style={{ fontSize: "15px", color: "black" }}
//                         >
//                           {" "}
//                           {users.dateofBirth?.substring(0, 10)}
//                         </span>
//                       </h5>
//                       <h5
//                         className="text-label"
//                         style={{ fontSize: "15px" }}
//                       >
//                         Residence Country:
//                         <span
//                           style={{ fontSize: "15px", color: "black" }}
//                         >
//                           {" "}
//                           {users.residence_country}
//                         </span>
//                       </h5>
//                       <h5
//                         className="text-label"
//                         style={{ fontSize: "15px" }}
//                       >
//                         Nationality:
//                         <span
//                           style={{ fontSize: "15px", color: "black" }}
//                         >
//                           {" "}
//                           {users.nationality}
//                         </span>
//                       </h5>
//                       <h5
//                         className="text-label"
//                         style={{ fontSize: "15px" }}
//                       >
//                         Phone Number:
//                         <span
//                           style={{ fontSize: "15px", color: "black" }}
//                         >
//                           {" "}
//                           {users.phone}
//                         </span>
//                       </h5>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 mb-2">
//                     <div className="form-group mb-3">
//                       <h5
//                         className="text-label"
//                         style={{ fontSize: "15px" }}
//                       >
//                         Verification ID:
//                         <span
//                           style={{ fontSize: "15px", color: "black" }}
//                         >
//                           {" "}
//                           {users.verification_id}
//                         </span>
//                       </h5>
//                       <h5
//                         className="text-label"
//                         style={{ fontSize: "15px" }}
//                       >
//                         Application ID:
//                         <span
//                           style={{ fontSize: "15px", color: "black" }}
//                         >
//                           {" "}
//                           {users.applicant_id}
//                         </span>
//                       </h5>
//                       <Link href="https://kyc-forms.amlbot.com/c580560f0ff6184f1a28b0480f87f783f79e">
//                         Verify
//                       </Link>
//                       <br />
//                       <Link
//                         className="btn btn-primary"
//                         onClick={() => verifyID()}
//                       >
//                         {loading ? "Loading..." : "verfied"}
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-lg-4">
//             <div className="card">
//               <div className="card-header">
//                 <a
//                   className="card-title"
//                   style={{ fontSize: "20px" }}
//                 >
//                   Government ID
//                 </a>
//               </div>
//               <ImagePreview>
//                 {productImg ? (
//                   <>
//                     <img src={productImg} alt="error!" />
//                   </>
//                 ) : (
//                   <h4
//                     style={{
//                       marginLeft: "30px",
//                       marginRight: "20px",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Image upload preview will appear here!
//                   </h4>
//                 )}
//               </ImagePreview>
//             </div>
//           </div>
//         </div>

//         {/* <div className="col-6 col-sm-4 mb-2">
//         <div className="form-group">
//           <input className="form-control" type="string" value={} />
//         </div> */}
//         <div className="row">
//           <div className="text-end toolbar toolbar-bottom p-2">
//             {/* <button type="submit" className="btn btn-primary sw-btn-next" >
//                 {createStatus === "pending" ? "Submitting"
//                   :
//                   <>
//                     {createStatus === "success" ? "Submitted" : "Submit"}
//                   </>
//                 }

//               </button> */}
//           </div>
//         </div>
//       </form>
//     </section>
//     Next <br />
//     Verfiy <span className="text-gradient">ID</span>
//     {/* <p className="heading mb-0">Verification ID: {Verification}</p>

//     <p className="heading mb-0">Status: {check}</p> */}
//     {/* <Button className="transition ease-in-out delay-150 -translate-y-px-hover duration-300 scale-110-hover"
//         onClick={() => navigate("verification")}>
//         Verfiy
//       </Button> */}
//   </>
// )}
