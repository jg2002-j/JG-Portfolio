import React, { useState } from "react";
import projects from "../data/Projects.json";
import techBadges from "../data/TechBadges.json";
import { StepForward, StepBack, ArrowUpRight } from "lucide-react";

import bgtexture1 from "../assets/bgTextures/pawel-czerwinski-px-d44bbe7o-unsplash.jpg"
import bgtexture2 from "../assets/bgTextures/pawel-czerwinski-YAtspJ-HV2E-unsplash.jpg"
import bgtexture3 from "../assets/bgTextures/pawel-czerwinski-yIbz_ts9-tQ-unsplash.jpg"

function FeaturedProject() {

   const getBadges = (proj) => {
      const projTechs = proj.techs;
      const matchingTechBadges = techBadges.filter(tech => projTechs.includes(tech.name)).map(tech => tech.value);
      const badgeElements = matchingTechBadges.map(value => (
         <img className="h-6 select-none" key={value} alt={value} src={value} />
      ));
      return badgeElements;
   };

   const bgText = (text, repeats) => {
      let finalArray = []
      let lettersArray = text.split("")

      for (let i = 0; i < repeats; i++) {
         lettersArray.forEach(letter => {
            finalArray.push(letter)
         });
      }

      return(finalArray.map((letter, index) => (<span key={index} className="mx-1 font-title text-8xl ghosttext">{letter}</span>)))
   }

   const fsImage = (image) => {
      alert(image)
   }

   const backgrounds = [bgtexture1, bgtexture2, bgtexture3]
   
   const [ enlargedProj, setEnlargedProj ] = useState(projects[0])
   const [ bgTexture, setBgTexture ] = useState(backgrounds[0])

   const nextProj = (enlargedProj, bgTexture) => {
      let currentProj = (projects.findIndex(proj => (proj.id == enlargedProj.id)))
         if (currentProj+1 >= projects.length){
            setEnlargedProj(projects[0])
         } else {
            setEnlargedProj(projects[currentProj+1])
         }
      let currentBg = (backgrounds.findIndex(bg => (bg == bgTexture)))
         if (currentBg+1 >= backgrounds.length){
            setBgTexture(backgrounds[0])
         } else {
            setBgTexture(backgrounds[currentBg+1])
         }
   }

   return (
      <>
         <div className="hidden 2xl:block max-w-[80%] min-h-dvh mx-auto my-10 bg1 relative rounded-lg overflow-hidden">
            <img className="absolute -z-10 left-0 top-0 h-full w-full object-cover blur-2xl" src={bgTexture} alt="Background texture" />
            <div className="absolute -z-10 left-[-5%] top-[-5%] h-[110%] w-[110%] flex flex-wrap transpdivtb">{bgText(enlargedProj.title,250)}</div>
            <div className="my-20 flex flex-col justify-center gap-10">
               
               <div className="mx-20 bg-stone-300 bg-opacity-10 rounded-lg p-10 flex justify-between items-center gap-10">
                  <div className="flex flex-col justify-start gap-3">
                     <h1 className="text-[4vw] font-title tracking-wider leading-none">{enlargedProj.title}</h1>
                     <h2 className="select-none text-2xl text-wrap w-fit mb-2">{enlargedProj.synopsis}</h2>
                     <div className="flex items-center gap-5">
                        {enlargedProj.tags.map((tag, index) => (
                           <span key={index} className="select-none uppercase text-sm tracking-wider px-3 py-1 bg-stone-300 bg-opacity-10 rounded-lg">{tag}</span>
                        ))}
                     </div>
                  </div>
                  <div className="flex justify-end gap-5 min-w-[15%]">
                     <a target="_blank" href={enlargedProj.deployed} className="h-full aspect-square p-5 rounded-lg flex justify-center items-center bg-stone-300 bg-opacity-10 hover:bg-stone-600 hover:bg-opacity-300 ease-in-out duration-500"><ArrowUpRight className="h-12 w-full"/></a>
                     <button onClick={() => nextProj(enlargedProj, bgTexture)} className="h-full aspect-square p-5 rounded-lg flex justify-center items-center bg-stone-300 bg-opacity-10 hover:bg-stone-600 hover:bg-opacity-300 ease-in-out duration-500"><StepForward className="h-12 w-full"/></button>
                  </div>
               </div>
               <div className="bg-stone-900 noise w-full h-[40vh] p-10 flex justify-start items-center gap-5 overflow-auto hidescroll">
                  {enlargedProj.desktopImgs.map((image, index) => (
                     <img key={index} onClick={() => fsImage(image)} className="h-full w-fit rounded-lg cursor-pointer" src={image} />
                  ))}
                  {enlargedProj.mobileImgs.map((image, index) => (
                     <img key={index} onClick={() => fsImage(image)} className="h-full w-fit rounded-lg cursor-pointer" src={image} />
                  ))}
               </div>
               <div className="mx-20 bg-stone-300 bg-opacity-10 rounded-lg p-10 flex justify-between items-center gap-10">
                  <p className="w-[65ch] max-w-[60%] text-wrap-pretty text-xl">{enlargedProj.desc}</p>
                  <div className="max-w-[30%] flex flex-wrap justify-start items-center gap-4">
                     {getBadges(enlargedProj)}
                  </div>
               </div>

            </div>
         </div>
      </>
   )
};

export default FeaturedProject;