import React from "react";
import skillslist from "../data/Skills.json";
import BackgroundTexture from "../assets/bgTextures/BackgroundTexture";
import { Globe, Paintbrush, Frame, MousePointerClick } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Skills() {

	const img = (item) => {
		if (item.iconsrc == "lucide") {
			switch (item.icon) {
				case "Globe":
					return (<Globe className="inline me-2 group-hover:scale-125 duration-500" size={15} />)
				case "Paintbrush":
					return (<Paintbrush className="inline me-2 group-hover:scale-125 duration-500" size={15} />)
				case "Frame":
					return (<Frame className="inline me-2 group-hover:scale-125 duration-500" size={15} />)
				case "MousePointerClick":
					return (<MousePointerClick className="inline me-2 group-hover:scale-125 duration-500" size={15} />)
				default:
					break;
			}
		} else {
			return (
				<img className="inline-block me-2 group-hover:scale-125 duration-500" height="15" width="15" alt={`${item.slug} logo`} src={`https://cdn.simpleicons.org/${item.slug}/.svg`}/>
			)
		}
	}

   useGSAP(() => {
		const skillbox = gsap.utils.toArray('.skillbox');
		skillbox.forEach((box) => {
			gsap.from(box, {
				y: -150,
				opacity: 0,
				scrollTrigger: {
					trigger: box,
					start: 'bottom 95%',
					end: 'top 65%',
					scrub: true,
					// markers: true,
				},
			});
		});
	});

  	return (
		<div id="skills" className="flex flex-col justify-center items-center min-h-dvh bg-stone-900 bg-opacity-75 noise relative overflow-hidden">
			<BackgroundTexture />
			<div className="lg:max-w-[80%] w-full mx-auto flex flex-col 2xl:flex-row justify-center items-start mt-10 mb-40 gap-[5rem]">
					{skillslist.map(skill => (
						<div key={skill.id} className="2xl:w-1/5 w-4/5">
							<h1 className="font-header text-4xl text-slate-300 mb-9">{skill.title}</h1>
							{skill.body.map(item => (
								<div key={item.name} className="skillbox rounded-lg bg-slate-300 bg-opacity-10 px-3 py-1 my-2 hover:bg-opacity-30 duration-500 group">
									{img(item)}
									<span className="select-none" >{item.name}</span>
								</div>
							))}
						</div>
					))}
			</div>
		</div>
  	)
};

export default Skills;