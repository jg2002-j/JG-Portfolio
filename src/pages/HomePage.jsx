import React, { useState, useRef } from "react";
import LoadingScreen from "../components/LoadingScreen";
import MiniNav from "../components/MiniNav";
import { NavIcons } from "../components/NavIcons";
import NavItems from "../data/NavItems.json";
import Links from "../data/Links.json";
import { NavLink } from "react-router-dom";
import Title from "../components/Title";
import FeaturedProject from "../components/FeaturedProject";
import Skills from "../components/Skills";
import CurrentTime from "../components/CurrentTime";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function HomePage() {

   const elRefs = useRef([])

   const [ leftArrow, setleftArrow ] = useState("#FFF")
   const [ rightArrow, setrightArrow ] = useState("transparent")

   const applyHoverFX = () => {
      setleftArrow("transparent")
      setrightArrow("#FFF")
   }

   const removeHoverFX = () => {
      setleftArrow("#FFF")
      setrightArrow("transparent")
   }

   useGSAP(() => {

   })

   return (
      <>
         {/* <LoadingScreen/> */}

         <div className="min-h-dvh w-vw flex flex-col justify-between bgimage">
            <div className="flex justify-between">
               <div className="flex justify-start gap-x-2 m-2">
                  {Links.map((item, index) => (
                     <a target="_blank" href={item.link} className="tracking-wider font-semibold text-stone-400 bg-stone-300 bg-opacity-10 rounded-lg px-5 py-2 hover:bg-stone-400 hover:bg-opacity-30 hover:px-8 ease-in-out duration-500">{item.name}</a>
                  ))}
               </div>
               <div className="flex justify-end gap-x-2 m-2">
                  <span className="tracking-wider select-none font-semibold text-stone-400 bg-stone-300 bg-opacity-10 rounded-lg px-5 py-2">London</span>
                  <span className="tracking-wider select-none font-semibold text-stone-400 bg-stone-300 bg-opacity-10 rounded-lg px-5 py-2"><CurrentTime/></span>
               </div>
            </div>
            {/* <div className="flex-grow"></div> */}
            <div className="w-vw min-h-[40vh] bg-stone-900 noise p-8 flex justify-between items-center gap-10">
               <Title/>
               <NavLink to={"projects"} onMouseEnter={applyHoverFX} onMouseLeave={removeHoverFX} type="button" className="flex justify-center items-center gap-10 w-fit h-fit p-10 group">
                  <div className="flex items-center gap-4 uppercase tracking-wider">
                     <span className="text-stone-300 opacity-60 group-hover:opacity-30 ease-in-out duration-200">home</span>
                     <div className="border-b-[1px] border-stone-300 w-8 opacity-60"></div>
                     <span className="text-stone-300 opacity-30 group-hover:opacity-100 ease-in-out duration-200">projects</span>
                  </div>
                  <svg className="rotate-180" width="70" height="57" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.79 203.48">
                     <polyline fill={leftArrow} strokeWidth="6px" strokeLinecap="square" strokeMiterlimit="10" stroke="#FFF" points="100.24 101.74 191.42 200.48 243.97 200.48 153.54 101.74 243.97 3 191.46 3 100.24 101.74"></polyline>
                     <polyline fill={rightArrow} strokeWidth="6px" strokeLinecap="square" strokeMiterlimit="10" stroke="#FFF" points="4.24 101.74 95.42 200.48 147.97 200.48 57.54 101.74 147.97 3 95.46 3 4.24 101.74"></polyline>
                  </svg>

               </NavLink>
            </div>
         </div>
         <MiniNav/>
         <FeaturedProject/>
      </>
   )
};

export default HomePage;

// {NavItems.map(navItem => {
//    if (navItem.type == "page") {
//       return (
//          <NavLink 
//             ref={ref => {elRefs.current[navItem.link] = ref}}
//             key={navItem.id} 
//             to={navItem.link}
//             className="flex justify-start items-center text-stone-50 p-5 rounded-lg bg-stone-300 bg-opacity-10 group"
//          >
//             {NavIcons(navItem.icon, "", 25)}
//             {/* <span className="ms-3 font-header text-lg tracking-wider">{navItem.name}</span> */}
//          </NavLink>
//       )
//    }
// })}