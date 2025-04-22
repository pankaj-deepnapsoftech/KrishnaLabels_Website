import {
  RiDashboardLine,
  RiAppsLine,
  RiContactsFill,
  RiDashboardHorizontalFill,
  RiMenu2Line
} from "react-icons/ri";
import { IoCreate } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTableList } from "react-icons/fa6";


const Header = () => {
  const [checkMenu, setCheckMenu] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="absolute top-5  left-4 z-50 md:hidden">
        <div onClick={() => setCheckMenu(!checkMenu)} >
          {checkMenu ? <IoCloseSharp size={30} className=" transition-all duration-500 opacity-100  text-white absolute left-[12rem] " /> : <RiMenu2Line size={30} />}
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`     fixed top-0 left-0 h-full bg-blue-600 text-white p-6 z-40
    transition-all duration-300
    w-[250px]
    ${checkMenu ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:static md:w-[250px]
  `}
      >


        <div className="text-3xl flex items-center font-extrabold mb-10 mt-10 tracking-tight text-white">
          <RiDashboardHorizontalFill className="mr-2" />
          Dashboard
        </div>

        <nav className="flex flex-col gap-4 w-full">
        <NavLink
  to="/dashboard"
  className={({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
    ${isActive ? "bg-white font-bold shadow text-blue-600" : "hover:bg-white/10 text-white"}`
  }
>
  {({ isActive }) => (
    <>
      <RiAppsLine className={`text-xl ${isActive ? "text-blue-600" : "text-white"}`} />
      <span className={isActive ? "text-blue-600" : "text-white"}>Dashboard</span>
    </>
  )}
</NavLink>


          <NavLink
            to="/leets"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
    ${isActive ? "bg-white font-bold shadow text-blue-600" : "hover:bg-white/10 text-white"}`
            }
          >
            {({ isActive }) => (
              <>
                <RiAppsLine className={`text-xl ${isActive ? "text-blue-600" : "text-white"}`} />
                <span className={isActive ? "text-blue-600" : "text-white"}>Leets</span>
              </>
            )}
          </NavLink>


          <NavLink
  to="/contect"
  className={({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
    ${isActive ? "bg-white font-bold shadow text-blue-600" : "hover:bg-white/10 text-white"}`
  }
>
  {({ isActive }) => (
    <>
      <RiAppsLine className={`text-xl ${isActive ? "text-blue-600" : "text-white"}`} />
      <span className={isActive ? "text-blue-600" : "text-white"}>Contect</span>
    </>
  )}
</NavLink>

<NavLink
  to="/createproduct"
  className={({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
    ${isActive ? "bg-white font-bold shadow text-blue-600" : "hover:bg-white/10 text-white"}`
  }
>
  {({ isActive }) => (
    <>
      <RiAppsLine className={`text-xl ${isActive ? "text-blue-600" : "text-white"}`} />
      <span className={isActive ? "text-blue-600" : "text-white"}></span>
    </>
  )}
</NavLink>

          <NavLink
            to="/producttable"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
     ${isActive ? "bg-[#fff] font-bold shadow" : "hover:bg-white/10"} text-white`
            }
          >
            <FaTableList
              className="text-xl text-white" />
            <span className="text-white">Product Table</span>
          </NavLink>

        </nav>
      </aside>
    </>
  );
};

export default Header;
