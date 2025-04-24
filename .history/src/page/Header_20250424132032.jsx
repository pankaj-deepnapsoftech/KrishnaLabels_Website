import {
  RiDashboardLine,
  RiAppsLine,
  RiContactsFill,
  RiDashboardHorizontalFill,
  RiMenu2Line,
} from "react-icons/ri";
import { IoCreate, IoCloseSharp } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [checkMenu, setCheckMenu] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseMenu = () => {
    if (window.innerWidth < 800) {
      setCheckMenu(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="absolute top-5 left-4 z-50 md:hidden">
        <div onClick={() => setCheckMenu(!checkMenu)}>
          {checkMenu ? (
            <IoCloseSharp
              size={30}
              className={`transition-all duration-50 ease-in absolute left-[12rem] text-white ${showIcon ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
            />
          ) : (
            <RiMenu2Line size={30} className="text-white" />
          )}
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-sky-800 absolute top-0 left-0 h-full max-[800px]:h-[100%] text-white p-6 z-40
        transition-all duration-300 w-[250px]
        ${checkMenu ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:w-[250px]`}
      >
        <div className="text-3xl flex items-center font-extrabold mb-10 py-2 tracking-tight text-white max-[800px]:py-10 max-[800px]:mb-0">
          <RiDashboardHorizontalFill className="mr-2" />
          Dashboard
        </div>

        <nav className="flex flex-col gap-4 w-full">
          <NavLink
            to="/dashboard"
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
              ${isActive ? "bg-[#ffffff3a] rounded shadow" : "hover:bg-white/10"} text-white`
            }
          >
            <RiDashboardLine className="text-xl" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/leets"
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
              ${isActive ? "bg-[#ffffff3a] rounded shadow" : "hover:bg-white/10"} text-white`
            }
          >
            <RiAppsLine className="text-xl" />
            <span>Leads</span>
          </NavLink>

          <NavLink
            to="/admincontact"
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
              ${isActive ? "bg-[#ffffff3a] rounded shadow" : "hover:bg-white/10"} text-white`
            }
          >
            <RiContactsFill className="text-xl" />
            <span>Contact</span>
          </NavLink>

          <NavLink
            to="/createproduct"
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
              ${isActive ? "bg-[#ffffff3a] rounded shadow text-purple-600" : "hover:bg-white/10"} text-white`
            }
          >
            <IoCreate className="text-xl" />
            <span>Create Product</span>
          </NavLink>

          <NavLink
            to="/producttable"
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
              ${isActive ? "bg-[#ffffff3a] rounded shadow" : "hover:bg-white/10"} text-white`
            }
          >
            <FaTableList className="text-xl" />
            <span>Product Table</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Header;
