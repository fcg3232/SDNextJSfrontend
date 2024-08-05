import React from 'react'
import { useFormContext } from '../../slices/KycContext';
import {Link} from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";

const Aml = () => {
  const { state} = useFormContext();
  const { formResponse } = state;
console.log("response", formResponse)

const handleGoToSettings = () => {
  // Open the settings page in a new tab
  // window.open('/account/settings', '_blank');

  // Close the current window
  window.close();
};

  return (
    <div>
      {formResponse && formResponse.form_url && (
        <div>
          {/* <button onClick={handleGoToSettings} className="settings-link">
            <GoArrowLeft className="left-arrow" />
            Go Back
          </button> */}
          <iframe
            src='https://kyc-forms.amlbot.com/8d90ac4c0cfa984f810a0c036501cc9fc40e'
            width="100%"
            height="600px"
            title="KYC Form"
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default Aml
