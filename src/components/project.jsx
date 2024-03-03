import React from "react";
import { MousePointerSquare, FolderGit2 } from "lucide-react";

//// Must be a reusable component that ingests JSON data as props and renders a single instance for each project
// TODO: Must utilize Router props to properly render the right project based on user selection
//// Must render the following info:
   //// Project title
   //// Link to the deployed version
   //// Link to the GitHub repository
   //// GIF or screenshot of the deployed application

function Project(props) {
   let techs = props.techs;
   return (
	   <div className="text-slate-200 hover:bg-[#1a1923] hover:p-4 hover:scale-110 hover:z-20 ease-in-out duration-700 overflow-hidden pb-20">
         <img className="aspect-video w-full border-2 rounded mb-10" src={props.img} alt={props.name} />
         <h1 className="font-header text-4xl text-slate-300 mb-5">{props.title}</h1>
         <div className="flex justify-start items-center mb-3 flex-nowrap overflow-x-auto">
            {techs.map(tech => (
               <span className="border-2 border-opacity-50 border-stone-200 rounded-md px-4 py-[0.5] me-2 text-xs">{tech}</span>
            ))}
         </div>
         <p className="max-w-[40ch] mb-5">{props.desc}</p>
         <div className="grid auto-rows-[1] auto-cols-[25%_25%_25%_25%] gap-y-2">
            <a target="_blank" href={props.deployed} className="col-start-1 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.5] ease-in-out duration-700 me-2 peer/live text-center bg-[#44446c] bg-opacity-50"><MousePointerSquare className="inline-block ease-in-out duration-700" size={15} /></a>
            <div className="bg-[#1a1923] col-start-2 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.5] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/live:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">Live Site</div>
            <a target="_blank" href={props.deployed} className="col-start-2 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.5] ease-in-out duration-700 me-2 peer/repo text-center bg-[#44446c] bg-opacity-50"><FolderGit2 className="inline-block ease-in-out duration-700" size={15} /></a>
            <div className="bg-[#1a1923] col-start-3 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.5] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/repo:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">GitHub Repo</div>
         </div>


      </div>
   )
};

export default Project;