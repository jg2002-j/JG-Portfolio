import React from "react";
import { MousePointerSquare, FolderGit2, Expand } from "lucide-react";

//// Must be a reusable component that ingests JSON data as props and renders a single instance for each project
// TODO: Must utilize Router props to properly render the right project based on user selection
//// Must render the following info:
   //// Project title
   //// Link to the deployed version
   //// Link to the GitHub repository
   //// GIF or screenshot of the deployed application

const techBadges = [
   {name: "HTML", value: "https://img.shields.io/badge/HTML-white?logo=html5&logoColor=%23E34F26"},
   {name: "CSS", value: "https://img.shields.io/badge/CSS-white?logo=CSS3&logoColor=%231572B6",},
   {name: "JavaScript", value: "https://img.shields.io/badge/JavaScript-white?logo=javascript&logoColor=%23F7DF1E",},
   {name: "Git", value: "https://img.shields.io/badge/Git-white?logo=git&logoColor=%23F05032",},
   {name: "GitHub", value: "https://img.shields.io/badge/GitHub-white?logo=github&logoColor=%23181717",},
   {name: "Bootstrap", value: "https://img.shields.io/badge/Bootstrap-white?logo=bootstrap&logoColor=%237952B3",},
   {name: "TailwindCSS", value: "https://img.shields.io/badge/TailwindCSS-white?logo=tailwindcss&logoColor=%2306B6D4",},
   {name: "jQuery", value: "https://img.shields.io/badge/jQuery-white?logo=jquery&logoColor=%230769AD",},
   {name: "Node.js", value: "https://img.shields.io/badge/Node.js-white?logo=nodedotjs&logoColor=%#339933",},
   {name: "React.js", value: "https://img.shields.io/badge/React.js-white?logo=react&logoColor=%2361DAFB",},
   {name: "Next.js", value: "https://img.shields.io/badge/Next.js-white?logo=next.js&logoColor=%23000000",},
]

const getBadges = (props) => {
   const projTechs = props.techs;
   const matchingTechBadges = techBadges.filter(tech => projTechs.includes(tech.name)).map(tech => tech.value);
   const badgeElements = matchingTechBadges.map(value => (
      <img key={value} alt="Static Badge" src={value} />
   ));
   return badgeElements;
};

function Project(props) {
   return (
      <div className="text-slate-200 2xl:w-1/5 2xl:hover:w-1/3 w-3/5 hover:w-4/5 ease-in-out duration-1000 rounded-lg py-12 p-3">
         <img src={props.img} alt="" className="aspect-video w-full rounded-lg" />
         <h1 className="font-header text-4xl text-slate-300 my-5">{props.title}</h1>
         <div className="flex flex-wrap justify-start items-center gap-2 mb-3">
            {getBadges(props)}
         </div>
         <p className="max-w-[40ch] mb-5">{props.desc}</p>
         <div className="grid auto-rows-[1] auto-cols-[20%_20%_20%_20%] gap-y-2">
            <a target="_blank" href={props.deployed} className="col-start-1 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/live text-center bg-[#44446c] bg-opacity-50"><MousePointerSquare className="inline-block ease-in-out duration-700" size={15} /></a>
            <div className="bg-[#1a1923] col-start-2 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/live:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">Live Site</div>
            <a target="_blank" href={props.repo} className="col-start-2 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/repo text-center bg-[#44446c] bg-opacity-50"><FolderGit2 className="inline-block ease-in-out duration-700" size={15} /></a>
            <div className="bg-[#1a1923] col-start-3 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/repo:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">GitHub Repo</div>

            <button className="col-start-3 row-start-1 col-span-1 row-span-1 border-2 rounded-full hover:rounded-r-none px-3 py-[0.125rem] ease-in-out duration-700 me-2 peer/expand text-center bg-[#44446c] bg-opacity-50"><Expand className="inline-block ease-in-out duration-700" size={15} /></button>
            <div className="bg-[#1a1923] col-start-4 row-start-1 col-span-2 row-span-1 border-2 rounded-s-none rounded-full px-3 py-[0.125rem] me-2 ease-in-out duration-700 scale-0 origin-left peer-hover/expand:scale-100 text-xs flex items-center line-clamp-1 whitespace-nowrap">See More</div>
         </div>
      </div>
   )
};

export default Project;