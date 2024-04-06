import React, { useState } from "react";
import techBadges from "../data/TechBadges.json";
import ProjectList from "./ProjectList";
import projects from "../data/Projects.json";
import { Text, Image, Code, FolderGit2, Globe } from 'lucide-react';

function AllProjects() {
  	
	const [ focusProj, setfocusProj ] = useState(projects[1])
	const [ secProj, setSecProj] = useState(projects[0])
	const [ tertProj, setTertProj] = useState(projects[2])

	const chooseProjfnct = (index) => {
		setfocusProj(projects[index])
		if (index == 0){
			setSecProj(projects[projects.length-1])
		} else {
			setSecProj(projects[index-1])
		}
		if (index == (projects.length-1)){
			setTertProj(projects[0])
		} else {
			setTertProj(projects[index+1])
		}
	}
	
   const getBadges = (proj) => {
      const projTechs = proj.techs;
      const matchingTechBadges = techBadges.filter(tech => projTechs.includes(tech.name)).map(tech => tech.value);
      const badgeElements = matchingTechBadges.map(value => (
         <img key={value} alt={value} src={value} />
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

	return (
		<>
			<div className="flex gap-10 justify-center items-center">
				<ProjectList chooseProjfnct={chooseProjfnct} />
				<div className="w-[60vw] flex flex-col gap-5 transpdivtb">
					<div className="flex justify-between items-center gap-5">
						<img src={secProj.img} alt={secProj.title} className="bg-stone-300 bg-opacity-10 rounded-lg p-5 aspect-video object-cover object-top max-w-[40%] self-start" />
						<div className="bg-stone-300 bg-opacity-10 rounded-lg flex-grow self-stretch"></div>
					</div>
					<div className="bg-stone-300 bg-opacity-10 rounded-lg p-5 pe-0 gap-5 flex justify-between items-start relative">
						<img src={focusProj.img} alt={focusProj.title} className="aspect-video object-cover object-top max-w-[70%] rounded-lg" />
						<div className="flex flex-col justify-center items-end gap-5">
							<h2 className="font-title font-bold tracking-widest text-3xl text-end p-5 bg-stone-300 bg-opacity-10 rounded-s-lg mb-10">{focusProj.title}</h2>
							<a href="http://" target="_blank" className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><Text size={12} className="inline me-2"/> description</a>
							<a href="http://" target="_blank" className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><Image size={12} className="inline me-2"/> screenshots</a>
							<a href="http://" target="_blank" className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><Code size={12} className="inline me-2"/> tech stack</a>
							<a href={focusProj.repo} target="_blank" className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><FolderGit2 size={12} className="inline me-2"/> see repo</a>
							<a href={focusProj.deployed} target="_blank" className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><Globe size={12} className="inline me-2"/> visit site</a>
						</div>
					</div>
					<div className="flex justify-between items-center gap-5">
						<div className="bg-stone-300 bg-opacity-10 rounded-lg flex-grow self-stretch"></div>
						<img src={tertProj.img} alt={tertProj.title} className="bg-stone-300 bg-opacity-10 rounded-lg p-5 aspect-video object-cover object-top max-w-[40%] self-end" />
					</div>
				</div>

				{/* <div className="grid grid-cols-12 grid-rows-12 w-[60vw] transpdivlr">
					<div className="col-start-1 row-start-1 row-span-2 col-span-2 flex flex-col justify-center items-center rounded-md overflow-hidden">
						<img src={secProj.img} className="aspect-video object-cover rounded-md"></img>
						<h2 className="text-xs font-title tracking-widest my-2 whitespace-nowrap">{secProj.title}</h2>
					</div>
					<div className="col-start-4 row-start-3 row-span-5 col-span-5 flex flex-col justify-center items-center rounded-md overflow-hidden scale-125">
						<img src={focusProj.img} className="aspect-video object-cover object-left rounded-md"></img>
						<h2 className="text-2xl font-title tracking-widest mt-5">{focusProj.title}</h2>
					</div>
					<div className="col-start-4 row-start-9 col-span-5 row-span-3 flex flex-col gap-5 justify-start items-center rounded-md overflow-hidden">
						<div className="flex flex-wrap gap-2 justify-center items-center">
							{getBadges(focusProj)}
						</div>
						{shortenDesc(focusProj)}
					</div>
					<div className="col-start-10 row-start-7 col-span-3 row-span-3 flex flex-col justify-center items-center rounded-md overflow-hidden">
						<img src={tertProj.img} className="aspect-video object-cover rounded-md"></img>
						<h2 className="text-xs font-title tracking-widest my-2 whitespace-nowrap">{tertProj.title}</h2>
					</div>
				</div> */}
			</div>		
		</>
  	)
};

export default AllProjects;