import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import bgImage from "../assets/xebelion-15.jpg";

function HomePage() {
   return (
      <div className="h-dvh rounded-b-3xl" id="home">
         <img className="homepage-img" src={bgImage} alt="bg art" />
         <Header />
         <h1 className="font-title uppercase mix-blend-multiply">Jai Gandhi</h1>
         <Sidebar />
      </div>
   )
};

export default HomePage;