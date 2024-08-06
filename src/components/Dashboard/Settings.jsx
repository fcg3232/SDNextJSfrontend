import React, {useState, useEffect} from 'react';
import { fetchCandidateId } from '../../slices/KycContext'
import KycForm from '../kyc/kycForm';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Settings = () => {
  
  const dispatch = useDispatch();
  const { formResponse, error } = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(fetchCandidateId());
  }, [dispatch]);


  return (
    <div className='custom-setting'>
      <h1>Settings</h1>
      <KycForm/>
      {formResponse ? (
        <div>
          <p>Form URL: {formResponse?.form_url}</p>
          <p>Candidate id: {formResponse?.form_token}</p>
          <p>KYC Verified: {formResponse?.kyc_verified ? (
              <FaCheck color="green" size={20} />
            ) : (
              <FaTimes color="red" size={20} />
            )}</p>
        </div>
      ) : (
        <p>No form data available</p>
      )}
    </div>
  );
};

export default Settings;

