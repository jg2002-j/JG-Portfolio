import React from "react";
import projects from "../data/Projects.json";

function FeaturedProject(project) {
   const projChoice = project.project

   let enlargedProj = projects.find(proj => proj.title === projChoice)
   
   if (!enlargedProj) {
      enlargedProj = projects[0]   
   }
   
   return (
	   <div className="2xl:m-40 mt-40 m-20 rounded-xl max-h-[70vh] grid grid-cols-12 grid-rows-12">
         <div className="flex col-start-1 row-start-1 col-span-12 row-span-8">
            <img id="featuredprojimg" src={enlargedProj.img} alt={enlargedProj.title} className="aspect-video rounded-lg object-cover" />
         </div>
         <h1 className="col-start-1 row-start-9 row-span-4 col-span-4 font-header text-6xl text-slate-300 text-center my-auto">{enlargedProj.title}</h1>
         <p className="row-start-9 col-start-6 col-span-5 row-span-4 my-auto text-slate-300">{enlargedProj.desc}</p>
      </div>
   )
};

export default FeaturedProject;