import axios from "axios";
import { createContext } from "react";
import { axiosHandler } from "../../utils/axiosHandler";


const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
    const [data, setData] = useState([])

    const getLeadData = async () => {
        const res = await axiosHandler.get('/lead/get-leads');
        setData(res.data);
        console.log(res.data)

    }

    useEffect(() => {
        getLeadData()

    }, [])


    return (
        <LeadContext.Provider>
            {children}
        </LeadContext.Provider>
    )
}