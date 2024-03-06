import React from "react";
import projects from "../data/Projects.json";

function ProjectModal(props) {

	let visibility = "hidden";
	let id = "";
	let title = "";
	let desc = "";
	let img = "";
	let deployed = "";
	let repo = "";
	let techs = "";

	if (props.projSelection == "none"){
		visibility = "hidden";
	} else if (props.projSelection == projects[0]){
		visibility = ""
		id = projects[0].id
		title = projects[0].title
		desc = projects[0].desc
		img = projects[0].img
		deployed = projects[0].deployed
		repo = projects[0].repo
		techs = projects[0].techs
	}

  	return (
		<div className={`${visibility} fixed top-0 left-0 h-dvh w-dvw bg-slate-50`}>
			{props.projSelection}
			{id}
			{title}
			{desc}
			{img}
			{deployed}
			{repo}
			{techs}
		</div>
  	)
};

export default ProjectModal;