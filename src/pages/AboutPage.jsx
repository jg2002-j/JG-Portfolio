import React from "react";

import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";

function AboutPage() {
	return (
		<>
			<div className="2xl:mx-60 m-20 flex flex-col justify-start items-center" id="projects">
            <h1 className="font-title tracking-[0.7rem] text-5xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">About Me</h1>
         </div>
			<AboutMe />
			<Experience />
		</>
  	)
};

export default AboutPage;