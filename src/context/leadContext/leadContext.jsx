import React, {
    createContext,
    useEffect,
    useState,
    useContext, 
  } from "react";
  import { axiosHandler } from "../../utils/axiosHandler";
  
  export const LeadContext = createContext();
  
  const LeadProvider = ({ children }) => {
    const [leadData, setLeadData] = useState([]);
  
    const getLeadData = async () => {
      try {
        const res = await axiosHandler.get("/lead/get-leads");
        setLeadData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const createLead = async (leadPayload) => {
      try {
        const res = await axiosHandler.post("/lead/create-leads", leadPayload);
        getLeadData(); 
        return res.data;
      } catch (error) {
        console.error("Failed to create lead:", error);
        throw error;
      }
    };
  
    useEffect(() => {
      getLeadData();
    }, []);
  
    return (
      <LeadContext.Provider value={{ leadData, createLead }}>
        {children}
      </LeadContext.Provider>
    );
  };
  
  export default LeadProvider;
  
 
  export const useLeadContext = () => useContext(LeadContext);
  