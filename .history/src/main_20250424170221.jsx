import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext/authContext";
import ContactContextProvider from "./context/ContactContext/ContactContext";
import LeadProvider from "./context/LeadContext.jsx/LeadContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <ContactContextProvider>
        <Lead>
          <App />
        </LeadContext>
      </ContactContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
