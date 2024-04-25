import React, { useState, useRef } from "react";

import projects from "../data/Projects";
import BackgroundTexture from "../assets/bgTextures/BackgroundTexture";

import { FolderGit2, Globe } from 'lucide-react';
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function FeaturedProject() {

   // Refs
   const allProjects = useRef(null)

   // States
	const [ img, setImg ] = useState("")
   const [ allProjectsHovered, setallProjectsHovered ] = useState(false)

   // Functions
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
   
   const featuredProjs = []
   projects.forEach((project) => {
      if (project.featured) {
         featuredProjs.push(project)
      }
   })

	const fsImage = (e) => {
		setImg(e.target.src)
		document.getElementById("fsImage").showModal()
	}

   const allProjMouseEnter = () => {setallProjectsHovered(true)}
   const allProjMouseLeave = () => {setallProjectsHovered(false)}

   // GSAP
   useGSAP(() => {
      if (allProjectsHovered) {
         gsap.to(allProjects.current, {
            duration: 1,
            text: "All Projects →",
            ease: "power3.inOut"
         })
      } else {
         gsap.to(allProjects.current, {
            duration: 1,
            text: "",
            ease: "power3.inOut"
         })
      }
   },[allProjectsHovered])

   return (
      <>
         <div className="scrollPanel min-h-dvh flex flex-col mx-auto relative rounded-lg overflow-hidden">
            <BackgroundTexture />
            <div className="flex-grow bg-stone-900 bg-opacity-75 noise rounded-lg p-10 lg:p-20 flex flex-col justify-center gap-20">
               <div className="flex">
						<h1 className="text-4xl lg:text-[6vw] font-header text-stone-500 leading-none tracking-wider mix-blend-difference hover:text-stone-400 duration-1000">My Work.</h1>
					</div>					
               <div className="bg-stone-300 bg-opacity-10 p-5 lg:p-10 rounded-lg flex flex-col lg:flex-row gap-5 lg:gap-10">
                  {featuredProjs.map((proj, index) => (
                     <div key={index} className={`w-full lg:w-[35%] noise rounded-lg p-5 flex flex-col gap-3 relative overflow-hidden text-stone-400`} style={{backgroundColor: `rgba(${proj.swatch},0.4)`}}>
                        <BackgroundTexture />
                        <div className="absolute -z-10 left-[-5%] top-[-5%] h-[110%] w-[110%] flex flex-wrap transpdivtb opacity-50">{bgText(proj.title,50)}</div>
                        <h1 className="text-2xl lg:text-[1.5vw] font-title tracking-wider leading-none">{proj.title}</h1>
                        <div className="flex flex-wrap items-center gap-2">
                           {proj.tags.map((tag, index) => (
                              <span key={index} className="select-none uppercase text-xs tracking-wider px-3 py-1 bg-stone-300 bg-opacity-10 rounded-lg">{tag}</span>
                           ))}
                        </div>
                        <h2 className="select-none text-wrap w-fit">{proj.synopsis}</h2>
                        <div className="aspect-video w-full rounded-lg cursor-pointer overflow-hidden">
                           <img onClick={() => fsImage(event)} src={proj.desktopImgs[0]} alt="Project screenshot" className="h-full w-full object-cover hover:scale-110 ease-in-out duration-1000" />
                        </div>
                        <div className="flex justify-end items-center gap-5">
                           <a target="_blank" aria-label="Visit the deployed site." href={proj.deployed} className="h-full aspect-square p-3 rounded-lg flex justify-center items-center bg-stone-300 bg-opacity-10 hover:bg-stone-200 hover:bg-opacity-300 ease-in-out duration-1000 group"><Globe className="h-5 w-full text-stone-400 group-hover:text-stone-800 ease-in-out duration-1000"/></a>
                           <a target="_blank" aria-label="Visit the GitHub repo." href={proj.repo} className="h-full aspect-square p-3 rounded-lg flex justify-center items-center bg-stone-300 bg-opacity-10 hover:bg-stone-200 hover:bg-opacity-300 ease-in-out duration-1000 group"><FolderGit2 className="h-5 w-full text-stone-400 group-hover:text-stone-800 ease-in-out duration-1000"/></a>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="flex justify-end">
						<h1 className="text-4xl lg:text-[6vw] font-header text-stone-500 leading-none tracking-wider mix-blend-difference hover:text-stone-400 duration-1000">See more.</h1>
					</div>		
               <div onMouseEnter={() => allProjMouseEnter()} onMouseLeave={() => allProjMouseLeave()} className="bg-stone-300 bg-opacity-10 relative rounded-lg overflow-hidden p-5 lg:p-10">
                  <NavLink aria-label="Visit the projects page." to="projects" className="absolute h-full w-full top-0 left-0 flex justify-center items-center rounded-lg overflow-hidden hover:backdrop-blur-3xl hover:bg-stone-900 hover:bg-opacity-80 noise ease-in-out duration-1000">
                     <h2 ref={allProjects} className="text-[4vw] leading-none text-stone-400 tracking-widest font-title text-center"></h2>
                  </NavLink>
                  <div className="w-full h-24 lg:h-48 flex gap-5">
                     {projects.map((proj, index) => (
                        <img key={proj.id} className="h-full w-fit rounded-lg cursor-pointer" src={proj.desktopImgs[0]} alt="Project screenshot" />
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <dialog id="fsImage" className="modal">
				<div className="modal-box bg-stone-900 noise max-w-[90vw] w-fit h-[90vh] overflow-hidden">
					<img src={img} alt="Fullscreen view" className="h-full object-contain" />
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
      </>
   )
};

export default FeaturedProject;