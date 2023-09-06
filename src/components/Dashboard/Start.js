import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { url, setHeaders } from "../../slices/api";
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";
import scrollreveal from "scrollreveal";

const Start = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [clientID, setclientID] = useState();
  const [datas, setdatas] = useState({});
  const [done, setdone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const auth = useSelector((state) => state.auth);
  // const id = useRef(0);
  const user = useSelector((state) => state.auth);
  const [checkTerm, setcheckTerm] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/users/find/${user._id}`, setHeaders());
         setcheckTerm(response.data.isAccept)
        if (checkTerm === false) {
          setModalShow(true)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct()
  }, [checkTerm]);

  // setModalShow(false)
  useEffect(() => {
    if (checkTerm === true) {
      setModalShow(false)
    }
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${url}/berbix/find/${user._id}`, setHeaders());
        console.log("Berbix Data", res)
        !clientID && setclientID(res.data[0].client_token);
        // !clientID && 
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
    if (clientID) {
      navigate("verification");
    }
  }, [params.id, clientID, datas]);

  console.log("Param ID", params.id)
  console.log("user ID", user._id)
  // useEffect(() => {
  //   if (clientID) {
  //     navigate("verification");
  // }
  // }, [clientID])
  console.log("clientID", clientID)
  console.log("datas", datas)

  // onClick={() => navigate(`/product/${params.row.id}`)}
  const verify = () => {
    setLoading(true);
    axios.post(`${url}/berbix/create-transaction`, {
      userId: user._id,
      email: user.email,
      phone: user.phone,
    })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
        setLoading(false);
        setdone(true)
      })
      .catch((err) => console.log(err.message));

  };
  console.log("Is Accept:", checkTerm)
  return (
    <div>
      {
        <div className=" mt-5 text ">
          <h1 className="display-2 ml-5 text-center fw-bold text-Black">
            Start <br />
            ID  <span className="text-gradient">Verification....</span>
            <br />
            {done != true ? (
              <>
                <Link className="btn btn-primary" onClick={() => verify()}>
                  {loading ? "Loading..." : "Satrt"}
                </Link>
              </>
            ) : (
              <Button onClick={() => navigate("verification")}>Next</Button>
            )}
          </h1>

        </div>
      }
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setModalShow(true)}
      >
        Open regular modal
      </button> */}
      {/* <div className="w-100  p-3 text-center">
        {modalShow === true ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Modal Title
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setModalShow(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setModalShow(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setModalShow(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Terms of Service
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                  </div>
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                    <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div> */}
      {/* {checkTerm === false ? ( */}
      <Models show={modalShow}
        onHide={() => setModalShow(false)} />

      <div className='mb-5'></div>
    </div>

  )
}

export default Start

const Models = (props) => {
  const params = useParams();
  const [checkTerm, setcheckTerm] = useState(false);
  const [updating, setUpdating] = useState(false);
  const user = useSelector((state) => state.auth);
  const { list } = useSelector((state) => state.users);

  console.log("checkTerm", checkTerm)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/TermsofCondition`);
        setcheckTerm(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct()
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
      {updating === false ?
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {
            checkTerm &&
            checkTerm?.map((item) => (
              <>
                <Modal.Header key={item._id} style={{backgroundColor:'white'}}>
                  <Modal.Title id="contained-modal-title-vcenter">
                  <h4>Terms of Services</h4>  
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='overflow-scroll' style={{height:"50vh", width:"412px",backgroundColor:"black"}}>
                  <a className='text-white'>{new Date(item.createdAt).toDateString()}</a>
                  <br/>
                  <div>
                  <p>{item.heading}</p>
                  <br/>
                  <p>{item.desc}</p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <a>I agree to the Terms of Services and I read the Privacy Notice</a>
                </Modal.Footer>
                <Modal.Footer>
                  {/* <form onSubmit={handleSubmit}> */}
                  <Button onClick={() => handleSubmit()}>Accept</Button>
                  <Button onClick={props.onHide}>Reject</Button>
                  {/* </form> */}
                </Modal.Footer>
              </>
            ))

          }
        </Modal>
        : ""}
    </>

  )
}

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
