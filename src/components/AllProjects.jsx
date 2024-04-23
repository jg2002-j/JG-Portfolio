import React, { useState } from "react";

import ProjectList from "./ProjectList";
import ProjectFocus from "./ProjectFocus";

import projects from "../data/Projects";

import bgTextures from "../assets/bgTextures/bgTextures";
import { StepForward } from "lucide-react";

function AllProjects() {
  	
	const bgTexture = bgTextures[Math.floor(Math.random()*(bgTextures.length))]

	const [ focusProj, setfocusProj ] = useState(projects[0])

	const chooseProjfnct = (index) => {
		setfocusProj(projects[index])
	}

	return (
		<>
			<div className="drawer text-stone-400">
				<input id="chooseprojdrawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content w-screen flex">
					<div className="w-full h-dvh mx-auto relative overflow-hidden pt-16 bg-stone-900 bg-opacity-75 noise flex">
						<img className="absolute -z-10 left-0 top-0 h-full w-full object-cover blur-2xl" src={bgTexture} alt="Background texture" />
						<label htmlFor="chooseprojdrawer" className="h-full w-[5%] min-w-24 drawer-button cursor-pointer bg-stone-300 bg-opacity-10 rounded-e-lg flex items-center justify-center p-8 hover:bg-stone-400 hover:bg-opacity-30 duration-1000">
							<StepForward className="h-full w-full"/>
						</label>
						<ProjectFocus focusProj={focusProj} />
					</div>
				</div> 
				<div className="drawer-side">
					<label htmlFor="chooseprojdrawer" aria-label="close sidebar" className="drawer-overlay bg-stone-300 bg-opacity-10 noise"></label>
					<ProjectList chooseProjfnct={chooseProjfnct} />
				</div>
			</div>
		</>
  	)
};

export default AllProjects;