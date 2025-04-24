import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosHandler } from "../../utils/axiosHandler";

const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
<<<<<<< HEAD
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);       

  const getContactData = async () => {
    setLoading(true);  
    try {
      const res = await axiosHandler.get("/contact/lead-get");
      setData(res.data);
    } catch (err) {
      setError("Failed to fetch contact data");
      console.error(err);
    } finally {
      setLoading(false); 
=======
    const [data, setdate] = useState([])
    const getContactdata = async () => {
        try {
            const res = await axiosHandler.get("/contact/get-contact")
           setdate(res.data);
        } catch (error) {
            console.log(error);
        }
>>>>>>> 516ae42a453d09ecf2e34922fee55bd22a8b0957
    }
  };

  const ContactUs = async (formData) => {
    try {
      const res = await axiosHandler.post("/contact/create-lead", formData);
      console.log("Contact created: ", res.data);
    } catch (err) {
      console.error("Error creating contact: ", err);
    }
  };


  useEffect(() => {
    getContactData();
  }, []);

  return (
    <ContactContext.Provider value={{ data, loading, error, ContactUs }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;

export const useContactContext = () => useContext(ContactContext);
