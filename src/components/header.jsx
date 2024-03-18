import React from 'react';
import { NavIcons } from "./NavIcons";
import NavItems from "../data/NavItems.json";
import { NavLink } from 'react-router-dom';

// TODO: Must be rendered across every page component of the site
//// Must contain a Navbar

const renderHeaderNavIcons = (NavItems) => {
   return NavItems.map(navItem => {
      if (navItem.type == "page") {
         return (
            <NavLink to={navItem.link} key={navItem.id} className="rounded-lg px-4 py-2 my-10 group ease-in-out duration-700 hover:scale-150 bg-[#722e58] bg-opacity-50 hover:bg-[#3f3c74] flex justify-center items-center">
               {NavIcons(navItem.icon, "text-[#E0E2DB]", 20)}
            </NavLink>
         )
      }
      return null;
   })
}

function Header() {
   return (
	   <>
         <div className="grid 2xl:grid-cols-4 2xl:grid-rows-2 grid-cols-1 grid-rows-1 m-5">
            <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block border-b-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
            <div className="h-32 flex 2xl:border-r-[1px] border-gray-400 w-full justify-evenly items-center px-3 gap-2">
               {renderHeaderNavIcons(NavItems)}
            </div>
            <div className="hidden h-32 2xl:block w-full"></div>
         </div>
      </>
   )
};	

export default Header;