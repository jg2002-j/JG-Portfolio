import React, { useState, useRef } from "react";
import NavIcons from "./NavIcons";
import NavItems from "../data/NavItems.json";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {

	// Refs
	const NavJG = useRef(null)

	// States
	const [ navJGHovered, setNavJGHovered ] = useState(false)

	// Constants
	const commonStyles = "bg-stone-300 bg-opacity-10 hover:bg-stone-400 hover:bg-opacity-30 text-stone-400 border-2 border-stone-400 rounded-lg px-4 py-2 flex items-center ease-in-out duration-500"
	const iconStyles = "aspect-square h-4"
	const phrases = [
		"No, I am your father.",
		"It's a trap!",
		"May the force be with you.",
		"Do or do not. There is no try.",
		"I find your lack of faith disturbing.",
		"I've got a bad feeling about this.",
		"I have the high ground.",
		"This is the way.",
		"🎵 Bacon pancakes, makin' bacon pancakes. 🎵",
		"Nah, I'd win.",
		"Stand proud, you are strong.",
		"As it was written.",
		"A war in my name!",
		"Winter is coming...",
		"Dracarys.",
		"A Lannister always pays his debts.",
		"You know nothing, Jon Snow.",
		"Fire and blood.",
		"A heart's a heavy burden.",
		"There you are! I was looking everywhere for you.",
	]

	// Functions
	const genNavIcons = () => {
		return (
			NavItems.map((navItem, index) => (
				<NavLink key={index} to={navItem.link} className={({isActive}) => isActive ? `border-opacity-100 ${commonStyles}` : `border-opacity-0 ${commonStyles}`}>
					{NavIcons(navItem.icon,iconStyles)}
				</NavLink>
			))
		)
	}

	// GSAP
	useGSAP(() => {
		if (navJGHovered){
			gsap.to(NavJG.current, {
				duration: 1.5,
				text: phrases[Math.floor(Math.random()*(phrases.length))],
				ease: "power3.inOut"
			});
		} else {
			gsap.to(NavJG.current, {
				duration: 1.5,
				text: "Jai Gandhi",
				ease: "power3.inOut"
			});
		}
	}, [ navJGHovered ])

	return (
		<>
			<div className="z-50 fixed top-0 left-0 w-full flex justify-center lg:justify-between items-center gap-5 px-6 py-3 text-stone-400 ease-in-out duration-1000">
				<NavLink ref={NavJG} onMouseEnter={() => {setNavJGHovered(true)}} onMouseLeave={() => {setNavJGHovered(false)}}  to="/" className="hidden lg:block font-title tracking-widest text-2xl min-w-48">Jai Gandhi</NavLink>
				<div className="flex justify-end items-center gap-3">
					{genNavIcons()}
				</div>
			</div>
		</>
	)
}

export default Navbar;