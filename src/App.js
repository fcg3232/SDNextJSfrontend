import React, {useReducer} from 'react';
import Route from './routes/route';
import './index.css';
import "./assets/css/style.css";
import "./pages/style"
import ChatwootWidget from './components/ChatwootWidget';
import { Fragment } from 'react'
import { AppRoutes } from './routes/protectedRoute';
import KycForm from './components/kyc/kycForm';
import Settings from './components/Dashboard/Settings';
import { FormContext, formReducer, initialState } from '../src/slices/KycContext'

function App() {
  const isUserLoggedIn = localStorage.getItem('token')
  console.log("isUserLoggedIn", isUserLoggedIn)

  return (
    <div className="App">
      
      <Fragment>
        <ChatwootWidget />
        <AppRoutes />
      </Fragment>

    
    </div>
  );
}

export default App;

