import React from "react";
import { MousePointerSquare, FolderGit2, Expand, ChevronsRight } from "lucide-react";
import techBadges from "../data/TechBadges.json";

const getBadges = (props) => {
   const projTechs = props.techs;
   const matchingTechBadges = techBadges.filter(tech => projTechs.includes(tech.name));
   const badgeElements = matchingTechBadges.map(tech => (
      <img key={tech.name} alt={`${tech.name}Static Badge`} src={tech.value} />
   ));
   return badgeElements;
};

function shortenDesc(props) {
   let originalDesc = props.desc;
   if (originalDesc.length > 100) {
      return originalDesc.substr(0,100) + "...";
   } else {
      return originalDesc;
   }
}

function Project(props) {
   return (

      <div className="w-[40%] flex flex-col gap-5 m-5">
         <div className="min-h-60 rounded-3xl overflow-hidden">
            <img src={props.img} className="aspect-video w-full object-cover" />
         </div>
         <div className="flex flex-wrap justify-start items-center gap-2 my-2">
            {props.tags.map(tag => (<span key={tag} className="py-1 px-3 border-[1px] border-slate-600 text-xs text-slate-300 uppercase tracking-widest rounded-3xl select-none">{tag}</span>))}
         </div>
         <h2 className="font-title text-5xl tracking-wider">{props.title}</h2>
         <div className="flex flex-wrap justify-start items-center gap-2">
            {getBadges(props)}
         </div>
         <div className="flex gap-x-5">
            <a target="_blank" href={props.deployed} className="rounded-3xl border-[1px] border-slate-600 py-1 flex items-center justify-center bg-slate-600 hover:bg-transparent group duration-700 ease-in-out">
               <span className="ms-9 me-2 group-hover:ms-5 duration-700 font-header group-hover:text-slate-200 text-xs">Visit Website</span>
               <MousePointerSquare size={12} className="inline ms-0 me-4 group-hover:ms-4 duration-700 text-slate-600 group-hover:text-slate-200" />
            </a>
            <a target="_blank" href={props.repo} className="rounded-3xl border-[1px] border-slate-600 py-1 flex items-center justify-center bg-slate-600 hover:bg-transparent group duration-700 ease-in-out">
               <span className="ms-9 me-2 group-hover:ms-5 duration-700 font-header group-hover:text-slate-200 text-xs">GitHub</span>
               <FolderGit2 size={12} className="inline ms-0 me-4 group-hover:ms-4 duration-700 text-slate-600 group-hover:text-slate-200" />
            </a>
            <button onClick={() => {props.enlargefunction(props)}} className="rounded-3xl border-[1px] border-slate-600 py-1 flex items-center justify-center bg-slate-600 hover:bg-transparent group duration-700 ease-in-out">
               <Expand size={12} className="ms-9 me-9 duration-700group-hover:text-slate-200 text-xs" />
            </button>
         </div>
      </div>


      // <div className="text-slate-200 2xl:w-1/5 2xl:hover:w-1/3 w-3/5 hover:w-4/5 ease-in-out duration-1000 rounded-lg py-12 p-3">
      //    <img src={props.img} alt="" className="aspect-video w-full rounded-lg object-cover" />
      //    <h1 className="font-header text-4xl text-slate-300 my-5">{props.title}</h1>
      //    <div className="flex flex-wrap justify-start items-center gap-2 my-2">
      //       {props.tags.map(tag => (<span key={tag} className="py-1 px-2 border-2 border-slate-600 text-xs text-slate-300 uppercase tracking-widest rounded-lg select-none">{tag}</span>))}
      //    </div>
      //    <div className="flex flex-wrap justify-start items-center gap-2 my-5">
      //       {getBadges(props)}
      //    </div>
      //    <p className="max-w-[40ch] mb-5">{shortenDesc(props)}</p>
      //    <div className="grid auto-rows-[1] auto-cols-[20%_20%_20%_20%] gap-y-2">
      //       <a target="_blank" href={props.deployed} className="col-start-1 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/live text-center bg-[#44446c] bg-opacity-50"><MousePointerSquare className="inline-block ease-in-out duration-700" size={15} /></a>
      //       <div className="bg-[#1a1923] col-start-2 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/live:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">Live Site</div>
      //       <a target="_blank" href={props.repo} className="col-start-2 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/repo text-center bg-[#44446c] bg-opacity-50"><FolderGit2 className="inline-block ease-in-out duration-700" size={15} /></a>
      //       <div className="bg-[#1a1923] col-start-3 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/repo:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">GitHub Repo</div>
      //       <button onClick={() => {props.enlargefunction(props)}} className="col-start-3 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/expand text-center bg-[#44446c] bg-opacity-50"><Expand className="inline-block ease-in-out duration-700" size={15} /></button>
      //       <div className="bg-[#1a1923] col-start-4 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/expand:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">See More</div>
      //    </div>
      // </div>
   )
};

export default Project;