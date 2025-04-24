import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosHandler } from "../../utils/axiosHandler";

const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
  const [data, setData] = useState([]);


  const getContactData = async () => {

    try {
      const res = await axiosHandler.get("/contact/lead-get");
      setData(res.data);
    } catch (err) {

      console.error(err);
    } 
    }
  



  useEffect(() => {
     
    getContactData()
  }, []);

  return (
    <ContactContext.Provider value={{data}}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;

export const useContactContext = () => useContext(ContactContext);
