import React, { useState, useRef } from "react";
import Links from "../data/Links.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function SmSocialLinks() {

	const linkIcons = (name) => {
      switch (name) {
         case "GitHub":
            return(<img className="aspect-square h-4" src="https://cdn.simpleicons.org/github/a7a29f" alt={name}/>)
         case "LinkedIn":
            return(<img className="aspect-square h-4" src="https://cdn.simpleicons.org/linkedin/a7a29f" alt={name}/>)
         case "CV":
            return(<img className="aspect-square h-4" src="https://cdn.simpleicons.org/googledocs/a7a29f" alt={name}/>)
         default:
            break;
      }
   }

	const [ githubHovered, setGithubHovered ] = useState(false)
	const [ linkedinHovered, setLinkedinHovered ] = useState(false)
	const [ cvHovered, setCVHovered ] = useState(false)

	const Github = useRef(null)
	const Linkedin = useRef(null)
	const CV = useRef(null)

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
			<a onMouseEnter={() => handleMouseEnter("Github")} onMouseLeave={() => handleMouseLeave("Github")} target="_blank" href="" className="bg-stone-300 bg-opacity-10 rounded-lg px-6 py-3 hover:bg-stone-400 hover:bg-opacity-30 ease-in-out duration-500 flex items-center group">
				{linkIcons("GitHub")}
				<span ref={Github} className="group-hover:ms-3 tracking-wider leading-none uppercase text-sm font-mono text-stone-400 ease-in-out duration-500"></span>
			</a>
			<a onMouseEnter={() => handleMouseEnter("Linkedin")} onMouseLeave={() => handleMouseLeave("Linkedin")} target="_blank" href="" className="bg-stone-300 bg-opacity-10 rounded-lg px-6 py-3 hover:bg-stone-400 hover:bg-opacity-30 ease-in-out duration-500 flex items-center group">
				{linkIcons("LinkedIn")}
				<span ref={Linkedin} className="group-hover:ms-3 tracking-wider leading-none uppercase text-sm font-mono text-stone-400 ease-in-out duration-500"></span>
			</a>
			<a onMouseEnter={() => handleMouseEnter("CV")} onMouseLeave={() => handleMouseLeave("CV")} target="_blank" href="" className="bg-stone-300 bg-opacity-10 rounded-lg px-6 py-3 hover:bg-stone-400 hover:bg-opacity-30 ease-in-out duration-500 flex items-center group">
				{linkIcons("CV")}
				<span ref={CV} className="group-hover:ms-3 tracking-wider leading-none uppercase text-sm font-mono text-stone-400 ease-in-out duration-500"></span>
			</a>
		</div>
	)

	// const mapLinks = (Links) => {
	// 	return(
	// 		Links.map((item, index) => {
	// 		createRef(index);
	// 		return(
	// 			<a onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} key={index} target="_blank" href={item.link} className="bg-stone-300 bg-opacity-10 rounded-lg px-6 py-3 hover:bg-stone-400 hover:bg-opacity-30 ease-in-out duration-500 flex items-center group">
	// 				{linkIcons(item.name)}
	// 				<span ref={linkRefs.current[index]} className="group-hover:ms-3 tracking-wider font-semibold text-stone-400 leading-none ease-in-out duration-500">{item.name}</span>
	// 			</a>
	// 		)
	// 	}))
	// }

	// const linkRefs = useRef([]);
	// const createRef = (index) => {
	// 	linkRefs.current[index] = React.createRef()
	// }

	// const [ isHovered, setHovered ] = useState(
	// 	Links.map(() => false)
	// )

	// const handleMouseEnter = (index) => {
	// 	const updatedArray = [...isHovered]
	// 	updatedArray.forEach(linkstate => {
	// 		linkstate = true
	// 	});
	// 	updatedArray[index] = true
	// 	setHovered(updatedArray)
	// }
	// const handleMouseLeave = (index) => {
	// 	const updatedArray = [...isHovered]
	// 	updatedArray[index] = false
	// 	setHovered(updatedArray)
	// }

   // useGSAP(() => {
	// 	console.log(isHovered)
		
	// 	isHovered.forEach((element, index) => {
	// 		if (element === true){
	// 			gsap.to(linkRefs.current[(index)].current, {
	// 				duration: 0.5,
	// 				text: Links[index].name,
	// 				ease: "power3.inOut"
	// 			})
	// 		} else {
	// 			gsap.to(linkRefs.current[(index)].current, {
	// 				duration: 0.5,
	// 				text: "",
	// 				ease: "power3.inOut"
	// 			})
	// 		}
	// 	});
   // },[isHovered])

	// return (
	// 	<div>
	// 		<div className="flex justify-start gap-4">
	// 			{mapLinks(Links)}
	// 		</div>
	// 	</div>
	// )
};

export default SmSocialLinks;