import React from 'react';
import Route from './pages/route';
import './index.css';
import "./assets/css/style.css";
import "./pages/style"
import ChatwootWidget from './components/ChatwootWidget';
import { Fragment } from 'react'

function App() {

  return (
    <div className="App">
      <Fragment>
        <ChatwootWidget />
        <Route />
      </Fragment>
    </div>
  );
}

export default App;
