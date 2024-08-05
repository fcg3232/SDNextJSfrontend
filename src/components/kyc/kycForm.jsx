
// // import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import axios from 'axios';



// // const KycForm = () => {
// //   const [formResponse, setFormResponse] = useState(null);
// //   const dispatch = useDispatch()
// // // console.log('Form Response', formResponse)
// //   const fetchFormUrl = async () => {
// //     try {
// //       const response = await axios.post(
// //         'https://kyc-api.amlbot.com/forms/8b32344e08c0454c312878540ce69ba5892c/urls',
// //         {
// //           external_applicant_id: 'e0368ffe0b0cd7468e3b6e515653702a0bc4'
// //         },
// //         {
// //           headers: {
// //             'Authorization': 'Token e31169640d9147493929ab77c9128470b16d',
// //             'Content-Type': 'application/json'
// //           }
// //         }
// //       );
// //       console.log('Response', response);
// //       setFormResponse(response.data);
// //     } catch (error) {
// //       console.log('Error fetching from the URL:', error);
// //     }
// //   };

// //   return (
// //     <div className="p-4">
      
// //       <button
// //         onClick={fetchFormUrl}
// //         className="custom-kyc-button"
// //        >
// //         FORM
// //       </button>
     
// //       {formResponse ? (
// //         <iframe src={formResponse.form_url} width='100%' height='600px' title='KYC Form'></iframe>
// //       ) : (
// //         <p></p>
// //       )}
// //     </div>
// //   );
// // };

// // export default KycForm;


import React from 'react';
import { useFormContext } from '../../slices/KycContext';
import { Link } from 'react-router-dom';

const KycForm = () => {
  const { state, setFetchTrigger } = useFormContext();
  const { formResponse } = state;


  return (
    <div className="p-4">
      {/* <button onClick={onhandle} className="custom-kyc-button">
         FORM
      </button> */}

      <Link to={formResponse.form_url} className='custom-kyc-link' target='blank'>
        VERIFY ME
      </Link>
      {/* {formResponse && (
        <div>
          <iframe src={formResponse.form_url} width="100%" height="600px" title="KYC Form"></iframe>
        </div>
      )} */}
    </div>
  );
};

export default KycForm;


// import React from 'react';
// import { useFormContext } from '../../slices/KycContext';

// const KycForm = () => {
//   const { state } = useFormContext();
//   const { formResponse, fetchFormResponse } = state;

//   return (
//     <div className="p-4">
//       <button onClick={fetchFormResponse} className="custom-kyc-button">
//          FORM
//        </button>
//       {formResponse && (
//         <div>
//           <iframe src={formResponse.form_url} width="100%" height="600px" title="KYC Form"></iframe>
//         </div>
//       )}
//     </div>
//   );
// };

// export default KycForm;
