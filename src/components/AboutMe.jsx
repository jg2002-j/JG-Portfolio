import React from "react";
import BackgroundTexture from "../assets/bgTextures/BackgroundTexture";
import projects from "../data/Projects";
import { NavLink } from "react-router-dom";


function AboutMe() {
  	return (
	 	<>
			<div className="flex flex-col gap-5 lg:gap-10 justify-center items-center min-h-dvh rounded-lg pt-24 p-10 lg:p-20 w-full relative bg-stone-900 bg-opacity-75 noise overflow-hidden">
				<BackgroundTexture />
				<div className="w-full lg:max-w-[80%] p-10 py-20 bg-stone-300 bg-opacity-10 rounded-lg text-stone-400 hover:text-stone-300 hover:bg-stone-400 hover:bg-opacity-20 duration-1000">
					<h3 className="text-4xl mb-5 font-header leading-none tracking-wider">About Me</h3>
					<div className="collapse collapse-plus">
						<input type="checkbox" /> 
						<div className="collapse-title">
							<span className="max-w-prose lg:text-3xl font-medium">I'm a front-end web developer who wants to bring my past experience, a creative outlook and technical skills to excel in the world of web design.</span>
						</div>
						<div className="collapse-content lg:columns-3 text-xs lg:text-md"> 
							<p className="text-pretty mb-5">Having completed an EdX Skills Bootcamp for front-end web development with a grade of 97.65%, I'm now seeking to leverage <span className="inline font-bold text-stone-400">my past experience, a creative outlook and technical skills</span> in the dynamic world of front-end web development.</p>
							<p className="text-pretty mb-5">I originally explored BSc Architecture at the University of Edinburgh for a year, but I discovered that I instead wanted to carry certain principles from this field into something more suited to my personality. I thrive in the user-centric design principles both front-end web development and architecture have in common: design for a purpose is something I feel passionate about and confident in. The creative potential of architecture also carried through into my interest in web development – creating an end product that is simultaneously aesthetic and functional is something I aspire to master.</p>
							<p className="text-pretty mb-5">Working in the EdX Bootcamp has also gained me an appreciation for the collaboration and communication needed in the front-end web development field. Two group projects, both of which I found enjoyable and successful, highlighted the importance of teamwork – a skill I continue to develop at my current role at Brigstock Medical Practice too.</p>
							<p className="text-pretty mb-5">The iterative design process of architecture originally appealed to me, and I found my niche in that element within web development. I enjoy refining my work and improving upon areas once I learn new technologies, libraries, frameworks or just skillsets – I strive to put my all into a project while taking into consideration the time/budget/etc. constraints that may be present too. The ability to constantly learn more is something that has also been a core aspect of the field for me – keeping up to date with developing technologies is a worthwhile challenge I’m keen to take on.</p>
							<p className="text-pretty">I plan to pursue a junior role or apprenticeship within the field, having some hands-on experience in the field will allow me to pinpoint the areas I need to develop, and give me an accurate picture of the industry while being able to learn from those who are more experienced than me. I look forward to working with an engaging and lively team, and being able to contribute what I can and learn the rest!</p>
						</div>
					</div>
				</div>
				<div className="w-full lg:max-w-[80%] flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center">
					<div className="w-full bg-stone-300 bg-opacity-10 rounded-lg p-10 text-stone-400 hover:text-stone-300 hover:bg-stone-400 hover:bg-opacity-20 duration-1000">
						<div className="flex items-center gap-3 mb-5">
							<h3 className="font-header leading-none tracking-wider">Experience</h3>
							<div className="border-b-[1px] flex-grow"></div>
						</div>
						<NavLink to="/projects" className="text-2xl lg:text-[1.5vw]">{projects.length} Projects.</NavLink>
					</div>
					<div className="w-full bg-stone-300 bg-opacity-10 rounded-lg p-10 text-stone-400 hover:text-stone-300 hover:bg-stone-400 hover:bg-opacity-20 duration-1000">
						<div className="flex items-center gap-3 mb-5">
							<h3 className="font-header leading-none tracking-wider">Location</h3>
							<div className="border-b-[1px] flex-grow"></div>
						</div>
						<p className="text-2xl lg:text-[1.5vw]">London, United Kingdom.</p>
					</div>
					<div className="w-full bg-stone-300 bg-opacity-10 rounded-lg p-10 text-stone-400 hover:text-stone-300 hover:bg-stone-400 hover:bg-opacity-20 duration-1000">
						<div className="flex items-center gap-3 mb-5">
							<h3 className="font-header leading-none tracking-wider">Favourite Tech</h3>
							<div className="border-b-[1px] flex-grow"></div>
						</div>
						<a href="#skills" className="text-2xl lg:text-[1.5vw]">React.js</a>
					</div>
				</div>
			</div>
	 	</>
  	)
};

export default AboutMe;