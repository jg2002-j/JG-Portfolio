import React from "react";
import AboutMeBento from "../components/AboutMeBento";

function AboutMePage() {
	return (
		<div className="rounded-3xl 2xl:m-60 my-60 mx-20 max-w-full min-h-dvh border-4 border-slate-300 flex flex-col justify-center" id="aboutme">
			<div className="flex flex-col 2xl:flex-row justify-center items-center border-2 border-red-200">
				<div className="border-2 border-slate-200 h-full w-full 2xl:w-3/5">
					<h1 className="text-5xl text-slate-200 text-header p-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam voluptatibus velit quasi vitae ipsum aspernatur fugiat, deleniti ullam, quae blanditiis reiciendis deserunt eligendi? Enim nisi similique eveniet minus ullam.</h1>
				</div>
				<div className="border-2 border-green-200 2xl:w-2/5 flex flex-col justify-center items-center">
					<AboutMeBento />
				</div>
			</div>
			<div className="flex justify-center items-center border-2 border-red-200 mt-11">
				<h1 className="text-2xl text-slate-200 text-header text-center px-11 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam voluptatibus velit quasi vitae ipsum aspernatur fugiat, deleniti ullam, quae blanditiis reiciendis deserunt eligendi? Enim nisi similique eveniet minus ullam.</h1>
			</div>
		</div>
  	)
};

export default AboutMePage;