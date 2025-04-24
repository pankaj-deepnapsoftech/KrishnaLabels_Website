import axios from "axios";
import { createContext } from "react";
import { axiosHandler } from "../../utils/axiosHandler";


const LeadContext = createContext();

export  const LeadProvider = ({children})=>{
const [data, setData] = useState(second)

const getLeadData = async()=>{
    const res = await axiosHandler.get('/lead/create-leads');
    setData(res.data);
    console.log(res.data)

}



return (
    <LeadContext.Provider>
        {children}
    </LeadContext.Provider>
)
}