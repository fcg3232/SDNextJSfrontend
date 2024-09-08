import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { url, setHeaders } from "../../slices/api";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
// import { usersFetchbyID } from "../../slices/UsersSlice";
import { useAppSelector, useAppDispatch } from '../../reducer/store';
// import scrollreveal from "scrollreveal";

const Kyc = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [clientID, setclientID] = useState();
  const [Verification, setVerification] = useState();
  const [check, setcheck] = useState("");
  const [appID, setappID] = useState({});
  const [done, setdone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);
  // const auth = useSelector((state) => state.auth);
  // const id = useRef(0);
  const user = useSelector((state) => state.auth);
  const [checkTerm, setcheckTerm] = useState(false);
  const [users, setusers] = useState([]);
  const [usersData, setusersData] = useState([]);
  const [productImg, setProductImg] = useState("");

  const headers = {
    "Content-Type": "application/json",
    'Authorization': "Token e31169640d9147493929ab77c9128470b16d"
  }

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await axios.get(`${url}/users/find/${user._id}`);
        // const res = dispatch(usersFetchbyID(user._id))
        setusers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchuser();
  }, [user._id]);


  useEffect(() => {
    if (users.length != 0) {
      const fetchuser = async () => {
        try {
          const res = await axios.get(
            `https://kyc-api.amlbot.com/applicants/${users.applicant_id}`,
            {
              headers: headers
            }
          );
          // const res = dispatch(usersFetchbyID(user._id))
          setusersData(res);
        } catch (err) {
          console.log(err);
        }
      };

      fetchuser();
    }
  }, [users.applicant_id]);

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

