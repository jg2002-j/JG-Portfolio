import React from "react";
import FeaturedProject from "../components/FeaturedProject";
import AllProjects from "../components/AllProjects";

//// Must render six instances of the Project component dynamically
//// Be sure to store your project details data in a JSON file and import it into your project

function ProjectsPage() {
   return (
      <>
         <div className="2xl:mx-60 m-20 flex flex-col justify-start items-center" id="projects">
            <h1 className="font-title tracking-[0.7rem] text-5xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">My Work</h1>
         </div>
         <FeaturedProject />
         <AllProjects />
      </>      
   )
};

export default ProjectsPage;