import React, { useState, useRef } from "react";
import NavIcons from "./NavIcons";
import NavItems from "../data/NavItems.json";
import { MenuSquare } from "lucide-react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {

	const commonStyles = "bg-stone-300 bg-opacity-10 hover:bg-stone-400 hover:bg-opacity-30 text-stone-400 border-2 border-stone-400 rounded-lg px-4 py-2 flex items-center ease-in-out duration-500"
	const iconStyles = "aspect-square h-4"

	const genNavIcons = () => {
		return (
			NavItems.map((navItem, index) => (
				<NavLink key={index} to={navItem.link} className={({isActive}) => isActive ? `border-opacity-100 ${commonStyles}` : `border-opacity-0 ${commonStyles}`}>
					{NavIcons(navItem.icon,iconStyles)}
					{/* <span className="ms-2 tracking-wider leading-none uppercase text-xs font-mono ease-in-out duration-500">{navItem.name}</span> */}
				</NavLink>
			))
		)
	}

	const NavJG = useRef(null)
	const [ navJGHovered, setNavJGHovered ] = useState(false)
	useGSAP(() => {
		if (navJGHovered){
			gsap.to(NavJG.current, {
				duration: 1,
				text: "Contact Me →",
				ease: "power3.inOut"
			});
		} else {
			gsap.to(NavJG.current, {
				duration: 1,
				text: "Jai Gandhi",
				ease: "power3.inOut"
			});
		}
	}, [ navJGHovered ])


	return (
		<>
			<div className="z-50 fixed top-0 left-0 w-full flex justify-between items-center gap-5 px-6 py-3 text-stone-400 hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-1000">
				<NavLink ref={NavJG} onMouseEnter={() => {setNavJGHovered(true)}} onMouseLeave={() => {setNavJGHovered(false)}}  to="/contact" className="font-title tracking-widest text-2xl">Jai Gandhi</NavLink>
				<div className="flex justify-end items-center gap-3">
					{genNavIcons()}
				</div>
			</div>
		</>
	)
}

export default Navbar;