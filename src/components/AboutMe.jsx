import React from "react";
import AboutMeBento from "./AboutMeBento";
import Skills from "./Skills";
import { Github, Linkedin, FileHeart } from "lucide-react";
import links from "../data/Links.json";

function AboutMe() {
  	return (
	 	<>
			<div className="2xl:mx-60 m-20 max-w-full min-h-dvh flex-col justify-center" id="aboutme">
				<div className="flex flex-col 2xl:flex-row justify-center items-center min-h-[80vh]">
					<div className="h-full w-full 2xl:w-3/5 flex flex-col justify-center items-start">
						<h1 className="text-5xl text-slate-200 text-header pb-11 2xl:pe-[5rem] leading-[1.2]">Having finished an EdX Skills Bootcamp for front-end web development, I'm now seeking to leverage my experiences, creative outlook and technical skills in the dynamic world of front-end web development.</h1>
						<div className="flex flex-col md:flex-row justify-start items-start md:items-center min-w-[50%] gap-x-6">
							<a target="_blank" href={links[0].link}
								className="px-5 py-2 bg-slate-400 bg-opacity-5 rounded-lg duration-700 hover:bg-opacity-40 hover:px-7 group"
							>
								<Github className="inline me-3" size={15} color="#A8A29E" />
								<span className="font-title tracking-widest uppercase text-stone-400 group-hover:text-stone-200 duration-700">GitHub</span>
							</a>
							<a target="_blank" href={links[1].link} 
								className="px-5 py-2 bg-slate-400 bg-opacity-5 rounded-lg duration-700 hover:bg-opacity-40 hover:px-7 group"
							>
								<Linkedin className="inline me-3" size={15} color="#A8A29E" />
								<span className="font-title tracking-widest uppercase text-stone-400 group-hover:text-stone-200 duration-700">LinkedIn</span>
							</a>
							<a target="_blank" href={links[2].link} 
								className="px-5 py-2 bg-slate-400 bg-opacity-5 rounded-lg duration-700 hover:bg-opacity-40 hover:px-7 group"
							>
								<FileHeart className="inline me-3" size={15} color="#A8A29E" />
								<span className="font-title tracking-widest uppercase text-stone-400 group-hover:text-stone-200 duration-700">CV</span>
							</a>
						</div>
					</div>
					<AboutMeBento />
				</div>
			<Skills />
			</div>
	 	</>
  	)
};

export default AboutMe;