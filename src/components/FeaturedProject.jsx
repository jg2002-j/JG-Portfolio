import React, { useState } from "react";
import projects from "../data/Projects.json";
import techBadges from "../data/TechBadges.json";
import { StepForward, StepBack } from "lucide-react";


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
         <img className="h-6 select-none" key={value} alt={value} src={value} />
      ));
      return badgeElements;
   };

   // const genPos = (min, max) => {
   //    let left = Math.floor(Math.random()*(max-min)+min);
   //    let top = Math.floor(Math.random()*(max-min)+min);
   //    let width = 100-((left) + Math.floor(Math.random()*(max-min)+min));
   //    // let height = 100-((top) + Math.floor(Math.random()*(max-min)+min));
   //    let height = width*(7/8)
   //    return ({
   //       left: `${left}vw`,
   //       top: `${top}vh`,
   //       width: `${width}vw`,
   //       height: `${height}vh`,
   //    })
   // };
   // const ftprojPos = genPos(2,10)

   const splitTitle = enlargedProj.title.split("")

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

   const [ img1, setimg1 ] = useState(enlargedProj.mobileImgs[0])
   const [ img2, setimg2 ] = useState(enlargedProj.mobileImgs[1])
   const [ img3, setimg3 ] = useState(enlargedProj.mobileImgs[2])

   const imgForward = () => {
      if (img1 == enlargedProj.mobileImgs[0]){
         setimg1(enlargedProj.mobileImgs[1])
         setimg2(enlargedProj.mobileImgs[2])
         setimg3(enlargedProj.mobileImgs[0])
      } else if (img1 == enlargedProj.mobileImgs[1]){
         setimg1(enlargedProj.mobileImgs[2])
         setimg2(enlargedProj.mobileImgs[0])
         setimg3(enlargedProj.mobileImgs[1])
      } else if (img1 == enlargedProj.mobileImgs[2]){
         setimg1(enlargedProj.mobileImgs[0])
         setimg2(enlargedProj.mobileImgs[1])
         setimg3(enlargedProj.mobileImgs[2])
      } else {
         alert("Error")
      }
   }

   const imgBack = () => {
      if (img1 == enlargedProj.mobileImgs[0]){
         setimg1(enlargedProj.mobileImgs[2])
         setimg2(enlargedProj.mobileImgs[0])
         setimg3(enlargedProj.mobileImgs[1])
      } else if (img1 == enlargedProj.mobileImgs[1]){
         setimg1(enlargedProj.mobileImgs[0])
         setimg2(enlargedProj.mobileImgs[1])
         setimg3(enlargedProj.mobileImgs[2])
      } else if (img1 == enlargedProj.mobileImgs[2]){
         setimg1(enlargedProj.mobileImgs[1])
         setimg2(enlargedProj.mobileImgs[2])
         setimg3(enlargedProj.mobileImgs[0])
      } else {
         alert("Error")
      }
   }

   return (
      <>
         <div id="ftproj" className="w-vw h-dvh min-h-[1491px] my-10 relative overflow-hidden grid grid-cols-12 grid-rows-12 gap-5">
            <div className="absolute -top-5 -left-5 w-[120%] h-full -z-10 flex flex-wrap justify-start items-start transpdivtb">{bgText(enlargedProj.title, 100)}</div>
            <div className="col-start-2 col-span-10 row-start-1 row-span-6 rounded-lg overflow-hidden">
               <img src={enlargedProj.desktopImgs[0]} alt="" className="w-full h-full object-cover object-left-top" />
            </div>
            <div className="col-start-2 col-span-4 row-start-7 row-span-5 rounded-lg overflow-hidden grid grid-cols-9">
               <div className="h-full aspect-[320/568] col-start-1 z-20">
                  <img className="overflow-hidden w-full h-full object-cover object-right" src={img1} alt="Mobile View 1" />
               </div>
               <div className="h-full aspect-[320/568] col-start-7 justify-self-end z-10 opacity-70">
                  <img className="overflow-hidden w-full h-full object-cover object-right" src={img2} alt="Mobile View 2" />
               </div>
               <div className="h-full col-start-8 col-span-2 opacity-50">
                  <img className="overflow-hidden w-full h-full object-cover object-right" src={img3} alt="Mobile View 3" />
               </div>
            </div>
            <div className="col-start-2 col-span-4 row-start-12 row-span-1 bg-stone-300 bg-opacity-10 rounded-lg flex justify-center items-center gap-[20%]">
               <button onClick={() => imgBack()} className="w-16 flex justify-center items-center ease-in-out duration-300 border-[1px] border-stone-200 border-opacity-40 hover:border-opacity-0 rounded-lg bg-stone-900 bg-opacity-5 hover:bg-stone-900 hover:bg-opacity-50"><StepBack size={18} className="m-2"/></button>
               <button onClick={() => imgForward()} className="w-16 flex justify-center items-center ease-in-out duration-300 border-[1px] border-stone-200 border-opacity-40 hover:border-opacity-0 rounded-lg bg-stone-900 bg-opacity-5 hover:bg-stone-900 hover:bg-opacity-50"><StepForward size={18} className="m-2"/></button>
            </div>
            <div className="col-start-6 col-span-6 row-start-7 row-span-1 px-10 bg-stone-300 bg-opacity-10 rounded-lg flex flex-wrap items-center text-[5vw] 2xl:text-6xl font-title tracking-widest">
               {splitTitle.map((letter, index) => (
                  <span className="select-none" key={index}>{letter}</span>
               ))}
            </div>
            <div className="col-start-6 col-span-6 row-start-8 row-span-3 p-10 bg-stone-300 bg-opacity-10 rounded-lg overflow-auto hidescroll">
               <h3 className="font-header text-2xl font-bold text-[${enlargedProj.swatch}] flex flex-wrap items-baseline" style={{color: enlargedProj.swatch}}>What's<span className="font-title mx-3">{enlargedProj.title}</span>about?</h3>
               <p className="mt-10 text-xl leading-8">{enlargedProj.desc}</p>
            </div>
            <div className="col-start-6 col-span-6 row-start-11 row-span-2 p-10 bg-stone-300 bg-opacity-10 rounded-lg overflow-auto hidescroll">
               <h3 className="font-header text-2xl font-bold" style={{color: enlargedProj.swatch}}>What technologies were used?</h3>
               <div className="flex flex-wrap gap-3 mt-10">
                  {getBadges(enlargedProj)}
               </div>
            </div>
         </div>
      </>
   )
};

export default FeaturedProject;