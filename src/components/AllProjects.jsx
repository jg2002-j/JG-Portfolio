import React, { useState } from "react";
import ProjectModals from "./ProjectModals";
import ProjectList from "./ProjectList";
import projects from "../data/Projects.json";
import { FolderGit2, Globe } from 'lucide-react';

function AllProjects() {
  	
	const [ focusProj, setfocusProj ] = useState(projects[0])
	const [ proj2, setproj2] = useState(projects[1])
	const [ proj3, setproj3] = useState(projects[2])
	const [ proj4, setproj4] = useState(projects[3])
	const [ proj5, setproj5] = useState(projects[4])

	const chooseProjfnct = (index) => {
		setfocusProj(projects[index])
		setproj2(projects[index+1])
		setproj3(projects[index+2])
		setproj4(projects[index+3])
		setproj5(projects[index+4])
		switch (index) {
			case (projects.length-1):
				setproj2(projects[0])
				setproj3(projects[1])
				setproj4(projects[2])
				setproj5(projects[3])
				break;
			case (projects.length-2):
				setproj3(projects[0])
				setproj4(projects[1])
				setproj5(projects[2])
				break;
			case (projects.length-3):
				setproj4(projects[projects.length-1])
				setproj5(projects[projects.length-2])
				break;
			case (projects.length-4):
				setproj5(projects[projects.length-1])
			default:
				break;
		}
		if (index+4==projects.length) {
			setproj5(projects[0])
		} else if (index+3==projects.length) {
			setproj4(projects[0])
			setproj5(projects[1])
		} else if (index+2==projects.length) {
			setproj3(projects[0])
			setproj4(projects[1])
			setproj5(projects[2])
		} else if (index+1==projects.length) {
			setproj2(projects[0])
			setproj3(projects[1])
			setproj4(projects[2])
			setproj5(projects[3])
		}
	}

	return (
		<>
			<div className="flex gap-10 justify-center items-center mb-20 h-fit">
				<ProjectList chooseProjfnct={chooseProjfnct} />
				<div className="w-[60vw] flex flex-col gap-5 transpdivt">
					<div className="flex justify-between items-center gap-5">
						<img src={proj5.desktopImgs[0]} alt={proj5.title} className="bg-stone-300 bg-opacity-10 rounded-lg p-5 aspect-video object-cover object-top max-w-[40%] self-start" />
						<div className="bg-stone-300 bg-opacity-10 rounded-lg flex-grow self-stretch flex flex-col gap-5 justify-end items-center p-5">
							<img className="w-full object-cover aspect-video rounded-lg" src={proj4.desktopImgs[0]} alt={proj4.title} />
							<img className="w-full object-cover aspect-video rounded-lg" src={proj3.desktopImgs[0]} alt={proj3.title} />
						</div>
						<img src={proj2.desktopImgs[0]} alt={proj2.title} className="bg-stone-300 bg-opacity-10 rounded-lg p-5 aspect-video object-cover object-top max-w-[40%] self-end" />
					</div>
					<div className="bg-stone-300 bg-opacity-10 rounded-lg p-5 gap-5 items-center h-[60vh] flex relative">
						
						<img src={focusProj.desktopImgs[0]} alt={focusProj.title} className="aspect-[9/6] flex-grow h-full object-cover object-left-top rounded-lg" />
						
						<div className="h-full flex flex-col justify-center items-start gap-8 p-5 bg-stone-300 bg-opacity-10 rounded-lg">
							{/* <h2 className="font-title font-bold tracking-widest text-3xl text-center p-5 bg-stone-300 bg-opacity-10 rounded-lg mb-10">{focusProj.title}</h2> */}
							<ProjectModals focusProj={focusProj}/>
							<a href={focusProj.repo} target="_blank" className="font-title text-lg tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><FolderGit2 size={20} className="inline me-5"/> see repo</a>
							<a href={focusProj.deployed} target="_blank" className="font-title text-lg tracking-widest text-end p-3 px-5 flex items-center bg-stone-300 bg-opacity-10 rounded-lg hover:bg-stone-900 hover:bg-opacity-50 ease-in-out duration-500"><Globe size={20} className="inline me-5"/> visit site</a>
						</div>

					</div>
				</div>
			</div>
		</>
  	)
};

export default AllProjects;