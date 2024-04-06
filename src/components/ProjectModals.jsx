import React, { useState } from "react";
import techBadges from "../data/TechBadges.json";
import { Text, Image, Code, Lightbulb } from 'lucide-react';

function ProjectModals(props) {

   const getBadges = (props) => {
      const projTechs = props.techs;
      const matchingTechBadges = techBadges.filter(tech => projTechs.includes(tech.name));
      const badgeElements = matchingTechBadges.map(tech => (
         <img className="h-6 w-fit  select-none" key={tech.name} alt={`${tech.name}Static Badge`} src={tech.value} />
      ));
      return badgeElements;
   };
   
   const shortenDesc = (proj) => {
      if (proj.desc.length > 500) {
         return (
            <>
               <p className="text-lg text-pretty max-w-prose">{proj.desc.substr(0,500)}...
                  <a target="_blank" href={`${proj.repo}/blob/main/README.md`} className="inline border-[1px] border-slate-200 border-opacity-25 ms-3 text-sm rounded-lg px-2 py-1 hover:cursor-pointer hover:bg-stone-600 hover:bg-opacity-50 duration-500 ease-in-out select-none">View full README</a>		
               </p>
            </>
            );
      } else {
         return (
            <>
               <p className="text-lg text-pretty max-w-prose">{proj.desc}</p>
            </>
         );
      }
   }

   const [ descFocus, setdescFocus ] = useState("opacity-30")
   const [ ssFocus, setssFocus ] = useState("opacity-30")
   const [ techFocus, settechFocus ] = useState("opacity-30")
   const [ desktopFullscreenImage, setDesktopFullscreenImage ] = useState()
   const [ mobileFullscreenImage, setMobileFullscreenImage ] = useState()

   const switchFocus = (target) => {
      switch (target) {
         case "desc":
            setdescFocus("opacity-100")
            setssFocus("opacity-30")
            settechFocus("opacity-30")
            break;
         case "screenshots":
            setdescFocus("opacity-30")
            setssFocus("opacity-100")
            settechFocus("opacity-30")
            break;
         case "techstack":
            setdescFocus("opacity-30")
            setssFocus("opacity-30")
            settechFocus("opacity-100")
            break;
         case "all":
            setdescFocus("opacity-100")
            setssFocus("opacity-100")
            settechFocus("opacity-100")
            break;
         default:
            alert("Error")
            break;
      }
   }

   const openModalwithFocus = (target) => {
      document.getElementById("projDetails").showModal()
      switchFocus(target)
   }

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

   const enlargeDesktopImage = (image) => {
      document.getElementById("desktopFullscreenImg").showModal()
      setDesktopFullscreenImage(image)
   }
   const enlargeMobileImage = (image) => {
      document.getElementById("mobileFullscreenImg").showModal()
      setMobileFullscreenImage(image)
   }

   return (
      <>
         <button onClick={() => openModalwithFocus("desc")} className="font-title text-lg tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Text size={20} className="inline me-5"/> description</button>
         <button onClick={() => openModalwithFocus("techstack")} className="font-title text-lg tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Code size={20} className="inline me-5"/> tech stack</button>
         <button onClick={() => openModalwithFocus("screenshots")} className="font-title text-lg tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Image size={20} className="inline me-5"/> screenshots</button>
                  
         <dialog id="projDetails" className="modal bg-stone-900 noise bg-opacity-80 grid grid-cols-12 grid-rows-12 gap-5">
            
            <div id="desc" className={`${descFocus} col-start-2 col-span-5 row-start-2 row-span-3 modal-box hidescroll p-10 max-w-full w-full h-full noise rounded-lg shadow-none`}>
               <div className="flex flex-col gap-7">
                  <h3 className="font-title text-xl tracking-widest">Description</h3>
                  {shortenDesc(props.focusProj)}
                  <h3 className="font-title tracking-widest">What problems did this app solve?</h3>
                  <ul className="text-lg list-disc list-inside">
                     {props.focusProj.keypoints.map((item) => (
                        <li key={item}>{item}</li>
                     ))}
                  </ul>
               </div>

            </div>
            
            <div id="techstack" className={`${techFocus} col-start-7 col-span-3 row-start-2 row-span-3 modal-box hidescroll p-10 max-w-full w-full h-full noise rounded-lg shadow-none`}>
               <h3 className="font-title text-xl tracking-widest">Tech Stack</h3>
               <div className="mt-7 flex flex-wrap gap-4">
                  {getBadges(props.focusProj)}
               </div>
            </div>
            
            <div id="desktopscreenshots" className={`${ssFocus} col-start-2 col-span-6 row-start-5 row-span-7 modal-box hidescroll p-10 max-w-full w-full h-full noise rounded-lg shadow-none flex flex-col justify-center items-center gap-4`}>
               <div className="carousel carousel-center w-full rounded-lg overflow-hidden h-full">
                  {props.focusProj.desktopImgs.map((image, index) => (
                     <div id={`desktopImg${index}`} className="carousel-item w-full me-2">
                        <button onClick={() => enlargeDesktopImage(image)}><img src={image} className="object-contain" /></button>
                     </div> 
                  ))}
               </div> 
               <div className="flex justify-center w-full py-2 gap-2">
                  {props.focusProj.desktopImgs.map((image, index) => (
                    <a href={`#desktopImg${index}`} className="btn btn-sm">{index+1}</a> 
                  ))}
               </div>
               <dialog id="desktopFullscreenImg" className="modal noise">
                  <div className="modal-box noise rounded-lg max-w-full w-fit h-full flex flex-col">
                     <img src={desktopFullscreenImage} className="w-full h-[90%] object-contain rounded-lg" />
                     <div className="modal-action">
                        <form method="dialog">
                           <button className="btn">Close</button>
                        </form>
                     </div>
                  </div>
               </dialog>
            </div>

            <div id="mobilescreenshots" className={`${ssFocus} col-start-8 col-span-2 row-start-5 row-span-7 modal-box hidescroll p-10 max-w-full w-full h-full noise rounded-lg shadow-none flex flex-col justify-center items-center gap-4`}>
               <div className="carousel carousel-vertical carousel-center w-full rounded-lg overflow-hidden h-full">
                  {props.focusProj.mobileImgs.map((image, index) => (
                     <div id={`mobileImg${index}`} className="carousel-item w-full mb-2">
                        <button onClick={() => enlargeMobileImage(image)}><img src={image} className="object-contain" /></button>
                     </div> 
                  ))}
               </div> 
               <div className="flex justify-center w-full py-2 gap-2">
                  {props.focusProj.desktopImgs.map((image, index) => (
                    <a href={`#mobileImg${index}`} className="btn btn-sm">{index+1}</a> 
                  ))}
               </div>
               <dialog id="mobileFullscreenImg" className="modal noise">
                  <div className="modal-box noise rounded-lg max-w-full w-fit h-fit flex flex-col">
                     <img src={mobileFullscreenImage} className="w-full h-[90%] object-contain rounded-lg" />
                     <div className="modal-action">
                        <form method="dialog">
                           <button className="btn">Close</button>
                        </form>
                     </div>
                  </div>
               </dialog>
            </div>
            
            <div id="control" className="col-start-10 col-span-2 row-start-2 row-span-10 modal-box p-10 ps-5 max-w-full w-full h-full noise rounded-lg shadow-none relative overflow-hidden">
               <div className="absolute -top-5 -left-5 w-[120%] h-full -z-10 flex flex-wrap justify-start items-start transpdivtb">{bgText(props.focusProj.title, 100)}</div>
               <div className="flex flex-col justify-end gap-7 ms-5 h-full">
               <h3 className="font-title text-2xl tracking-widest ">{props.focusProj.title}</h3>
                  <div className="flex flex-wrap gap-3">
                     {props.focusProj.tags.map((tag, index) => (
                        <span key={tag+index} className="px-3 py-1 rounded-lg border-2 border-stone-400 border-opacity-50 text-stone-300 text-xs font-bold tracking-wide uppercase">{tag}</span>
                     ))}
                  </div>
                  <div className="flex flex-col flex-grow justify-end items-end gap-4">
                     <button onClick={() => switchFocus("desc")} className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Text size={12} className="inline me-2"/> description</button>
                     <button onClick={() => switchFocus("techstack")} className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Code size={12} className="inline me-2"/> tech stack</button>
                     <button onClick={() => switchFocus("screenshots")} className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Image size={12} className="inline me-2"/> screenshots</button>
                     <button onClick={() => switchFocus("all")} className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Lightbulb size={12} className="inline me-2"/> all</button>
                  </div>
               </div>
            </div>
            
            <form method="dialog" className="col-start-1 col-span-12 row-start-1 row-span-12 modal-backdrop">
               <button>close</button>
            </form>
            
         </dialog>
      </>
   )
};

export default ProjectModals;