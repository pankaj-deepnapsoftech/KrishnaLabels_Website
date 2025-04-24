import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosHandler } from "../../utils/axiosHandler";

const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
  const [data, setData] = useState([]);


  const getContactData = async () => {
    setLoading(true);
    try {
      const res = await axiosHandler.get("/contact/lead-get");
      setData(res.data);
    } catch (err) {
      setError("Failed to fetch contact data");
      console.error(err);
    } 
    }
  };



  useEffect(() => {
      const getContactData = async () => {
();
  }, []);

  return (
    <ContactContext.Provider value={{ data}}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;

export const useContactContext = () => useContext(ContactContext);
