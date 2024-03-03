import React from "react";
import FeaturedProject from "../components/FeaturedProject";
import Project from "../components/Project";
import projects from "../data/Projects.json"

//// Must render six instances of the Project component dynamically
//// Be sure to store your project details data in a JSON file and import it into your project
// TODO: https://jawblet.medium.com/use-the-github-api-to-display-code-in-a-react-app-51f1aebb5a4

function ProjectsPage() {
   return (
      <>
         <div className="flex flex-col justify-start items-center" id="projects">
            <h1 className="font-title tracking-[0.7rem] text-5xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">My Work</h1>
         </div>
         <FeaturedProject />
         {projects.map(projItem => (
            <Project key={projItem.id} title={projItem.title} desc={projItem.desc} img={projItem.img} deployed={projItem.deployed} repo={projItem.repo} />
         ))} 
      </>      
   )
};

export default ProjectsPage;