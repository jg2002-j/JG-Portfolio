import React from "react";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import projects from "../data/Projects.json";

function AllProjects() {
  	return (
	 	<>
         <div className="flex flex-col 2xl:flex-row justify-center items-center rounded-lg mx-5 2xl:m-40">
            {projects.map(projItem => (
               <Project key={projItem.id} title={projItem.title} desc={projItem.desc} img={projItem.img} deployed={projItem.deployed} repo={projItem.repo} techs={projItem.techs} peer={projItem.id}/>
            ))} 
         </div>
			<ProjectModal /> 
		</>
  	)
};

export default AllProjects;