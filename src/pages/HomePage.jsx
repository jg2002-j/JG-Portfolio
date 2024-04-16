import React, { useState, useRef } from "react";

import LoadingScreen from "../components/LoadingScreen";
import MiniNav from "../components/MiniNav";
import Title from "../components/Title";
import FeaturedProject from "../components/FeaturedProject";
import CurrentTime from "../components/CurrentTime";
import SmSocialLinks from "../components/SmSocialLinks";
import Points from "../components/Points";

import {  } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function HomePage() {

   useGSAP(() => {

   })

   return (
      <>
         {/* <LoadingScreen/> */}
         <div className="min-h-dvh w-vw flex flex-col justify-between bgimage">
            <div className="flex justify-between p-2">
               <SmSocialLinks/>
               <div className="flex justify-end gap-x-2">
                  <span className="tracking-wider select-none font-semibold text-stone-400 bg-stone-300 bg-opacity-10 hover:bg-opacity-70 hover:text-stone-600 duration-500 ease-in-out rounded-lg px-6 py-2"><CurrentTime/></span>
                  <span className="tracking-wider select-none font-semibold text-stone-400 bg-stone-300 bg-opacity-10 hover:bg-opacity-70 hover:text-stone-600 duration-500 ease-in-out rounded-lg px-6 py-2">London, United Kingdom</span>
               </div>
            </div>
            <Title/>
         </div>
         {/* <MiniNav/> */}
         <Points/>   
         <div className="w-full h-[20vh] noise bg-stone-900"></div>
         <FeaturedProject/>
      </>
   )
};

export default HomePage;