console.log("date of birth", ((users.dateofBirth)?.substring(0, 10)))
  const formId = "8b32344e08c0454c312878540ce69ba5892c";
  const verify = () => {
    setLoading(true);
    if (users != null) {
      axios
        .post(
          "https://kyc-api.amlbot.com/applicants"
          ,
          {
            type: "PERSON",
            first_name: users.first_name,
            middle_name: "",
            last_name: users.last_name,
            dob: ((users.dateofBirth)?.substring(0, 10)),
            residence_country: users.residence_country,
            nationality: users.nationality,
            email: users.email,
          },
          {
            headers: headers
          }
        )
        .then((response) => {
          axios.patch(
            `${url}/users/${user._id}`,
            {
              applicant_id: response.data?.applicant_id,
            },
            setHeaders()
          )
          if (response.data.applicant_id) {
            axios
              .post(
                // "https://kyc-api.amlbot.com/verifications"
                "https://kyc-api.amlbot.com/forms/8b32344e08c0454c312878540ce69ba5892c/urls"
                ,
                {
                  applicant_id: response.data?.applicant_id,
                  // type: "DOCUMENT",
                  // form_id: formId,
                },
                {
                  headers: headers
                }
              )
              .then((res) => {
                axios.patch(
                  `${url}/users/${user._id}`,
                  {
                    verification_id: res.data?.verification_id,
                  },
                  setHeaders()
                )
                // setVerification(res.data.verification_id);
                if (res.data.verification_id) {
                  axios
                    .get(
                      `https://kyc-api.amlbot.com/verifications/${res.data.verification_id}`,
                      // "https://kyc-api.amlbot.com/verifications/res.data.verification_id"
                      {
                        headers: headers
                      }
                    ).then((resGet) => { setcheck(resGet.data.status) })
                }
              })
          }
          setappID(response.data.applicant_id);
          if (response.data.url) {
            window.location.href = response.data.url;
          }
          setLoading(false);
          setdone(true);
        })
        .catch((err) => console.log(err.message));
    }
  };
  const verifyID = () => {
    setLoading(true);
    axios
      .post(
        "https://kyc-api.amlbot.com/verifications"
        ,
        {
          applicant_id: users.applicant_id,
          type: "DOCUMENT",
          form_id: formId,
        },
        {
          headers: headers
        }
      )
      .then((response) => {
        // axios.patch(
        //   `${url}/users/${user._id}`,
        //   {
        //     verification_id: response.data?.verification_id,
        //   },
        //   setHeaders()
        // );
        setVerification(response);
        if (response.data.url) {
          window.location.href = response.data.url;
        }
        setLoading(false);
        setdone(true);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${url}/users/find/${user._id}`,
          setHeaders()
        );
        setcheckTerm(response.data.isAccept);
        if (checkTerm === false) {
          setModalShow(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [checkTerm]);

  const kycVerify = () => {
    setLoading(true);
    const url = "https://kyc-api.amlbot.com/websdk/forms/8b32344e08c0454c312878540ce69ba5892c?key=a32b70f9003f9040e0086380cebe4c672465";
    window.location.href = url;
    setLoading(false);
    setdone(true);
  };


  return (
    <div>
      {
        <div className="text ">

          {done != true ? (
            <>
              <h1 className="display-2 ml-5 text-center fw-bold text-Black">
                Start <br />
                KYC <span className="text-gradient">Verification....</span>
                <br />
                {/* <Link className="btn btn-primary" onClick={() => kycVerify()}>
                  {loading ? "Loading..." : "Start verification"}
                </Link> */}
                {/* <a href="https://kyc-api.amlbot.com/websdk/forms/FORM_ID?key=8b32344e08c0454c312878540ce69ba5892c" target="_blank">KYC verification</a> */}
                <a className="btn btn-primary" href="https://kyc-api.amlbot.com/websdk/forms/8b32344e08c0454c312878540ce69ba5892c?key=a32b70f9003f9040e0086380cebe4c672465" 
                target="_blank"
                >
                  KYC verification
                </a>
              </h1>
            </>
          ) : (
            <>

              <section>
                <form
                // onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-xl-9 col-lg-8">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">Verfication <span className="text-gradient">ID</span></h4>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-6 mb-2">
                              <div className="form-group mb-3">
                                <label className="text-label">Government ID</label>
                                <input id="imgUpload" accept="image/*" type="file"
                                  onChange={handleProductImageUpload}
                                  required />
                              </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="form-group mb-3">
                                <h5 className="text-label" style={{ fontSize: "15px" }}>First Name:
                                  <span style={{ fontSize: "15px", color: "black" }}> {users.first_name}</span>
                                </h5>
                                <h5 className="text-label" style={{ fontSize: "15px" }}>Last Name:
                                  <span style={{ fontSize: "15px", color: "black" }}> {users.last_name}</span>
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="form-group mb-3">
                                <h5 className="text-label" style={{ fontSize: "15px" }}>Email:
                                  <span className="card-title" style={{ fontSize: "15px", color: "black" }}> {users.email}</span>
                                </h5>
                                <h5 className="text-label" style={{ fontSize: "15px" }}>Date of Birth:
                                  <span style={{ fontSize: "15px", color: "black" }}> {(users.dateofBirth)?.substring(0, 10)}</span>
                                </h5>
                                <h5 className="text-label" style={{ fontSize: "15px" }}>Residence Country:
                                  <span style={{ fontSize: "15px", color: "black" }}> {users.residence_country}</span>
                                </h5>
                                <h5 className="text-label" style={{ fontSize: "15px" }}>Nationality:
                                  <span style={{ fontSize: "15px", color: "black" }}> {users.nationality}</span>
                                </h5>
                                <h5 className="text-label" style={{ fontSize: "15px" }}>Phone Number:
                                  <span style={{ fontSize: "15px", color: "black" }}> {users.phone}</span>
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                              <div className="form-group mb-3">
                                <h5 className="text-label" style={{ fontSize: "15px" }}>Verification ID:
                                  <span style={{ fontSize: "15px", color: "black" }}> {users.verification_id}</span>
                                </h5>
                                <h5 className="text-label" style={{ fontSize: "15px" }}>Application ID:
                                  <span style={{ fontSize: "15px", color: "black" }}> {users.applicant_id}</span>
                                </h5>
                                <Link href="https://kyc-forms.amlbot.com/c580560f0ff6184f1a28b0480f87f783f79e">Verify</Link>
                                <br />
                                <Link className="btn btn-primary" onClick={() => verifyID()}>
                                  {loading ? "Loading..." : "verfied"}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                      <div className="card">
                        <div className="card-header">
                          <a className="card-title" style={{ fontSize: "20px" }}>Government ID</a>
                        </div>
                        <ImagePreview>
                          {productImg ? (
                            <>
                              <img src={productImg} alt="error!" />
                            </>
                          ) : (
                            <h4 style={{ marginLeft: "30px", marginRight: "20px", fontSize: "20px" }}>
                              Image upload preview will appear here!</h4>
                          )}
                        </ImagePreview>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-6 col-sm-4 mb-2">
									<div className="form-group">
										<input className="form-control" type="string" value={} />
									</div> */}
                  <div className="row">
                    <div className="text-end toolbar toolbar-bottom p-2">
                      {/* <button type="submit" className="btn btn-primary sw-btn-next" >
                          {createStatus === "pending" ? "Submitting"
                            :
                            <>
                              {createStatus === "success" ? "Submitted" : "Submit"}
                            </>
                          }

                        </button> */}
                    </div>
                  </div>
                </form>
              </section>

              Next <br />
              Verfiy <span className="text-gradient">ID</span>
              {/* <p className="heading mb-0">Verification ID: {Verification}</p>

              <p className="heading mb-0">Status: {check}</p> */}

              {/* <Button className="transition ease-in-out delay-150 -translate-y-px-hover duration-300 scale-110-hover"
                  onClick={() => navigate("verification")}>
                  Verfiy
                </Button> */}
            </>
          )}
        </div>
      }
      <Models show={modalShow} onHide={() => setModalShow(false)} />

      <div className="mb-5"></div>
    </div >
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
        const response = await axios.get(`${url}/TermsofCondition`);
        setcheckTerm(response.data);
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

const Section = styled.section`
      margin-left: 18vw;
      padding: 2rem;
      height: 100%;
      .grid {
        display: flex;
      flex-direction: column;
      height: 100%;
      gap: 1rem;
      margin-top: 2rem;
      .row__one {
        display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
      .row__two {
        display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
      @media screen and (min-width: 280px) and (max-width: 1080px) {
        margin - left: 0;
      .grid {
      .row__one,
      .row__two {
        grid - template - columns: 1fr;
      }
    }
  }
      `;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 0rem;
  padding: 2rem;
  height:150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
