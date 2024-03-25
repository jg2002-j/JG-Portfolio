import React from "react";
import projects from "../data/Projects.json";

function ProjectList() {
	return (
	 	<>
			<div className="flex flex-col gap-5 w-[30vw] overflow-auto transpdivtb">
				{projects.map(project => (<h2 key={project.id} className="border-2 px-5 py-5 font-title text-2xl tracking-widest">{project.title}</h2>))}
			</div>
		</>
 	)
};

export default ProjectList;