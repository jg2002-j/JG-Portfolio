import React, { useRef } from "react";
import LoadingScreen from "../components/LoadingScreen";
import MiniNav from "../components/MiniNav";
import Title from "../components/Title";
// import bgImage from "../assets/xebelion-15.jpg";
import FeaturedProject from "../components/FeaturedProject";
import Skills from "../components/Skills";
import CurrentTime from "../components/CurrentTime";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function HomePage() {

   const border1 = useRef(null)

   useGSAP(() => {

   })


   return (
      <>
         {/* <LoadingScreen/> */}

         <div className="min-h-dvh w-vw help">
            <MiniNav />

         </div>


         {/* <div className="min-h-dvh mx-auto flex flex-col">
            <div className="min-h-[40vh] w-full relative">
               <div className="absolute flex w-full h-full -z-10">
                  <div className="w-[40%] bg-stone-300 bg-opacity-50 noise flex justify-start items-start"></div>
                  <div className="w-[60%] bg-stone-50 bg-opacity-50 noise flex justify-end items-end"></div>
               </div>
               <div className="w-full min-h-[40vh] flex flex-col justify-center items-center py-10">
                  <div className="self-start hidden 2xl:flex items-center justify-center w-full px-10 gap-10">
                     <p className="text-[1.5vw] font-title tracking-[0.5rem] text-stone-300">LONDON</p>
                     <div className="w-full 2xl:border-[2px] border-[1px] border-stone-600"></div>
                  </div>
                  <Title />
                  <div className="self-end flex 2xl:hidden items-center justify-center w-full px-10 gap-10">
                     <div className="w-full 2xl:border-[2px] border-[1px] border-stone-600"></div>
                     <div className="text-[1.5vw] font-title tracking-[0.5rem] text-stone-300 flex flex-nowrap items-center gap-10">
                        LONDON
                        <div className="border-[1px] w-[5vw] border-stone-600"></div>
                        <CurrentTime/>
                     </div>
                  </div>
                  <div className="self-start hidden 2xl:flex items-center justify-center w-full px-10 gap-10">
                     <div className="w-full 2xl:border-[2px] border-[1px] border-stone-600"></div>
                     <p className="text-[1.5vw] font-title tracking-[0.5rem] text-stone-300">{<CurrentTime/>}</p>
                  </div>
               </div>
            </div>
            <div className="min-h-[90vh] w-full">
               <div className="bgimage mx-10 max-w-full min-h-dvh rounded-b-lg">
                  <MiniNav />
               </div>
            </div>
         </div> */}
         <FeaturedProject/>
      
      </>
   )
};

export default HomePage;