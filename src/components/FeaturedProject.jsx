import React, { useState } from "react";
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

   const genPos = (min, max) => {
      let left = Math.floor(Math.random()*(max-min)+min);
      let top = Math.floor(Math.random()*(max-min)+min);
      let width = 100-((left) + Math.floor(Math.random()*(max-min)+min));
      // let height = 100-((top) + Math.floor(Math.random()*(max-min)+min));
      let height = width*(7/8)
      return ({
         left: `${left}vw`,
         top: `${top}vh`,
         width: `${width}vw`,
         height: `${height}vh`,
      })
   };
   const ftprojPos = genPos(5,30)

   
   
   return (
      <>
         <div className="h-dvh w-vw border-2 grid grid-cols-12 grid-rows-12 mt-10">
            <div className="relative rounded-3xl flex flex-col 2xl:flex-row gap-5 overflow-hidden border-2" style={{left: ftprojPos.left, top: ftprojPos.top, width: ftprojPos.width, height: ftprojPos.height}}>
               <img className="aspect-video h-full object-cover" src={enlargedProj.img} alt={enlargedProj.title} />
               <div className="w-full border-2 overflow-auto hidescroll">
                  <div className="border-2 border-red-500 h-full">
                     <h2></h2>
                  </div>
                  <div className="border-2 border-blue-500 h-full"></div>
               </div>
            </div>
         </div>
      </>

      // <div className="py-36 mx-10 bg-zinc-950 rounded-3xl bg-opacity-50" id="featuredprojimg">
      //    <div className="mx-10 2xl:mx-[7vw] flex flex-row gap-10 justify-center border-b-[1px]">
      //       <div className="overflow-hidden w-[50%] ps-20 pt-40">
      //          <img src={enlargedProj.img} className="w-50 object-contain object duration-300 ease-in-out hover:rounded-t-[50px]" />
      //       </div>
      //       <div className="ms-32 flex flex-col justify-between">
      //          <p className="text-2xl max-w-prose" >{enlargedProj.desc}</p>
      //          <a href={enlargedProj.deployed} target="_blank" className="border-2 px-10 py-8 ms-48 me-10 font-title text-4xl tracking-widest rounded-xl bg-slate-50 bg-opacity-5 hover:bg-opacity-20 duration-300">Visit Site</a>
      //          <a href={enlargedProj.repo} target="_blank" className="border-2 px-5 py-4 ms-10 me-48 font-title text-2xl tracking-wider rounded-xl bg-slate-50 bg-opacity-5 hover:bg-opacity-20 duration-300">See Repo</a>
      //          <span className="text-end text-2xl mb-5">{enlargedProj.id}</span>
      //       </div>
      //    </div>
      //    <div className="mt-20 2xl:mx-[7vw] flex flex-row gap-10 justify-end">
      //       <h1 className="max-w-[30ch] mx-36 text-8xl font-title tracking-widest">{enlargedProj.title}</h1>
      //    </div>
      // </div>
   )
};

export default FeaturedProject;