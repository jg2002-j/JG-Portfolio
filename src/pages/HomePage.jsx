import React, { useRef } from "react";
import LoadingScreen from "../components/LoadingScreen";
import MiniNav from "../components/MiniNav";
import Title from "../components/Title";
import bgImage from "../assets/xebelion-15.jpg";
import FeaturedProject from "../components/FeaturedProject";
import Skills from "../components/Skills";
import CurrentTime from "../components/CurrentTime";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function HomePage() {
   return (
      <>
         <div className="min-h-dvh max-w-screen-2xl border-2 mx-auto flex flex-col">
            <div className="border-2 h-[40vh] w-full flex">
               <div className="w-[40%] border-2"></div>
               <div className="w-[60%] border-2"></div>
            </div>
            <div className="border-2 h-[60vh] w-full bgimage">
               <Title />
               <MiniNav />
            </div>
         </div>
      
      </>
      // <>
      //    {/* <LoadingScreen /> */}
      //    <div className="h-dvh rounded-b-3xl flex flex-col justify-between" id="home">
      //       <img className="homepage-img -z-10" src={bgImage} alt="bg art" />
      //       <div className="grid 2xl:grid-cols-3 2xl:grid-rows-2 grid-cols-1 grid-rows-1 m-5">
      //          <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-300 w-full"></div>
      //          <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div>
      //          <div className="hidden h-32 2xl:block border-b-[1px] border-gray-400 w-full"></div>
      //          <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
      //          <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
      //          <div className="h-32 border-gray-400 w-full px-5 flex flex-col justify-center">
      //             <MiniNav />
      //          </div>
      //       </div>
      //       <Title />
      //       <div className="grid 2xl:grid-cols-3 2xl:grid-rows-2 grid-cols-1 grid-rows-1 m-5">
      //          {/* <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div> */}
      //          <div className="h-32 flex 2xl:border-r-[1px] 2xl:border-b-[1px] border-gray-400 w-full justify-evenly items-center px-3">
      //             <h2 className="text-slate-200 text-md font-title tracking-[0.25rem] px-4 py-2 ease-in-out duration-700 rounded-lg hover:scale-150 bg-[#722e58] bg-opacity-50 hover:bg-[#3f3c74] cursor-default">LONDON</h2>
      //             <h2 className="text-slate-200 text-md font-title tracking-[0.25rem] px-4 py-2 ease-in-out duration-700 rounded-lg hover:scale-150 bg-[#722e58] bg-opacity-50 hover:bg-[#3f3c74] cursor-default">{<CurrentTime/>}</h2>
      //          </div>
      //          <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div>
      //          <div className="hidden h-32 2xl:block border-b-[1px] border-gray-400 w-full"></div>
      //          <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
      //          {/* <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div> */}
      //          <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
      //          <div className="hidden h-32 2xl:block w-full"></div>
      //       </div>
      //    </div>
      //    <div className="2xl:mx-60 mt-60 m-10 flex flex-col justify-start items-center" id="experience">
      //       <h1 className="font-title text-center tracking-[0.7rem] text-6xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">What can I do?</h1>
      //    </div>
      //    <div className="2xl:mx-60 m-20 max-w-full flex-col justify-center" id="aboutme">
      //       <Skills />
      //    </div>
      //    <FeaturedProject />
      // </>
   )
};

export default HomePage;