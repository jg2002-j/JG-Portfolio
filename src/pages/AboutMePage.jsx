import React from "react";
import AboutMeBento from "../components/AboutMeBento";

function AboutMePage() {
	return (
		<div className="2xl:m-60 my-60 mx-20 max-w-full min-h-dvh flex-col justify-center" id="aboutme">
			<div className="flex flex-col 2xl:flex-row justify-center items-center min-h-[80vh]">
				<div className="h-full w-full 2xl:w-3/5">
					<h1 className="text-5xl text-slate-200 text-header pb-11 2xl:pe-[5rem] leading-[1.2]">Currently enrolled in an EdX Skills Bootcamp for front-end web development, seeking to leverage my experiences, creative outlook and technical skills in the dynamic world of front-end web development.</h1>
				</div>
				<AboutMeBento />
			</div>
			<div className="flex flex-col 2xl:flex-row justify-evenly items-center mt-10 gap-[5rem]">
				<div className="">
					<h1 className="font-header text-4xl text-slate-300 mb-3">Value 1</h1>
					<p className="text-xl text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe at quod libero facilis, modi quis officia doloremque error id ducimus ea quibusdam repellat eligendi soluta! Blanditiis suscipit eum temporibus! Cum.</p>
				</div>
				<div className="">
					<h1 className="font-header text-4xl text-slate-300 mb-3">Value 2</h1>
					<p className="text-xl text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam tempore laborum quaerat placeat. Deleniti error est, in qui assumenda dolor id praesentium accusantium atque voluptates, autem repellat excepturi inventore.</p>
				</div>
				<div className="">
					<h1 className="font-header text-4xl text-slate-300 mb-3">Value 3</h1>
					<p className="text-xl text-slate-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt, nobis tempora, animi fuga quod, mollitia expedita vitae quas dolor harum quibusdam aperiam error unde odio consectetur facere excepturi itaque!</p>
				</div>
			</div>
		</div>
  	)
};

export default AboutMePage;