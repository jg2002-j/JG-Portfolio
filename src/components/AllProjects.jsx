import React, { useState } from "react";

import ProjectList from "./ProjectList";
import ProjectFocus from "./ProjectFocus";

import projects from "../data/Projects.json";

import bgTextures from "../assets/bgTextures/bgTextures";

function AllProjects() {
  	
	const bgTexture = bgTextures[Math.floor(Math.random()*(bgTextures.length))]

	const [ focusProj, setfocusProj ] = useState(projects[0])
	// const [ proj2, setproj2] = useState(projects[1])
	// const [ proj3, setproj3] = useState(projects[2])
	// const [ proj4, setproj4] = useState(projects[3])
	// const [ proj5, setproj5] = useState(projects[4])

	const chooseProjfnct = (index) => {
		setfocusProj(projects[index])
		// setproj2(projects[index+1])
		// setproj3(projects[index+2])
		// setproj4(projects[index+3])
		// setproj5(projects[index+4])
		// switch (index) {
		// 	case (projects.length-1):
		// 		setproj2(projects[0])
		// 		setproj3(projects[1])
		// 		setproj4(projects[2])
		// 		setproj5(projects[3])
		// 		break;
		// 	case (projects.length-2):
		// 		setproj3(projects[0])
		// 		setproj4(projects[1])
		// 		setproj5(projects[2])
		// 		break;
		// 	case (projects.length-3):
		// 		setproj4(projects[projects.length-1])
		// 		setproj5(projects[projects.length-2])
		// 		break;
		// 	case (projects.length-4):
		// 		setproj5(projects[projects.length-1])
		// 	default:
		// 		break;
		// }
		// if (index+4==projects.length) {
		// 	setproj5(projects[0])
		// } else if (index+3==projects.length) {
		// 	setproj4(projects[0])
		// 	setproj5(projects[1])
		// } else if (index+2==projects.length) {
		// 	setproj3(projects[0])
		// 	setproj4(projects[1])
		// 	setproj5(projects[2])
		// } else if (index+1==projects.length) {
		// 	setproj2(projects[0])
		// 	setproj3(projects[1])
		// 	setproj4(projects[2])
		// 	setproj5(projects[3])
		// }
	}

	return (
		<>
			<div className="flex">
				<ProjectList chooseProjfnct={chooseProjfnct} />
				<div className="w-full min-h-dvh mx-auto relative rounded-lg overflow-auto py-10 bg-stone-900 bg-opacity-75 noise">
					<img className="absolute -z-10 left-0 top-0 h-full w-full object-cover blur-2xl" src={bgTexture} alt="Background texture" />
					<ProjectFocus focusProj={focusProj} />
				</div>
			</div>
		</>
  	)
};

export default AllProjects;