import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const KycForm = () => {

  const dispatch = useDispatch();
  const { formResponse } = useSelector((state) => state.form);

  return (
    <div className="p-4">
   
      <Link to={formResponse?.form_url} className='custom-kyc-link' target='blank'>
        VERIFY ME
      </Link>
    </div>
  );
};

export default KycForm;