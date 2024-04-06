import React, { useState } from "react";
import ProjectModals from "./ProjectModals";
import ProjectList from "./ProjectList";
import projects from "../data/Projects.json";
import { FolderGit2, Globe } from 'lucide-react';

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
							<ProjectModals focusProj={focusProj}/>
							<a href={focusProj.repo} target="_blank" className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><FolderGit2 size={12} className="inline me-2"/> see repo</a>
							<a href={focusProj.deployed} target="_blank" className="font-title text-xs tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-s-lg hover:pe-20 hover:bg-stone-600 hover:bg-opacity-50 ease-in-out duration-500"><Globe size={12} className="inline me-2"/> visit site</a>
						</div>
					</div>
					<div className="flex justify-between items-center gap-5">
						<div className="bg-stone-300 bg-opacity-10 rounded-lg flex-grow self-stretch"></div>
						<img src={tertProj.img} alt={tertProj.title} className="bg-stone-300 bg-opacity-10 rounded-lg p-5 aspect-video object-cover object-top max-w-[40%] self-end" />
					</div>
				</div>
			</div>
		</>
  	)
};

export default AllProjects;