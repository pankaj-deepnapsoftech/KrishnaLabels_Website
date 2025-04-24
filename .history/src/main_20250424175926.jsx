import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext/authContext";
// import ContactContextProvider from "./context/contactContext/contactContext";
import LeadProvider from "./context/LeadContext/LeadContext.jsx";
import ContactContextProvider from "./context/ContactContext/ContactContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ContactContextProvider>
        <LeadProvider>
          <App />
        </LeadProvider>
      </ContactContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
