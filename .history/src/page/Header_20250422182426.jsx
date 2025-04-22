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
        className={`  bg-sky-800 fixed top-0 left-0 h-full max-[800pz]:  text-white p-6 z-40
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
    ${isActive ? "bg-[#ffffff3a] rounded shadow text-white" : "hover:bg-white/10 text-white"}`
            }
          >
            {({ isActive }) => (
              <>
                <RiDashboardLine className={`text-xl ${isActive ? "text-white" : "text-white"}`} />
                <span className={isActive ? "text-white" : "text-white"}>Dashboard</span>
              </>
            )}
          </NavLink>


          <NavLink
            to="/leets"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
    ${isActive ? "bg-[#ffffff3a] rounded shadow text-white" : "hover:bg-white/10 text-white"}`
            }
          >
            {({ isActive }) => (
              <>
                <RiAppsLine className={`text-xl ${isActive ? "text-white" : "text-white"}`} />
                <span className={isActive ? "text-white" : "text-white"}>Leets</span>
              </>
            )}
          </NavLink>


          <NavLink
            to="/contect"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
    ${isActive ? "bg-[#ffffff3a] rounded shadow text-white" : "hover:bg-white/10 text-white"}`
            }
          >
            {({ isActive }) => (
              <>
                <RiContactsFill className={`text-xl ${isActive ? "text-white" : "text-white"}`} />
                <span className={isActive ? "text-white" : "text-white"}>Contact</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/createproduct"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
    ${isActive ? "bg-[#ffffff3a] rounded shadow text-purple-600" : "hover:bg-white/10 text-white"}`
            }
          >
            {({ isActive }) => (
              <>
                <IoCreate className={`text-xl ${isActive ? "text-white" : "text-white"}`} />
                <span className={isActive ? "text-white" : "text-white"}>Create Product</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/producttable"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
    ${isActive ? "bg-[#ffffff3a] rounded shadow texwhite" : "hover:bg-white/10 text-white"}`
            }
          >
            {({ isActive }) => (
              <>
                <FaTableList className={`text-xl ${isActive ? "text-white" : "text-white"}`} />
                <span className={isActive ? "text-white" : "text-white"}>Product Table</span>
              </>
            )}
          </NavLink>


        </nav>
      </aside>
    </>
  );
};

export default Header;
