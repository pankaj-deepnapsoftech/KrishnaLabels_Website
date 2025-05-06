import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosHandler } from "../../utils/axiosHandler";
import { useAuthContext } from "../authContext/authContext"

const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const { user } = useAuthContext();


  const getContactData = async () => {

    try {
      const res = await axiosHandler.get("/contact/get-contact");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      getContactData()
    }
  }, [user]);

  return (
    <ContactContext.Provider value={{ data }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useContactContext = () => useContext(ContactContext);
