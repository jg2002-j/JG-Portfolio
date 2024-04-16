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
				<a ref={linkRefs.current[index]} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} key={index} target="_blank" href={item.link} className="tracking-wider font-semibold text-stone-400 bg-stone-300 bg-opacity-10 rounded-lg px-5 py-2 hover:bg-stone-400 hover:bg-opacity-30 hover:px-8 ease-in-out duration-500 flex items-center">
					{linkIcons(item.name)}
					<span className="ms-3 ">{item.name}</span>
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
		console.log(isHovered)
	}
	const handleMouseLeave = (index) => {
		const updatedArray = [...isHovered]
		updatedArray[index] = false
		setHovered(updatedArray)
	}

   // useGSAP(() => {
	// 	is
   //    if (isHovered[0]) {
   //       gsap.to(linkRefs.current[0], {
   //          duration: 1,
   //          text: "GitHub",
   //          ease: "power3.inOut"
   //       })
   //    } else {
   //       gsap.to(linkRefs.current[0], {
   //          duration: 1,
   //          text: "",
   //          ease: "power3.inOut"
   //       })
   //    }
   // },[isHovered])

	return (
		<div>
			<div className="flex justify-start gap-x-4 my-5">
				{mapLinks(Links)}
			</div>
		</div>
	)
};

export default SmSocialLinks;