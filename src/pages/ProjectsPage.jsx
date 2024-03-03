import React from "react";
import FeaturedProject from "../components/FeaturedProject";
import Project from "../components/Project";

function ProjectsPage() {
   return (
      <>
         <div className="h-dvh flex flex-col justify-start items-center" id="projects">
            <h1 className="font-title tracking-[0.7rem] text-5xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">My Work</h1>
         </div>
         <FeaturedProject />
         <Project />  
      </>      
   )
};

export default ProjectsPage;