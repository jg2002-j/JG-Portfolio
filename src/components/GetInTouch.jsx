import React from "react";
import bgTextures from "../assets/bgTextures/bgTextures";
import { NavLink } from "react-router-dom";
import { Bug, Send, MessagesSquare, MapPin } from "lucide-react";

function GetInTouch() {

	const bgTexture = bgTextures[Math.floor(Math.random()*(bgTextures.length))]

	return (
		<div className="min-h-dvh flex items-center text-stone-400">
			<div className="w-full h-dvh mx-auto relative rounded-lg overflow-hidden">
				<img className="absolute -z-10 left-0 top-0 h-full w-full object-cover blur-2xl" src={bgTexture} alt="Background texture" />

				<div className="h-full bg-stone-900 bg-opacity-75 noise rounded-lg py-20 flex flex-col justify-center gap-20">
					
					<div className="flex px-20">
						<h1 className="text-[6vw] font-header text-stone-500 leading-none tracking-wider mix-blend-difference hover:text-stone-400 duration-1000">Get in touch.</h1>
					</div>
					
					<div className="flex items-center gap-10 px-20">
						
						<NavLink to="/contact" className="bg-stone-300 max-w-[50%] min-h-40 h-full bg-opacity-10 p-20 rounded-lg hover:bg-stone-400 hover:bg-opacity-30 duration-1000 flex items-center justify-center">
							<h1 className="text-4xl font-header text-stone-500 leading-none tracking-wider hover:text-stone-400 duration-1000">Contact Form</h1>
						</NavLink>
						
						<div className="bg-stone-300 min-h-40 flex-grow bg-opacity-10 p-20 rounded-lg hover:bg-stone-400 hover:bg-opacity-30 duration-1000 flex gap-20 items-center justify-center">
							<div className="min-w-[40%] flex flex-col gap-2">
								<h3 className="text-4xl mb-5 font-header text-stone-500 leading-none tracking-wider hover:text-stone-400 duration-1000">Contact Me</h3>
								<a target="_blank" href="mailto:jai.2002.gandhi@gmail.com" className="max-w-fit text-stone-400 text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center"><Send className="inline me-5"/>jai.2002.gandhi@gmail.com</a>
								<a target="_blank" href="https://wa.me/447481861855" className="max-w-fit text-stone-400 text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center"><MessagesSquare className="inline me-5"/>+44 7481 861 855</a>
								<p className="max-w-fit text-stone-400 text-2xl py-2 flex items-center"><MapPin className="inline me-5" />London, United Kingdom</p>
							</div>
							<div className="min-w-[20%] flex flex-col gap-2">
								<h3 className="text-4xl mb-5 font-header text-stone-500 leading-none tracking-wider hover:text-stone-400 duration-1000">Links</h3>
								<a target="_blank" href="https://github.com/jg2002-j" className="max-w-fit text-stone-400 text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center ">
									<img className="aspect-square h-5 me-4" src="https://cdn.simpleicons.org/github/a7a29f" alt="GitHub"/>
									<span>GitHub</span>
								</a>
								<a target="_blank" href="https://www.linkedin.com/in/jg2002/" className="max-w-fit text-stone-400 text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center ">
									<img className="aspect-square h-5 me-4" src="https://cdn.simpleicons.org/linkedin/a7a29f" alt="LinkedIn"/>
									<span>LinkedIn</span>
								</a>
								<a target="_blank" href="https://www.dropbox.com/scl/fi/2y6z2e05ia477za2cebtz/JaiGandhiCV.pdf?rlkey=ssr2bkcj5l1xts5wliez85kol&dl=0" className="max-w-fit text-stone-400 text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-2 flex items-center ">
									<img className="aspect-square h-5 me-4" src="https://cdn.simpleicons.org/googledocs/a7a29f" alt="My CV"/>
									<span>My CV</span>
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
};

export default GetInTouch;