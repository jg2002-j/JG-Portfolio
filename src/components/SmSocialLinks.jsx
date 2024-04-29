import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Links from "../data/Links.json"

function SmSocialLinks() {

	// Refs
	const Github = useRef(null)
	const Linkedin = useRef(null)
	const CV = useRef(null)

	// States
	const [ githubHovered, setGithubHovered ] = useState(false)
	const [ linkedinHovered, setLinkedinHovered ] = useState(false)
	const [ cvHovered, setCVHovered ] = useState(false)
	
	// Functions
	const linkIcons = (name) => {
      switch (name) {
         case "GitHub":
            return(<img className="aspect-square h-4" src="https://cdn.simpleicons.org/github/a7a29f" alt={`${name} icon logo`}/>)
         case "LinkedIn":
            return(<img className="aspect-square h-4" src="https://cdn.simpleicons.org/linkedin/a7a29f" alt={`${name} icon logo`}/>)
         case "CV":
            return(<img className="aspect-square h-4" src="https://cdn.simpleicons.org/googledocs/a7a29f" alt={`${name} icon logo`}/>)
         default:
            break;
      }
   }

	const handleMouseEnter = (link) => {
		switch (link) {
			case "Github":
				setGithubHovered(true)
				setLinkedinHovered(false)
				setCVHovered(false)
				break;
			case "Linkedin":
				setGithubHovered(false)
				setLinkedinHovered(true)
				setCVHovered(false)
				break;
			case "CV":
				setGithubHovered(false)
				setLinkedinHovered(false)
				setCVHovered(true)
				break;
			default:
				break;
		}
	}

	const handleMouseLeave = (link) => {
		setGithubHovered(false)
		setLinkedinHovered(false)
		setCVHovered(false)
	}

	// GSAP
	useGSAP(() => {
		if (githubHovered) {
			gsap.to(Github.current, {
				duration: 0.5,
				text: "Github",
				ease: "power3.inOut"
			})
			gsap.to(Linkedin.current, {
				duration: 0.5,
				text: "",
				ease: "power3.inOut"
			})
			gsap.to(CV.current, {
				duration: 0.5,
				text: "",
				ease: "power3.inOut"
			})
		} else if (linkedinHovered) {
			gsap.to(Github.current, {
				duration: 0.5,
				text: "",
				ease: "power3.inOut"
			})
			gsap.to(Linkedin.current, {
				duration: 0.5,
				text: "LinkedIn",
				ease: "power3.inOut"
			})
			gsap.to(CV.current, {
				duration: 0.5,
				text: "",
				ease: "power3.inOut"
			})
		} else if (cvHovered) {
			gsap.to(Github.current, {
				duration: 0.5,
				text: "",
				ease: "power3.inOut"
			})
			gsap.to(Linkedin.current, {
				duration: 0.5,
				text: "",
				ease: "power3.inOut"
			})
			gsap.to(CV.current, {
				duration: 0.5,
				text: "CV",
				ease: "power3.inOut"
			})
		} else {
			gsap.to(Github.current, {
				duration: 0.5,
				text: "",
				ease: "power3.inOut"
			})
			gsap.to(Linkedin.current, {
				duration: 0.5,
				text: "",
				ease: "power3.inOut"
			})
			gsap.to(CV.current, {
				duration: 0.5,
				text: "",
				ease: "power3.inOut"
			})
		}
	},[githubHovered, linkedinHovered, cvHovered])

	return(
		<div className="flex justify-start gap-2">
			<a onMouseEnter={() => handleMouseEnter("Github")} onMouseLeave={() => handleMouseLeave("Github")} target="_blank" href={Links[0].link} className="bg-stone-900 noise bg-opacity-75 md:bg-stone-300 md:bg-opacity-10 rounded-lg px-4 py-3 text-stone-400 hover:bg-stone-900 hover:text-stone-300 hover:bg-opacity-95 ease-in-out duration-500 flex items-center group">
				{linkIcons("GitHub")}
				<span ref={Github} className="group-hover:ms-3 tracking-wider leading-none uppercase text-xs font-mono ease-in-out duration-500"></span>
			</a>
			<a onMouseEnter={() => handleMouseEnter("Linkedin")} onMouseLeave={() => handleMouseLeave("Linkedin")} target="_blank" href={Links[1].link} className="bg-stone-900 noise bg-opacity-75 md:bg-stone-300 md:bg-opacity-10 rounded-lg px-4 py-3 text-stone-400 hover:bg-stone-900 hover:text-stone-300 hover:bg-opacity-95 ease-in-out duration-500 flex items-center group">
				{linkIcons("LinkedIn")}
				<span ref={Linkedin} className="group-hover:ms-3 tracking-wider leading-none uppercase text-xs font-mono ease-in-out duration-500"></span>
			</a>
			<a onMouseEnter={() => handleMouseEnter("CV")} onMouseLeave={() => handleMouseLeave("CV")} target="_blank" href={Links[2].link} className="bg-stone-900 noise bg-opacity-75 md:bg-stone-300 md:bg-opacity-10 rounded-lg px-4 py-3 text-stone-400 hover:bg-stone-900 hover:text-stone-300 hover:bg-opacity-95 ease-in-out duration-500 flex items-center group">
				{linkIcons("CV")}
				<span ref={CV} className="group-hover:ms-3 tracking-wider leading-none uppercase text-xs font-mono ease-in-out duration-500"></span>
			</a>
		</div>
	)
};

export default SmSocialLinks;