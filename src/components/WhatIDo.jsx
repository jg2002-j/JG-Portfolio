import React, { useRef, forwardRef } from "react";
import BackgroundTexture from "../assets/bgTextures/BackgroundTexture";
import Services from "../data/Services.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function WhatIDo() {

	// Refs
	const WhatIDo = useRef(null)

	// Functions
	const renderServices = () => {
		return (
			Services.map((service, index) => {
				return (
					<div key={index} className="servBox max-w-[800px] flex-grow bg-stone-300 bg-opacity-10 rounded-lg p-10 flex flex-col xl:flex-row items-center gap-10 hover:bg-stone-400 hover:bg-opacity-20 duration-1000">
						<h1 className="text-[30vh] font-title tracking-widest leading-none text-stone-300 text-opacity-10">{index+1}</h1>
						<div className="flex flex-col gap-3">
							<h2 className="text-3xl font-header">{service.title}</h2>
							<p className="max-w-prose text-xl text-pretty">{service.desc}</p>
						</div>
					</div>
				)
			})
		)
	}	

	// // GSAP
	// useGSAP(() => {
	// 	const serviceBoxes = gsap.utils.toArray(".servBox")
	// 	serviceBoxes.forEach((box) => {
	// 		gsap.from(box, {
	// 			y: "120%",
	// 			opacity: 0,
	// 			scrollTrigger: {
	// 				trigger: WhatIDo.current,
	// 				start: "bottom 70%",
	// 				end: "top 40%",
	// 				scrub: true,
	// 				// markers: true,
	// 			}
	// 		})
	// 	})
	// })

	return (
		<div className="scrollPanel min-h-dvh flex items-center text-stone-400">
			<div className="w-full min-h-dvh flex flex-col mx-auto relative rounded-lg overflow-hidden">
				<BackgroundTexture />
				<div className="flex-grow bg-stone-900 bg-opacity-75 noise rounded-lg py-20 flex flex-col justify-center gap-20">
					<div className="flex justify-end px-20">
						<h1 ref={WhatIDo} className="text-[6vw] font-header text-stone-500 leading-none tracking-wider mix-blend-difference hover:text-stone-400 duration-1000">What I do.</h1>
					</div>
					<div className="flex flex-col xl:flex-row justify-center items-center gap-20 px-20">				
						<div className="hidden xl:block flex-grow"></div>
						{renderServices()}
						<div className="hidden xl:block flex-grow"></div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default WhatIDo;