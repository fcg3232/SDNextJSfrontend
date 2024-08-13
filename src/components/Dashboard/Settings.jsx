import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchCandidateId } from "../../slices/KycContext";
// import KycForm from '../kyc/kycForm';
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { verifyCandidate } from "../../slices/verificationSlice";
import { Section } from "../common/Styles";

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const { formResponse } = useSelector((state) => state.form);
  const { verificationResponse } = useSelector((state) => state.verify);
  console.log(verificationResponse, "verification");

  // const [verificationResponse, setVerificationResponse] = useState({})

  // const verifiedCandidate = async () => {
  //   try {
  //     // f4d573870d962846060924b6cb975b441e69
  //     // b12a4778078bf74eb339c0e15cc537e308e8
  //     const res = await axios.get('https://kyc-api.amlbot.com/verifications/candidateId', {
  //       headers: {
  //         'Accept': 'application/json',
  //         'form-token': 'e0368ffe0b0cd7468e3b6e515653702a0bc4',
  //       }
  //     });
  //     setVerificationResponse(res.data)
  //     console.log(res.data, 'response');
  //   } catch (error) {
  //     console.error('Error fetching candidate verification:', error);
  //   }
  // };

  useEffect(() => {
    // verifiedCandidate();
    const data = dispatch(verifyCandidate());
    // dispatch(fetchCandidateId());
  }, []);
  const handleVerification = async () => {
    dispatch(fetchCandidateId());
  };
  console.log({ user });
  return (
    <Section>
      <div className="custom-setting">
        {!user?.kycVerified && (
          <button
            onClick={handleVerification}
            className="bg-[#7E87BF] border-none p-3"
            style={{
              border: "none",
            }}
            target="blank"
          >
            VERIFY YOURSELF
          </button>
        )}

        <div>
          <p>
            KYC Verified:{" "}
            {user?.kycVerified ? (
              <FaCheck color="green" size={20} />
            ) : (
              <FaTimes color="red" size={20} />
            )}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Settings;
