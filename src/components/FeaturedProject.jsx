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
      <div className="mx-10 2xl:mx-[7vw] rounded-3xl flex flex-col 2xl:flex-row gap-10 justify-evenly">
         
         <div className="text-center flex-grow min-w-[50%] overflow-hidden rounded-3xl scroll-p-10" id="featuredprojimg">
            <img src={enlargedProj.img} className="w-full object-contain rounded-3xl object duration-700 ease-in-out hover:scale-110" />
         </div>

         <div className="p-5 flex-grow min-w-[20%] flex flex-row 2xl:flex-col">
            <h1 className="font-header text-6xl text-slate-300 my-10">{enlargedProj.title}</h1>
            <div className="flex flex-wrap justify-start items-center gap-2 my-2">
               {enlargedProj.tags.map(tag => (<span id={""} className="py-1 px-2 border-2 border-slate-600 text-xs text-slate-300 uppercase tracking-widest rounded-lg select-none">{tag}</span>))}
            </div>
            <div className="flex flex-wrap justify-start items-center gap-2 my-5">
               {getBadges(enlargedProj)}
            </div>
            <p className="max-w-[40ch] my-10">{enlargedProj.desc}</p>
         </div>
      </div>
   )
};

export default FeaturedProject;