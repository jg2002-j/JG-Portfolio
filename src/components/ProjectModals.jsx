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

   const splitTitle = props.focusProj.title.split("")

   return (
      <>
         <button onClick={() => openModalwithFocus("desc")} className="font-title text-lg tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Text size={20} className="inline me-5"/> description</button>
         <button onClick={() => openModalwithFocus("techstack")} className="font-title text-lg tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Code size={20} className="inline me-5"/> tech stack</button>
         <button onClick={() => openModalwithFocus("screenshots")} className="font-title text-lg tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Image size={20} className="inline me-5"/> screenshots</button>
                  
         <dialog id="projDetails" className="modal bg-stone-900  noise bg-opacity-80 grid grid-cols-12 grid-rows-12 gap-5">
            
            <div id="desc" className={`${descFocus} col-start-2 col-span-5 row-start-2 row-span-3 modal-box hidescroll p-10 max-w-full w-full h-full noise rounded-lg shadow-none`}>
               <div className="flex flex-col gap-7">
                  <h3 className="font-title text-xl tracking-widest">Description</h3>
                  {shortenDesc(props.focusProj)}
                  <h3 className="font-title tracking-widest">What problems did this app solve?</h3>
                  <ul className="text-lg">
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
            
            <div id="screenshots" className={`${ssFocus} col-start-2 col-span-8 row-start-5 row-span-7 modal-box hidescroll p-10 max-w-full w-full h-full noise rounded-lg shadow-none flex flex-col justify-center items-center gap-4`}>
               <div className="carousel w-full rounded-lg overflow-hidden border-2 border-stone-400 border-opacity-50 h-full">
                  <div id="item1" className="carousel-item w-full">
                     <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="object-contain" />
                  </div> 
                  <div id="item2" className="carousel-item w-full">
                     <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="object-contain" />
                  </div> 
                  <div id="item3" className="carousel-item w-full">
                     <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="object-contain" />
                  </div> 
                  <div id="item4" className="carousel-item w-full">
                     <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="object-contain" />
                  </div>
               </div> 
               <div className="flex justify-center w-full py-2 gap-2">
                  <a href="#item1" className="btn btn-sm">1</a> 
                  <a href="#item2" className="btn btn-sm">2</a> 
                  <a href="#item3" className="btn btn-sm">3</a> 
                  <a href="#item4" className="btn btn-sm">4</a>
               </div>
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

      // <div className="select-none min-w-[35%] flex flex-col gap-5 m-5">
      //    <div className="rounded-3xl overflow-hidden">
      //       <img src={props.img} className="aspect-video w-full object-cover" />
      //    </div>
      //    <div className="flex flex-wrap justify-start items-center gap-2 my-2">
      //       {props.tags.map(tag => (<span key={tag} className="py-1 px-3 border-[1px] border-slate-600 text-xs capitalize tracking-widest text-slate-300 rounded-3xl select-none">{tag}</span>))}
      //    </div>
      //    <h2 className="font-title text-xl lg:text-5xl tracking-wider">{props.title}</h2>
      //    <div className="flex flex-wrap justify-start items-center gap-2">
      //       {getBadges(props)}
      //    </div>
      //    <div>
      //       <p className="max-w-[40ch]">{shortenDesc(props)}</p>
      //    </div>
      //    <div className="flex flex-col lg:flex-row gap-5">
      //       <a target="_blank" href={props.deployed} className="rounded-3xl border-[1px] border-slate-600 py-1 flex items-center justify-center bg-slate-600 hover:bg-transparent group duration-700 ease-in-out">
      //          <span className="ms-9 me-2 group-hover:ms-5 duration-700 font-header group-hover:text-slate-200 text-xs">Visit Website</span>
      //          <MousePointerSquare size={12} className="inline ms-0 me-4 group-hover:ms-4 duration-700 text-slate-600 group-hover:text-slate-200" />
      //       </a>
      //       <a target="_blank" href={props.repo} className="rounded-3xl border-[1px] border-slate-600 py-1 flex items-center justify-center bg-slate-600 hover:bg-transparent group duration-700 ease-in-out">
      //          <span className="ms-9 me-2 group-hover:ms-5 duration-700 font-header group-hover:text-slate-200 text-xs">GitHub</span>
      //          <FolderGit2 size={12} className="inline ms-0 me-4 group-hover:ms-4 duration-700 text-slate-600 group-hover:text-slate-200" />
      //       </a>
      //       <button onClick={() => {props.enlargefunction(props)}} className="rounded-3xl border-[1px] border-slate-600 py-1 flex items-center justify-center bg-slate-600 hover:bg-transparent group duration-700 ease-in-out">
      //          <Expand size={12} className="ms-9 me-9 duration-700group-hover:text-slate-200 text-xs" />
      //       </button>
      //    </div>
      // </div>

      // // <div className="text-slate-200 2xl:w-1/5 2xl:hover:w-1/3 w-3/5 hover:w-4/5 ease-in-out duration-1000 rounded-lg py-12 p-3">
      // //    <img src={props.img} alt="" className="aspect-video w-full rounded-lg object-cover" />
      // //    <h1 className="font-header text-4xl text-slate-300 my-5">{props.title}</h1>
      // //    <div className="flex flex-wrap justify-start items-center gap-2 my-2">
      // //       {props.tags.map(tag => (<span key={tag} className="py-1 px-2 border-2 border-slate-600 text-xs text-slate-300 uppercase tracking-widest rounded-lg select-none">{tag}</span>))}
      // //    </div>
      // //    <div className="flex flex-wrap justify-start items-center gap-2 my-5">
      // //       {getBadges(props)}
      // //    </div>
      // //    <p className="max-w-[40ch] mb-5">{shortenDesc(props)}</p>
      // //    <div className="grid auto-rows-[1] auto-cols-[20%_20%_20%_20%] gap-y-2">
      // //       <a target="_blank" href={props.deployed} className="col-start-1 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/live text-center bg-[#44446c] bg-opacity-50"><MousePointerSquare className="inline-block ease-in-out duration-700" size={15} /></a>
      // //       <div className="bg-[#1a1923] col-start-2 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/live:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">Live Site</div>
      // //       <a target="_blank" href={props.repo} className="col-start-2 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/repo text-center bg-[#44446c] bg-opacity-50"><FolderGit2 className="inline-block ease-in-out duration-700" size={15} /></a>
      // //       <div className="bg-[#1a1923] col-start-3 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/repo:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">GitHub Repo</div>
      // //       <button onClick={() => {props.enlargefunction(props)}} className="col-start-3 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/expand text-center bg-[#44446c] bg-opacity-50"><Expand className="inline-block ease-in-out duration-700" size={15} /></button>
      // //       <div className="bg-[#1a1923] col-start-4 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/expand:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">See More</div>
      // //    </div>
      // // </div>
   )
};

export default ProjectModals;