import React from "react";
import BackgroundTexture from "../assets/bgTextures/BackgroundTexture";

function Points() {
	return (
		<div className="min-h-dvh flex items-center text-stone-400">
			<div className="w-full h-dvh mx-auto relative rounded-lg overflow-hidden">
				<BackgroundTexture />

				<div className="h-full bg-stone-900 bg-opacity-75 noise rounded-lg py-20 flex flex-col justify-center gap-20">
					
					<div className="flex justify-end px-20">
						<h1 className="text-[6vw] font-header text-stone-500 leading-none tracking-wider mix-blend-difference hover:text-stone-400 duration-1000">What I do.</h1>
					</div>
					
					<div className="flex items-center gap-10 px-20">
					
						<div className="max-w-[50%] min-h-[25rem] flex-grow relative bg-stone-300 bg-opacity-10 rounded-lg p-10 overflow-hidden flex items-center hover:bg-stone-400 hover:bg-opacity-20 duration-1000">
							<div className="absolute left-[10%] top-0 h-full flex items-center"><h1 className="text-[30vh] font-title tracking-widest leading-none text-stone-300 text-opacity-10">1</h1></div>
							<div className="flex items-end gap-[5vw] p-10">
								<h2 className="text-[2.5vw] font-mono">Design</h2>
								<p className="max-w-prose text-xl text-pretty">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ipsa facilis beatae similique voluptate error incidunt quaerat et magnam dolorum? Perferendis provident cupiditate iusto reprehenderit ducimus iure dolorem amet eius!</p>
							</div>
						</div>
					
						<div className="max-w-[50%] min-h-[25rem] flex-grow relative bg-stone-300 bg-opacity-10 rounded-lg p-10 overflow-hidden flex items-center hover:bg-stone-400 hover:bg-opacity-20 duration-1000">
							<div className="absolute left-[10%] top-0 h-full flex items-center"><h1 className="text-[30vh] font-title tracking-widest leading-none text-stone-300 text-opacity-10">2</h1></div>
							<div className="flex items-end gap-[5vw] p-10">
								<h2 className="text-[2.5vw] font-mono">Develop</h2>
								<p className="max-w-prose text-xl text-pretty">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ipsa facilis beatae similique voluptate error incidunt quaerat et magnam dolorum? Perferendis provident cupiditate iusto reprehenderit ducimus iure dolorem amet eius!</p>
							</div>
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