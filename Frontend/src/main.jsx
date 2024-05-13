import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Components/AuthContext/AuthContext.jsx";
import { SocketProvider } from "./Components/VideoCall/SocketProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </SocketProvider>
);
