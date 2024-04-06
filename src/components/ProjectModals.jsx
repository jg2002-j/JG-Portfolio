import React, { useState } from "react";
import techBadges from "../data/TechBadges.json";
import { Text, Image, Code } from 'lucide-react';


const getBadges = (props) => {
   const projTechs = props.techs;
   const matchingTechBadges = techBadges.filter(tech => projTechs.includes(tech.name));
   const badgeElements = matchingTechBadges.map(tech => (
      <img key={tech.name} alt={`${tech.name}Static Badge`} src={tech.value} />
   ));
   return badgeElements;
};

const shortenDesc = (proj) => {
   if (proj.desc.length > 250) {
      return (
         <>
            <p className="text-center text-lg">{proj.desc.substr(0,250)}...
               <a target="_blank" href={`${proj.repo}/blob/main/README.md`} className="inline border-[1px] border-slate-200 border-opacity-25 ms-3 text-sm rounded-lg px-2 py-1 hover:cursor-pointer hover:bg-stone-600 hover:bg-opacity-50 duration-500 ease-in-out select-none">View full README</a>		
            </p>
         </>
         );
   } else {
      return (
         <>
            <p className="text-center text-lg">{proj.desc}</p>
         </>
      );
   }
}

function ProjectModals(props) {

   const [ descFocus, setdescFocus ] = useState("opacity-60")
   const [ ssFocus, setssFocus ] = useState("opacity-60")
   const [ techFocus, settechFocus ] = useState("opacity-60")

   const openModalwithFocus = (button) => {
      document.getElementById("projDetails").showModal()
      switch (button) {
         case "desc":
            setdescFocus("opacity-100")
            setssFocus("opacity-60")
            settechFocus("opacity-60")
            break;
         case "screenshots":
            setdescFocus("opacity-60")
            setssFocus("opacity-100")
            settechFocus("opacity-60")
            break;
         case "techstack":
            setdescFocus("opacity-60")
            setssFocus("opacity-60")
            settechFocus("opacity-100")
            break;
         default:
            alert("Error")
            break;
      }
   }

   return (
      <>
         <button onClick={() => openModalwithFocus("desc")} className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><Text size={12} className="inline me-2"/> description</button>
         <button onClick={() => openModalwithFocus("screenshots")} className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><Image size={12} className="inline me-2"/> screenshots</button>
         <button onClick={() => openModalwithFocus("techstack")} className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><Code size={12} className="inline me-2"/> tech stack</button>
                  
         <dialog id="projDetails" className="modal bg-stone-300 bg-opacity-10 grid grid-cols-12 grid-rows-12 gap-5">
            
            <div id="desc" className={`${descFocus} col-start-2 col-span-6 row-start-2 row-span-4 modal-box max-w-full w-full h-full noise rounded-lg shadow-none`}>
               <h3 className="font-bold text-lg">{props.focusProj.title}</h3>
               <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            
            <div id="techstack" className={`${techFocus} col-start-8 col-span-2 row-start-2 row-span-4 modal-box max-w-full w-full h-full noise rounded-lg shadow-none`}>
               hello
            </div>
            
            <div id="screenshots" className={`${ssFocus} col-start-2 col-span-8 row-start-6 row-span-6 modal-box max-w-full w-full h-full noise rounded-lg shadow-none`}></div>
            
            <div id="control" className="col-start-10 col-span-2 row-start-2 row-span-10 modal-box max-w-full w-full h-full noise rounded-lg shadow-none"></div>
            
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
      //    <h2 className="font-title text-3xl lg:text-5xl tracking-wider">{props.title}</h2>
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