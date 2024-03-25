import React from "react";
import Project from "./Project";
import projects from "../data/Projects.json";

function AllProjects(props) {
  	return (
	 	<>
         <div className="flex flex-col lg:flex-row overflow-auto gap-x-10 mx-5 transpdiv">
            {projects.map(projItem => (
               <Project 
						enlargefunction={props.enlargefunction}
						key={projItem.id} 
						title={projItem.title}
						tags={projItem.tags}
						desc={projItem.desc} 
						img={projItem.img} 
						deployed={projItem.deployed} 
						repo={projItem.repo} 
						techs={projItem.techs} 
						peer={projItem.id}/>
            ))} 
         </div>
		</>
  	)
};

export default AllProjects;