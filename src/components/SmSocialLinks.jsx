import React, { useState, useRef } from "react";
import Links from "../data/Links.json";
import { NavLink } from "react-router-dom";
import { MessageSquareMore } from "lucide-react";
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

	const mapLinks = (Links) => {
		return(
			Links.map((item, index) => {
			createRef(index);
			return(
				<a onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} key={index} target="_blank" href={item.link} className="bg-stone-300 bg-opacity-10 rounded-lg px-6 py-3 hover:bg-stone-400 hover:bg-opacity-30 ease-in-out duration-500 flex items-center group">
					{linkIcons(item.name)}
					<span ref={linkRefs.current[index]} className="group-hover:ms-3 tracking-wider font-semibold text-stone-400 leading-none ease-in-out duration-500">{item.name}</span>
				</a>
			)
		}))
	}

	const linkRefs = useRef([]);
	const createRef = (index) => {
		linkRefs.current[index] = React.createRef()
	}

	const [ isHovered, setHovered ] = useState(
		Links.map(() => false)
	)

	const handleMouseEnter = (index) => {
		const updatedArray = [...isHovered]
		updatedArray[index] = true
		setHovered(updatedArray)
	}
	const handleMouseLeave = (index) => {
		const updatedArray = [...isHovered]
		updatedArray[index] = false
		setHovered(updatedArray)
	}

   useGSAP(() => {
		isHovered.forEach((element, index) => {
			if (element === true){
				gsap.to(linkRefs.current[(index)].current, {
					duration: 0.5,
					text: Links[index].name,
					ease: "power3.inOut"
				})
			} else {
				gsap.to(linkRefs.current[(index)].current, {
					duration: 0.5,
					text: "",
					ease: "power3.inOut"
				})
			}
		});
   },[isHovered])

	return (
		<div>
			<div className="flex justify-start gap-x-4 my-5">
				{mapLinks(Links)}
			</div>
		</div>
	)
};

export default SmSocialLinks;