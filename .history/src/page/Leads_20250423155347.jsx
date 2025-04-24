import React from "react";
import { useContactContext } from "../context/ContactContext/ContactContext";

const Leads = () => {
  const { data } = useContactContext();
  const api = data?.data || [];

  return (
    <div className="w-full md:w-full h-full bg-gray-200 rounded shadow-xl p-4 max-[800px]:pt-15">
     
    </div>
  );
};

export default Leads;
