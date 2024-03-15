import React from "react";
import skillslist from "../data/Skills.json";

function Skills() {
  	return (
	 	<>
			<div className="flex flex-col 2xl:flex-row justify-center items-start mt-10 mb-40 gap-[5rem]">
				{skillslist.map(skill => (
					<div className="2xl:w-1/5 w-4/5">
						<h1 className="font-header text-4xl text-slate-300 mb-9">{skill.title}</h1>
						{skill.body.map(item => (
							<div className="rounded-lg bg-slate-300 bg-opacity-10 px-3 py-1 my-2 hover:bg-opacity-30 duration-500">
								<img className="inline-block me-2" height="15" width="15" src={`https://cdn.simpleicons.org/${item.slug}/.svg`} />
								<span key={item.slug}>{item.name}</span>
							</div>
						))}
					</div>
				))}
			</div>
	 	</>
  	)
};

export default Skills;