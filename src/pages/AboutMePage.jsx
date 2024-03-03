import React from "react";
import AboutMeBento from "../components/AboutMeBento";
import { Github, Linkedin, FileHeart } from "lucide-react";

function AboutMePage() {
	return (
		<div className="2xl:m-60 my-60 mx-20 max-w-full min-h-dvh flex-col justify-center" id="aboutme">
			<div className="flex flex-col 2xl:flex-row justify-center items-center min-h-[80vh]">
				<div className="h-full w-full 2xl:w-3/5 flex flex-col justify-center items-start">
					<h1 className="text-5xl text-slate-200 text-header pb-11 2xl:pe-[5rem] leading-[1.2]">Currently enrolled in an EdX Skills Bootcamp for front-end web development, seeking to leverage my experiences, creative outlook and technical skills in the dynamic world of front-end web development.</h1>
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center min-w-[50%]">
						<a target="_blank" href="https://github.com/jg2002-j" className="px-7 py-2 me-10 mb-5 border-2 border-[#9ca4ac] rounded-xl bg-opacity-35 bg-[#44446c] hover:bg-gradient-to-r from-[#44446c] to-[#5f293b] hover:scale-110 ease-in-out duration-700">
							<Github className="inline me-3" size={20} strokeWidth={1} color="#f1f5f9" />
							<span className="mix-blend-difference uppercase tracking-widest text-slate-100">GitHub</span>
						</a>
						<a target="_blank" href="https://www.linkedin.com/in/jg2002/" className="px-7 py-2 me-10 mb-5 border-2 border-[#9ca4ac] rounded-xl bg-opacity-35 bg-[#44446c] hover:bg-gradient-to-r from-[#44446c] to-[#5f293b] hover:scale-110 ease-in-out duration-700">
							<Linkedin className="inline me-3" size={20} strokeWidth={1} color="#f1f5f9" />
							<span className="mix-blend-difference uppercase tracking-widest text-slate-100">LinkedIn</span>
						</a>
						<a target="_blank" href="https://www.dropbox.com/scl/fi/4gv9z3xob5t5hgwjfhzqv/JaiGandhiCV.pdf?rlkey=xpm08pgyqphs5p70iy16c6e6r&dl=0" className="px-7 py-2 me-10 mb-5 border-2 border-[#9ca4ac] rounded-xl bg-opacity-35 bg-[#44446c] hover:bg-gradient-to-r from-[#44446c] to-[#5f293b] hover:scale-110 ease-in-out duration-700">
							<FileHeart className="inline me-3" size={20} strokeWidth={1} color="#f1f5f9" />
							<span className="mix-blend-difference uppercase tracking-widest text-slate-100">CV</span>
						</a>
					</div>
				</div>
				<AboutMeBento />
			</div>
			<div className="flex flex-col 2xl:flex-row justify-evenly items-center mt-10 gap-[5rem]">
				<div>
					<h1 className="font-header text-4xl text-slate-300 mb-3">Value 1</h1>
					<p className="text-xl text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe at quod libero facilis, modi quis officia doloremque error id ducimus ea quibusdam repellat eligendi soluta! Blanditiis suscipit eum temporibus! Cum.</p>
				</div>
				<div>
					<h1 className="font-header text-4xl text-slate-300 mb-3">Value 2</h1>
					<p className="text-xl text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam tempore laborum quaerat placeat. Deleniti error est, in qui assumenda dolor id praesentium accusantium atque voluptates, autem repellat excepturi inventore.</p>
				</div>
				<div>
					<h1 className="font-header text-4xl text-slate-300 mb-3">Value 3</h1>
					<p className="text-xl text-slate-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt, nobis tempora, animi fuga quod, mollitia expedita vitae quas dolor harum quibusdam aperiam error unde odio consectetur facere excepturi itaque!</p>
				</div>
			</div>
		</div>
  	)
};

export default AboutMePage;