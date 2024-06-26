import React, { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectFocus from "./ProjectFocus";
import BackgroundTexture from "../assets/bgTextures/BackgroundTexture";
import projects from "../data/Projects";
import { StepForward } from "lucide-react";

function AllProjects() {
  	
	// States
	const [ focusProj, setfocusProj ] = useState(projects[0])

	// Constants
	const projsLength = projects.length

	// Functions
	const chooseProjfnct = (index) => {
		setfocusProj(projects[index])
	}

	const currentProj = projects.findIndex(proj => proj.id == focusProj.id)

	return (
		<>
			<div className="drawer text-stone-400">
				<input id="chooseprojdrawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content w-screen flex">
					<div className="w-full h-dvh mx-auto relative overflow-hidden pt-20 bg-stone-900 bg-opacity-75 noise flex">
						<BackgroundTexture />
						<label htmlFor="chooseprojdrawer" className="hidden lg:flex h-full w-[5%] min-w-24 drawer-button cursor-pointer bg-stone-300 bg-opacity-10 rounded-e-lg items-center justify-center p-8 hover:bg-stone-400 hover:bg-opacity-30 duration-1000">
							<StepForward className="h-full w-full"/>
						</label>
						<ProjectFocus focusProj={focusProj} currentProj={currentProj} projsLength={projsLength} chooseProjfnct={chooseProjfnct}/>
					</div>
				</div> 
				<div className="drawer-side z-50">
					<label htmlFor="chooseprojdrawer" aria-label="close sidebar" className="drawer-overlay bg-stone-300 bg-opacity-10 noise"></label>
					<ProjectList chooseProjfnct={chooseProjfnct} />
				</div>
			</div>	
		</>
  	)
};

export default AllProjects;