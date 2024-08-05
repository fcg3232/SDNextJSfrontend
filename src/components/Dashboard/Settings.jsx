// // import React from "react";
// // import KycForm from "../kyc/kycForm";

// // const Settings = ({ formResponse }) => {
// //   // console.log(formResponse,"fromresa")
  
// //   return (
// //     <div>
// //       <div className="custom-setting">
// //         <h1>Settings</h1>
// //         <div>
// //           <KycForm />

// //            <p>Candidate id: </p>
// //         <p>Candidate Name: </p>
// //         <p>KYC Verified: </p> 
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Settings;


import React, {useState} from 'react';
import { useFormContext } from '../../slices/KycContext';
import KycForm from '../kyc/kycForm';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Settings = () => {
  const { state } = useFormContext();
  const { formResponse } = state;


  return (
    <div className='custom-setting'>
      <h1>Settings</h1>
      <KycForm/>
      {formResponse ? (
        <div>
          <p>Form URL: {formResponse.form_url}</p>
          <p>Candidate id: {formResponse.form_id}</p>
          <p>KYC Verified: {formResponse.kyc_verified ? (
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

