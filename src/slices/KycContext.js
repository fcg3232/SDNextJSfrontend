// // FormContext.js
import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios';


const initialState = {
  formResponse: null,
  error: null,
};


const FETCH_FORM_RESPONSE_SUCCESS = 'FETCH_FORM_RESPONSE_SUCCESS';
const FETCH_FORM_RESPONSE_FAILURE = 'FETCH_FORM_RESPONSE_FAILURE';


const formReducer = (state, action) => {
  switch (action.type) {
    case FETCH_FORM_RESPONSE_SUCCESS:
      return {
        ...state,
        formResponse: action.payload,
        error: null,
      };
    case FETCH_FORM_RESPONSE_FAILURE:
      return {
        ...state,
        formResponse: null,
        error: action.error,
      };
    default:
      return state;
  }
};


const FormContext = createContext();


export const useFormContext = () => {
  return useContext(FormContext);
};


export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [fetchTrigger, setFetchTrigger] = useState(false);
  
  const fetchFormResponse = async () => {
    try {
      const response = await axios.post(
        'https://kyc-api.amlbot.com/forms/8b32344e08c0454c312878540ce69ba5892c/urls',
        {
          external_applicant_id: 'e0368ffe0b0cd7468e3b6e515653702a0bc4',
        },
        {
          headers: {
            Authorization: 'Token e31169640d9147493929ab77c9128470b16d',
            'Content-Type': 'application/json',
          }
        }
      );
      console.log(response,"response")
      dispatch({ type: FETCH_FORM_RESPONSE_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching form URL:', error);
      dispatch({ type: FETCH_FORM_RESPONSE_FAILURE, error });
    }
  };

  useEffect(() => {
    
      fetchFormResponse();
     }, []);

  return (
    <FormContext.Provider value={{ state, setFetchTrigger }}>
      {children}
    </FormContext.Provider>
  );
};

