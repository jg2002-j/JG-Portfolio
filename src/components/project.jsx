import React from "react";
import { MousePointerSquare, FolderGit2 } from "lucide-react";

//// Must be a reusable component that ingests JSON data as props and renders a single instance for each project
// TODO: Must utilize Router props to properly render the right project based on user selection
//// Must render the following info:
   //// Project title
   //// Link to the deployed version
   //// Link to the GitHub repository
   //// GIF or screenshot of the deployed application

const techBadges = [
   {name: "HTML", value: `![HTML Badge](https://img.shields.io/badge/HTML-white?logo=html5&logoColor=%23E34F26")`,},
   {name: "CSS", value: `![CSS Badge](https://img.shields.io/badge/CSS-white?logo=CSS3&logoColor=%231572B6)`,},
   {name: "JavaScript", value: `![JS Badge](https://img.shields.io/badge/JavaScript-white?logo=javascript&logoColor=%23F7DF1E)`,},
   {name: "Git", value: `![Git Badge](https://img.shields.io/badge/Git-white?logo=git&logoColor=%23F05032)`,},
   {name: "GitHub", value: `![GitHub Badge](https://img.shields.io/badge/GitHub-white?logo=github&logoColor=%23181717)`,},
   {name: "Bootstrap", value: `![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-white?logo=bootstrap&logoColor=%237952B3)`,},
   {name: "jQuery", value: `![jQuery Badge](https://img.shields.io/badge/jQuery-white?logo=jquery&logoColor=%230769AD)`,},
   {name: "Node.js", value: `![Node.js Badge](https://img.shields.io/badge/Node.js-white?logo=nodedotjs&logoColor=%#339933)`,},
   {name: "Next.js", value: `![Next.js Badge](https://img.shields.io/badge/Next.js-white?logo=next.js&logoColor=%23000000)`,},
   {name: "React.js", value: `![React.js Badge](https://img.shields.io/badge/React.js-white?logo=react&logoColor=%2361DAFB)`,},
]

function Project(props) {
   let techs = props.techs;
   return (
	   <div className="text-slate-200 hover:bg-[#1a1923] hover:p-4 hover:scale-150 hover:z-20 ease-in-out duration-1000 overflow-hidden">
         <img className="aspect-video w-full border-2 rounded mb-10" src={props.img} alt={props.name} />
         <h1 className="font-header text-4xl text-slate-300 mb-5">{props.title}</h1>
         <div className="flex justify-start items-center mb-3 flex-nowrap overflow-x-auto">
            {techs.map(tech => (
               <span className="border-2 border-opacity-50 border-stone-200 rounded-md px-2 py-1 me-2 text-xs">{tech}</span>
            ))}
         </div>
         <p className="max-w-[40ch] mb-5">{props.desc}</p>
         <div className="grid auto-rows-[1] auto-cols-[25%_25%_25%_25%] gap-y-2">
            <a target="_blank" href={props.deployed} className="col-start-1 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/live text-center bg-[#44446c] bg-opacity-50"><MousePointerSquare className="inline-block ease-in-out duration-700" size={15} /></a>
            <div className="bg-[#1a1923] col-start-2 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/live:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">Live Site</div>
            <a target="_blank" href={props.deployed} className="col-start-2 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/repo text-center bg-[#44446c] bg-opacity-50"><FolderGit2 className="inline-block ease-in-out duration-700" size={15} /></a>
            <div className="bg-[#1a1923] col-start-3 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/repo:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">GitHub Repo</div>
         </div>
      </div>
   )
};

export default Project;