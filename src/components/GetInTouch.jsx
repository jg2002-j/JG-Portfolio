import React from "react";
import BackgroundTexture from "../assets/bgTextures/BackgroundTexture";
import Links from "../data/Links.json"
import { NavLink } from "react-router-dom";
import { Send, MessagesSquare, MapPin } from "lucide-react";

function GetInTouch() {
	return (
		<div className="scrollPanel min-h-dvh flex items-center text-stone-400">
			<div className="w-full min-h-dvh mx-auto relative rounded-lg overflow-hidden flex flex-col">
				<BackgroundTexture />
				<div className="flex-grow bg-stone-900 bg-opacity-75 noise rounded-lg py-20 flex flex-col justify-center gap-20">
					<div className="flex px-20">
						<h1 className="text-4xl lg:text-[6vw] font-header text-stone-500 leading-none tracking-wider mix-blend-difference hover:text-stone-400 duration-1000">Get in touch.</h1>
					</div>

					<div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-10 px-10 lg:px-20">			
						
						<NavLink to="/contact" className="bg-stone-300 bg-opacity-10 hover:bg-stone-400 hover:bg-opacity-20 p-10 lg:p-20 rounded-lg w-full duration-1000 flex flex-col items-center justify-center gap-2 lg:gap-5">
							<h1 className="text-4xl font-header text-stone-500 leading-none tracking-wider hover:text-stone-400 duration-1000">Contact Form</h1>
						</NavLink>
							
						<div className="bg-stone-300 bg-opacity-10 hover:bg-stone-400 hover:bg-opacity-20 p-10 lg:p-20 rounded-lg w-full duration-1000 flex flex-col gap-2 lg:gap-5">
							<h2 className="text-4xl mb-5 font-header text-stone-500 leading-none tracking-wider hover:text-stone-400 duration-1000">Contact Me</h2>
							<a target="_blank" href="mailto:jai.2002.gandhi@gmail.com" className="max-w-fit text-stone-400 lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center"><Send className="inline h-4 lg:h-5 me-2 lg:me-4"/>jai.2002.gandhi@gmail.com</a>
							<a target="_blank" href="https://wa.me/447481861855" className="max-w-fit text-stone-400 lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center"><MessagesSquare className="inline h-4 lg:h-5 me-2 lg:me-4"/>+44 7481 861 855</a>
							<p className="max-w-fit text-stone-400 lg:text-2xl py-2 flex items-center"><MapPin className="inline h-4 lg:h-5 me-2 lg:me-4" />London, United Kingdom</p>
						</div>

						<div className="bg-stone-300 bg-opacity-10 hover:bg-stone-400 hover:bg-opacity-20 p-10 lg:p-20 rounded-lg w-full duration-1000 flex flex-col gap-2 lg:gap-5">
							<h2 className="text-4xl mb-5 font-header text-stone-500 leading-none tracking-wider hover:text-stone-400 duration-1000">Links</h2>
							<a target="_blank" href={Links[0].link} className="max-w-fit text-stone-400 lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center ">
								<img className="aspect-square h-4 lg:h-5 me-3 lg:me-5" src="https://cdn.simpleicons.org/github/a7a29f" alt="GitHub link"/>
								<span>GitHub</span>
							</a>
							<a target="_blank" href={Links[1].link} className="max-w-fit text-stone-400 lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center ">
								<img className="aspect-square h-4 lg:h-5 me-3 lg:me-5" src="https://cdn.simpleicons.org/linkedin/a7a29f" alt="LinkedIn link"/>
								<span>LinkedIn</span>
							</a>
							<a target="_blank" href={Links[2].link} className="max-w-fit text-stone-400 lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center ">
								<img className="aspect-square h-4 lg:h-5 me-3 lg:me-5" src="https://cdn.simpleicons.org/googledocs/a7a29f" alt="My CV link"/>
								<span>My CV</span>
							</a>
						</div>

					</div>

				</div>
			</div>
		</div>
	)
};

export default GetInTouch;