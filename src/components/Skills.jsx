import React from "react";
import skillslist from "../data/Skills.json";

function Skills() {
  	return (
	 	<>
			<div className="flex flex-col 2xl:flex-row justify-evenly items-center mt-10 mb-40 gap-[5rem]">
				{skillslist.map(skill => (
					<div key={skill.id}>
						<h1 className="font-header text-4xl text-slate-300 mb-3">{skill.title}</h1>
						<p className="text-xl text-slate-200">{skill.body}</p>
					</div>
				))}
			</div>
	 	</>
  	)
};

export default Skills;