import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import bgImage from "../assets/xebelion-15.jpg";

const currentTime = "{TIME}";

function HomePage() {

   const [sidebarState, setsidebarState] = React.useState("hidden");
   const toggleSidebar = (state) => {
      if (state == "hidden") {setsidebarState("visible");} 
      else if (state == "visible") {setsidebarState("hidden");}
   };

   return (
      <div className="h-dvh rounded-b-3xl" id="home">
         <img className="homepage-img -z-10" src={bgImage} alt="bg art" />
         <Header />
         <div className="flex justify-center items-center h-1/2">
            <h1 className="font-title pgtitle tracking-[12px] uppercase mix-blend-difference text-slate-200 mx-8 hover:tracking-[2rem] hover:scale-110 ease-in-out duration-1000 select-none">Jai Gandhi</h1>
         </div>
         <div className="grid 2xl:grid-cols-4 2xl:grid-rows-2 grid-cols-1 grid-rows-1 m-5">
            <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div>
            <div className="h-32 flex 2xl:border-r-[1px] 2xl:border-b-[1px] border-gray-400 w-full justify-evenly items-center px-3">
               <h2 className="text-slate-200 text-md font-title tracking-[0.25rem]">LONDON.</h2>
               <h2 className="text-slate-200 text-md font-title tracking-[0.25rem]">{currentTime}</h2>
            </div>
            <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block border-b-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
            <div className="hidden h-32 2xl:block w-full"></div>
         </div>
         <Sidebar state={sidebarState} toggleSidebar={toggleSidebar} />
      </div>
   )
};

export default HomePage;