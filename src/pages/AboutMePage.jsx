import React from "react";
import AboutMeBento from "../components/AboutMeBento";

function AboutMePage() {
	return (
		<div className="rounded-3xl 2xl:m-60 my-60 mx-20 max-w-full min-h-dvh border-4 border-slate-300 flex flex-col justify-center" id="aboutme">
			<div className="flex flex-col 2xl:flex-row justify-center items-center min-h-96 border-2 border-blue-600">
				<div className="h-full w-full 2xl:w-3/5">
					<h1 className="text-5xl text-slate-200 text-header p-11">Currently enrolled in an EdX Skills Bootcamp for front-end web development, seeking to leverage my experiences, creative outlook and technical skills in the dynamic world of front-end web development.</h1>
				</div>
				<AboutMeBento />
			</div>
			<div className="flex justify-center items-center border-2 border-red-200 mt-11">
				<AboutMeBento />
				<h1 className="text-2xl text-slate-200 text-header text-center px-11 py-5">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium commodi quibusdam unde excepturi voluptate blanditiis, ipsum assumenda veniam eveniet cupiditate id ipsam dolor aperiam? Blanditiis assumenda odio veniam qui neque.
					<br /><br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A veritatis error dolores dolore temporibus, sapiente aliquam impedit! Architecto saepe ducimus debitis magnam, amet ullam officia earum exercitationem cum inventore sequi.
				</h1>
			</div>
		</div>
  	)
};

export default AboutMePage;