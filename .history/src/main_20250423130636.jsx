import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext/authContext.jsx";
import ContactContextProvider from "./context/ContactContext/ContactContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <ContactContextProvider>

      <App />
      </ContactContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
