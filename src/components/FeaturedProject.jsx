import React from "react";
import projects from "../data/Projects.json";
import techBadges from "../data/TechBadges.json";

function FeaturedProject(project) {
   const projChoice = project.project

   let enlargedProj = projects.find(proj => proj.title === projChoice)
   
   if (!enlargedProj) {
      enlargedProj = projects[0]   
   }

   const getBadges = (proj) => {
      const projTechs = proj.techs;
      const matchingTechBadges = techBadges.filter(tech => projTechs.includes(tech.name)).map(tech => tech.value);
      const badgeElements = matchingTechBadges.map(value => (
         <img key={value} alt="Static Badge" src={value} />
      ));
      return badgeElements;
   };

   return (
      <div className="border-2 mx-10 2xl:mx-[5vw] rounded-3xl flex flex-col 2xl:flex-row gap-5 justify-evenly">
         
         <div className="border-2 border-red-500 text-center flex-grow min-w-[30%]" id="featuredprojimg">
            <img src={enlargedProj.img} alt="" className="aspect-video overflow-hidden object-cover rounded-3xl" />
         </div>

         <div className="border-2 border-red-500 p-5 flex-grow min-w-[30%] flex flex-row 2xl:flex-col">
            <h1 className="font-header text-6xl text-slate-300 my-10">{enlargedProj.title}</h1>
            <div className="flex flex-wrap justify-start items-center gap-2 my-2">
               {enlargedProj.tags.map(tag => (<span className="py-1 px-2 border-2 border-slate-600 text-xs text-slate-300 uppercase tracking-widest rounded-lg select-none">{tag}</span>))}
            </div>
            <div className="flex flex-wrap justify-start items-center gap-2 my-5">
               {getBadges(enlargedProj)}
            </div>
            <p className="max-w-[40ch] mb-5">{enlargedProj.desc}</p>
         </div>
      </div>
   )
};

export default FeaturedProject;