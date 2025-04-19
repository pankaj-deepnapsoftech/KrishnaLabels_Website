import { RiDashboardLine, RiAppsLine, RiContactsFill } from "react-icons/ri";
import React from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardHorizontalFill } from "react-icons/ri";

const Header = () => {
  return (
    <aside className="w-64 h-[90vh] p-6  mr-2  bg-gradient-to-br bg-gray-600 text-white">
      <div className="text-3xl flex items-center font-extrabold mb-10 tracking-tight text-blue-400 ">
      <RiDashboardHorizontalFill />
      Dashboard
      </div>

      <nav className="flex flex-col gap-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
            ${
              isActive
                ? "bg-blue-400 font-bold shadow"
                : "hover:bg-white/10"
            }`
          }
        >
          <RiDashboardLine className="text-xl   text-white" /> <span className="text-white">Dashboard</span>
        </NavLink>

        <NavLink
          to="/leets"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
            ${
              isActive
                ? "bg-blue-400 font-bold shadow"
                : "hover:bg-white/10"
            }`
          }
        >
          <RiAppsLine className="text-xl text-white" /> <span className="text-white">Leets</span>
        </NavLink>

        <NavLink
          to="/contect"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
            ${
              isActive
                ? "bg-blue-400 font-bold shadow"
                : "hover:bg-white/10"
            }`
          }
        >
          <RiContactsFill className="text-xl text-white" /> <span className="text-white">Contact</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Header;
