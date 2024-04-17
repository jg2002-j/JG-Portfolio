import React from "react";
import bgTextures from "../assets/bgTextures/bgTextures";

function Points() {

	const bgTexture = bgTextures[Math.floor(Math.random()*(bgTextures.length))]

	return (
		<div className="w-full lg:max-w-[80%] mx-auto my-10 relative overflow-hidden">
			<img className="absolute -z-10 left-0 top-0 h-full w-full object-cover blur-2xl" src={bgTexture} alt="Background texture" />
			<div className="bg-stone-300 bg-opacity-10 rounded-lg py-20 flex flex-col gap-10">
				
				<div className="bg-stone-300 bg-opacity-10 rounded-lg p-10 px-20 mx-20">
					<h1 className="text-[3vw] font-header uppercase leading-none">What do I do</h1>
				</div>
				
				<div className="flex gap-10 h-full bg-stone-900 bg-opacity-90 noise px-20 py-10">
				
					<div className="flex-grow relative bg-stone-300 bg-opacity-10 rounded-lg p-20 overflow-hidden">
						<div className="absolute left-[10%] top-0 h-full flex items-center"><h1 className="text-[30vh] font-title tracking-widest text-stone-300 text-opacity-10">1</h1></div>
						<div className="flex justify-end items-end gap-10 p-10">
							<h2 className="text-[2.5vw]">Design</h2>
							<p className="max-w-prose text-2xl text-pretty">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ipsa facilis beatae similique voluptate error incidunt quaerat et magnam dolorum? Perferendis provident cupiditate iusto reprehenderit ducimus iure dolorem amet eius!</p>
						</div>
					</div>
				
					<div className="flex-grow relative bg-stone-300 bg-opacity-10 rounded-lg p-20 overflow-hidden">
						<div className="absolute left-[10%] top-0 h-full flex items-center"><h1 className="text-[30vh] font-title tracking-widest text-stone-300 text-opacity-10">2</h1></div>
						<div className="flex justify-end items-end gap-10 p-10">
							<h2 className="text-[2.5vw]">Develop</h2>
							<p className="max-w-prose text-2xl text-pretty">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ipsa facilis beatae similique voluptate error incidunt quaerat et magnam dolorum? Perferendis provident cupiditate iusto reprehenderit ducimus iure dolorem amet eius!</p>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
};

export default Points;

// What can I offer?

// Design | Develop
// each has a drop down for examples of projects where I've done that