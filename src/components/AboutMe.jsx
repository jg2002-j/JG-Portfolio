import React from "react";
import AboutMeBento from "./AboutMeBento";
import Skills from "./Skills";
import SmSocialLinks from "./SmSocialLinks";

function AboutMe() {
  	return (
	 	<>
			<div className="2xl:mx-60 m-20 max-w-full min-h-dvh flex-col justify-center" id="aboutme">
				<div className="flex flex-col 2xl:flex-row justify-center items-center min-h-[80vh]">
					<div className="h-full w-full 2xl:w-3/5 flex flex-col justify-center items-start">
						<h1 className="text-5xl text-slate-200 text-header 2xl:pe-[5rem] leading-[1.2]">Having finished an EdX Skills Bootcamp for front-end web development, I'm now seeking to leverage my experiences, creative outlook and technical skills in the dynamic world of front-end web development.</h1>
						<SmSocialLinks/>
					</div>
					<AboutMeBento />
				</div>
			<Skills />
			</div>
	 	</>
  	)
};

export default AboutMe;