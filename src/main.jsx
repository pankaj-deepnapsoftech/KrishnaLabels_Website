import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext/authContext";
import ContactContextProvider from "./context/contactContext/contactContext";
import LeadProvider from "./context/LeadContext/leadContext";
import ProductProvider from "./context/productContext/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>                                                                   
    <BrowserRouter>
      <AuthContextProvider>
        <ContactContextProvider>
          <LeadProvider>
            <ProductProvider>
            <App />
            </ProductProvider>
          </LeadProvider>
        </ContactContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode> 
);
