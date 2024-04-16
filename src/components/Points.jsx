import React from "react";

function Points() {
	return (
		<div className="w-full lg:max-w-[80%] mx-auto my-10 flex flex-col gap-10">
			<div className="bg-stone-300 bg-opacity-10 rounded-lg p-20">What do I do?</div>
			<div className="flex gap-5 h-full">
				<div className="flex-grow relative bg-stone-300 bg-opacity-10 rounded-s-lg p-20 overflow-hidden">
					<div className="absolute left-[10%] top-0 h-full flex items-center"><h1 className="text-[30vh] font-title tracking-widest text-stone-300 text-opacity-10">1</h1></div>
					<div className="flex justify-end items-end gap-10 p-10 pe-0 pb-0">
						<h2 className="font-header text-[2.5vw] font-semibold tracking-wide">Design</h2>
						<p className="max-w-prose text-2xl text-pretty">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ipsa facilis beatae similique voluptate error incidunt quaerat et magnam dolorum? Perferendis provident cupiditate iusto reprehenderit ducimus iure dolorem amet eius!</p>
					</div>
				</div>
				<div className="flex-grow relative bg-stone-300 bg-opacity-10 rounded-e-lg p-20 overflow-hidden">
					<div className="absolute left-[10%] top-0 h-full flex items-center"><h1 className="text-[30vh] font-title tracking-widest text-stone-300 text-opacity-10">2</h1></div>
					<div className="flex justify-end items-end gap-10 p-10 pe-0 pb-0">
						<h2 className="font-header text-[2.5vw] font-semibold tracking-wide">Develop</h2>
						<p className="max-w-prose text-2xl text-pretty">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ipsa facilis beatae similique voluptate error incidunt quaerat et magnam dolorum? Perferendis provident cupiditate iusto reprehenderit ducimus iure dolorem amet eius!</p>
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