import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext/authContext";
import ContactContextProvider from "./context/contactContext/contactContext";
import LeadProvider from "./context/leadContext/leadContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <ContactContextProvider>
        <LeadProvider>
          <App />
        </LeadProvider>
      </ContactContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
