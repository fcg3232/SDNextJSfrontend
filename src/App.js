import React from "react";
import "./index.css";
import "./assets/css/style.css";
import "./pages/style";
import ChatwootWidget from "./components/ChatwootWidget";
import { Fragment } from "react";
import { AppRoutes } from "./routes/protectedRoute";

function App() {
  const isUserLoggedIn = localStorage.getItem("token");
  console.log("isUserLoggedIn", isUserLoggedIn);

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
