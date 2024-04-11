import React, { useState, useRef } from "react";

import LoadingScreen from "../components/LoadingScreen";
import MiniNav from "../components/MiniNav";
import Title from "../components/Title";
import FeaturedProject from "../components/FeaturedProject";
import CurrentTime from "../components/CurrentTime";

import Links from "../data/Links.json";

import {  } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function HomePage() {

   const elRefs = useRef([])

   const linkIcons = (name) => {
      switch (name) {
         case "GitHub":
            return(<img className="aspect-square h-4" src="https://cdn.simpleicons.org/github/a7a29f" alt={name}/>)
         case "LinkedIn":
            return(<img className="aspect-square h-4" src="https://cdn.simpleicons.org/linkedin/a7a29f" alt={name}/>)
         case "CV":
            return(<img className="aspect-square h-4" src="https://cdn.simpleicons.org/googledocs/a7a29f" alt={name}/>)
         default:
            break;
      }
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
                     <a key={index} target="_blank" href={item.link} className="tracking-wider font-semibold text-stone-400 bg-stone-300 bg-opacity-10 rounded-lg px-5 py-2 hover:bg-stone-400 hover:bg-opacity-30 hover:px-8 ease-in-out duration-500 flex items-center">
                        {linkIcons(item.name)}
                        <span className="ms-3 ">{item.name}</span>
                     </a>
                  ))}
               </div>
               <div className="flex justify-end gap-x-2 m-2">
                  <span className="tracking-wider select-none font-semibold text-stone-400 bg-stone-300 bg-opacity-10 rounded-lg px-5 py-2"><CurrentTime/></span>
                  <span className="tracking-wider select-none font-semibold text-stone-400 bg-stone-300 bg-opacity-10 rounded-lg px-5 py-2">London, United Kingdom</span>
               </div>
            </div>
            <Title/>
         </div>
         <MiniNav/>
            <div className="w-full lg:max-w-[80%] min-h-[50vh] mx-auto my-10 help"></div> 
         <FeaturedProject/>
      </>
   )
};

export default HomePage;