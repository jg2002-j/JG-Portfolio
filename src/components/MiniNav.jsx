import React, { useRef } from "react";
import { NavIcons } from "./NavIcons";
import NavItems from "../data/NavItems.json";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip";



const renderHeaderNavIcons = (NavItems) => {
   const elRefs = useRef([])
   return (
      NavItems.map(navItem => {
         if (navItem.type == "page") {
            return (
               <NavLink 
                  ref={ref => {
                     elRefs.current[navItem.link] = ref
                  }}
                  key={navItem.id} 
                  to={navItem.link} 
                  className="group-hover:px-8 px-4 py-2 ease-in-out duration-700 rounded-lg flex justify-center items-center bg-stone-900 bg-opacity-5 hover:bg-stone-900 hover:bg-opacity-50"
               >
                  {NavIcons(navItem.icon, "text-stone-50 text-opacity-50 group-hover:text-opacity-100 ", 15)}
                  <span className="font-header text-stone-50 text-opacity-50 group-hover:text-opacity-100 text-xs uppercase tracking-widest ms-4">{navItem.name}</span>
               </NavLink>
            )
         }
      })
   )

}

function MiniNav() {

   // useGSAP(() => {

   // })

   return (
      <div className="px-20 py-[5vh] max-w-fit group mx-auto">
         <div className="max-w-fit bg-slate-50 bg-blend-difference bg-opacity-10 mx-auto rounded-lg px-5 py-1 group-hover:py-2 flex flex-col lg:flex-row justify-center items-center gap-5 group-hover:gap-x-8 group-hover:bg-opacity-30 group-hover:px-20 duration-700">
            {renderHeaderNavIcons(NavItems)}
         </div>
      </div>
   )
};	

export default MiniNav;