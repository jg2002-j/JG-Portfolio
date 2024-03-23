import React from "react";
import { NavIcons } from "./NavIcons";
import NavItems from "../data/NavItems.json";
import { NavLink } from "react-router-dom";

// TODO: Must be rendered across every page component of the site
//// Must contain a Navbar

const renderHeaderNavIcons = (NavItems) => {
   return NavItems.map(navItem => {
      if (navItem.type == "page") {
         return (
            <NavLink 
               key={navItem.id} 
               to={navItem.link} 
               className="flex-grow px-5 py-3 rounded ease-in-out duration-1000 hover:bg-[#3f3c74] flex justify-center items-center group"
            >
               {NavIcons(navItem.icon, "text-stone-50", 20)}
            </NavLink>
         )
      }
   })
}

function Header() {
   return (
	   <div className="flex justify-start items-center rounded bg-slate-100 bg-opacity-35 overflow-hidden gap-2 p-1">
         {renderHeaderNavIcons(NavItems)}
      </div>
   )
};	

export default Header;