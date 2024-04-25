import React, { useRef, useState } from "react";
import NavIcons from "../components/NavIcons";
import NavItems from "../data/NavItems.json";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Title() {

	// Refs
	const JGtitle = useRef(null)
	const NavAnimateTarget = useRef(null)
	const blackBar = useRef(null)
	const navBoxes = useRef(null)

	// States
	const [ oneHovered, setOneHovered ] = useState(false);
	const [ twoHovered, setTwoHovered ] = useState(false);
	const [ threeHovered, setThreeHovered ] = useState(false);
	const [ fourHovered, setFourHovered ] = useState(false);

	// Events
	const enterAnimate = (id) => {
		if (id == 1){
			setOneHovered(true)
		} else if (id == 2){
			setTwoHovered(true)
		} else if (id == 3){
			setThreeHovered(true)
		} else if (id == 4){
			setFourHovered(true)
		} else {
			console.log("error")
		}
	}

	const leaveAnimate = (id) => {
		if (id == 1){
			setOneHovered(false)
		} else if (id == 2){
			setTwoHovered(false)
		} else if (id == 3){
			setThreeHovered(false)
		} else if (id == 4){
			setFourHovered(false)
		} else {
			console.log("error")
		}
	}

	// Functions
	const renderNavLinks = (NavItems) => {
		return(
			NavItems.map((navItem, index) => {
				return(
					<NavLink 
						key={index} 
						to={navItem.link} 
						aria-label={`Visit the ${navItem.name} page.`}
						className={`bg-stone-300 bg-opacity-10 rounded-lg w-[45%] md:h-[45%] aspect-square hover:bg-stone-400 hover:bg-opacity-40 duration-500 ease-in-out flex flex-col items-center justify-center`}
						onClick={() => scrollDownHome(navItem.name)} 
						onMouseEnter={() => enterAnimate(navItem.id)} 
						onMouseLeave={() => leaveAnimate(navItem.id)} 
					>
						{NavIcons(navItem.icon, "text-[#a7a29f] w-full h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10")}
					</NavLink>
				)
			})
		)
	}

	const scrollDownHome = (name) => {
		if (name == "Home"){
			document.getElementById("titleBar").scrollIntoView();
		}
	}

	// GSAP
	useGSAP(() => {
		if (oneHovered){
			gsap.to(NavAnimateTarget.current, {
				duration: 1,
				text: "HOME",
				ease: "power3.inOut",
			});
			gsap.to(JGtitle.current, {
				duration: 1,
				text: "→",
				ease: "power3.inOut",
			});
		} else if (twoHovered){
			gsap.to(NavAnimateTarget.current, {
				duration: 1,
				text: "PROJECTS",
				ease: "power3.inOut",
			});
			gsap.to(JGtitle.current, {
				duration: 1,
				text: "→",
				ease: "power3.inOut",
			});
		} else if (threeHovered){
			gsap.to(NavAnimateTarget.current, {
				duration: 1,
				text: "ABOUT ME",
				ease: "power3.inOut",
			});
			gsap.to(JGtitle.current, {
				duration: 1,
				text: "→",
				ease: "power3.inOut",
			});
		} else if (fourHovered){
			gsap.to(NavAnimateTarget.current, {
				duration: 1,
				text: "CONTACT ME",
				ease: "power3.inOut",
			});
			gsap.to(JGtitle.current, {
				duration: 1,
				text: "→",
				ease: "power3.inOut",
			});
		} else if (!oneHovered && !twoHovered && !threeHovered && !fourHovered){
			gsap.to(NavAnimateTarget.current, {
				duration: 1,
				text: "JAI",
				ease: "power3.inOut",
			});
			gsap.to(JGtitle.current, {
				duration: 1,
				text: "GANDHI",
				ease: "power3.inOut",
			});
		}
	},[oneHovered, twoHovered, threeHovered, fourHovered])

	useGSAP(() => {
		const startTl = gsap.timeline({delay: 0.5})
		startTl.from(blackBar.current, {y:"120%", duration: 1, ease: "power2.out"}, "<")
		startTl.addLabel("boxEnd", ">-0.5")
		startTl.from(NavAnimateTarget.current, {x: "-100%", opacity: 0, duration: 1, ease: "power2.out"}, "boxEnd")
		startTl.from(JGtitle.current, {x: "-100% ", opacity: 0, duration: 1, ease: "power2.out"}, "<")
		startTl.from(navBoxes.current, {x: "100%", opacity: 0, duration: 1, ease: "power2.out"}, "boxEnd")

		// const endTl = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: blackBar.current,
		// 		start: "top 60%",
		// 		end: "top 20%",
		// 		scrub: true,
		// 	}
		// })
		// endTl.to(NavAnimateTarget.current, {x: "-100%", opacity: 0, duration: 1, ease: "power2.out"})
		// endTl.to(JGtitle.current, {x: "-100% ", opacity: 0, duration: 1, ease: "power2.out"}, "<")
		// endTl.to(navBoxes.current, {x: "100%", opacity: 0, duration: 1, ease: "power2.out"}, "<")
	})

  	return (
		<div ref={blackBar} className="w-vw h-[40vh] bg-stone-900 noise p-5 lg:p-10 flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 lg:gap-10">
			<div className="flex flex-col gap-3 help font-title text-5xl md:text-[8vw] leading-none text-stone-500 select-none tracking-wide mix-blend-difference text-center md:text-start">
				<h1 ref={NavAnimateTarget} className="text-stone-400">JAI</h1>
				<h1 ref={JGtitle} className="">GANDHI</h1>
			</div>
			<div ref={navBoxes} className="help md:h-full md:aspect-square w-full md:w-fit justify-center items-center flex md:flex-wrap gap-5">
				{renderNavLinks(NavItems)}
			</div>
		</div>
  	)
};

export default Title;