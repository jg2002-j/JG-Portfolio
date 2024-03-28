import React from "react";
import Project from "./Project";
import ProjectList from "./ProjectList";
import projects from "../data/Projects.json";

function AllProjects(props) {
  	return (

		<>
			<div className="flex gap-10 justify-center">
				<ProjectList chooseProjfnct={props.chooseProjfnct} />
				<div className="grid grid-cols-12 grid-rows-12 border-2 w-[60vw] bg-red-200"></div>
			</div>		
		</>

		
	 	// <>
      //    <div className="flex flex-col lg:flex-row overflow-auto gap-x-10 mx-5 transpdiv">
      //       {projects.map(projItem => (
      //          <Project 
		// 				enlargefunction={props.enlargefunction}
		// 				key={projItem.id} 
		// 				title={projItem.title}
		// 				tags={projItem.tags}
		// 				desc={projItem.desc} 
		// 				img={projItem.img} 
		// 				deployed={projItem.deployed} 
		// 				repo={projItem.repo} 
		// 				techs={projItem.techs} 
		// 				peer={projItem.id}/>
      //       ))} 
      //    </div>
		// </>
  	)
};

export default AllProjects;