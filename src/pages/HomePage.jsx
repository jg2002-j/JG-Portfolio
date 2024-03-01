import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import bgImage from "../assets/xebelion-15.jpg";

function HomePage() {
   return (
      <div className="h-dvh rounded-b-3xl" id="home">
         <img className="homepage-img" src={bgImage} alt="bg art" />
         <Header />
         <div className="flex justify-center items-center h-3/4">
            <h1 className="font-title uppercase mix-blend-difference text-slate-200 mx-8 hover:tracking-[2rem] hover:scale-110 ease-in-out duration-1000 select-none">Jai Gandhi</h1>
         </div>
         <Sidebar />
      </div>
   )
};

export default HomePage;