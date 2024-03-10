import React from "react";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import projects from "../data/Projects.json";

function AllProjects(props) {
  	return (
	 	<>
         <div className="flex flex-col 2xl:flex-row flex-wrap justify-center rounded-lg mx-5 2xl:m-40 gap-5">
            {projects.map(projItem => (
               <Project 
						enlargefunction={props.enlargefunction}
						key={projItem.id} 
						title={projItem.title} 
						desc={projItem.desc} 
						img={projItem.img} 
						deployed={projItem.deployed} 
						repo={projItem.repo} 
						techs={projItem.techs} 
						peer={projItem.id}/>
            ))} 
         </div>
			<ProjectModal /> 
		</>
  	)
};

export default AllProjects;