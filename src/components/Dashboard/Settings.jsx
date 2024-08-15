import React, { useEffect } from "react";
import { fetchCandidateId } from "../../slices/KycContext";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { verifyCandidate } from "../../slices/verificationSlice";
import { Section } from "../common/Styles";

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const navigation = useNavigate();
  const { verificationResponse } = useSelector((state) => state.verify);
  console.log(verificationResponse, "verification");
  useEffect(() => {
    if (user?.kycVerified) {
      navigation("/account");
    }
  }, [user?.kycVerified]);

  useEffect(() => {
    dispatch(verifyCandidate());
  }, [user.kycVerificationId]);
  const handleVerification = async () => {
    dispatch(fetchCandidateId());
  };

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
