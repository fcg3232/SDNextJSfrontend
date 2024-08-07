import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchCandidateId } from '../../slices/KycContext'
// import KycForm from '../kyc/kycForm';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { verifyCandidate } from '../../slices/verificationSlice'

const Settings = () => {

  const dispatch = useDispatch();
  const { formResponse } = useSelector((state) => state.form);
  const { verificationResponse } = useSelector((state) => state.verify);
  console.log(verificationResponse, 'verification');
  
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
    const data = dispatch(verifyCandidate())
     dispatch(fetchCandidateId())
  }, []);



  return (
    <div className='custom-setting'>
       <Link to={formResponse?.form_url} className='custom-kyc-link' target='blank'>
        VERIFY YOURSELF
      </Link>
      {formResponse ? (
        <div>
         <p>Candidate id: {formResponse.form_token}</p>
          <p>KYC Verified: {verificationResponse?.verified ? (
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

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { FaCheck, FaTimes } from 'react-icons/fa';
// import { MdSpaceDashboard } from 'react-icons/md';
// import KycForm from '../kyc/kycForm';
// import { fetchCandidateId } from '../../slices/KycContext';
// import { verifyCandidate } from '../../slices/verificationSlice';

// const Settings = () => {
//   const dispatch = useDispatch();
//   const { formResponse } = useSelector((state) => state.form);
//   const { verificationResponse, status, error } = useSelector((state) => state.verify);
//   const [currentLink, setCurrentLink] = useState(1);

//   useEffect(() => {
//     dispatch(verifyCandidate());
//     dispatch(fetchCandidateId());
//   }, [dispatch]);

//   const isVerified = status === 'succeeded' && verificationResponse && verificationResponse.verified;

//   return (
//     <div className='custom-setting'>
//       <h1>Settings</h1>
//       <KycForm />
//       {formResponse ? (
//         <div>
//           <p>Candidate ID: {formResponse.form_token}</p>
//           <p>
//             KYC Verified: {status === 'loading' ? (
//               <span>Loading...</span>
//             ) : verificationResponse && verificationResponse.verified ? (
//               <FaCheck color="green" size={20} />
//             ) : (
//               <FaTimes color="red" size={20} />
//             )}
//           </p>
//         </div>
//       ) : (
//         <p>No form data available</p>
//       )}
      

      
//     </div>
//   );
// };

// export default Settings;
