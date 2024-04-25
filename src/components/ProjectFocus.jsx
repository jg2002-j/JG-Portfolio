import React, { useRef, useState, Suspense } from "react";
import Loading from "./Loading";
import techBadges from "../data/TechBadges.json";
import { FolderGit2, Globe, Search } from 'lucide-react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectFocus(props) {

	// Refs
	const deployedLink = useRef(null)
	const gitLink = useRef(null)
	
	// States
	const [ isDeployedHovered, setDeployedHovered ] = useState(false)
	const [ isGitHovered, setGitHovered ] = useState(false)
	const [ img, setImg ] = useState("")

	// Constants
	const project = props.focusProj;

	// Events
	const setHovered = (link) => {
		if (link == "deployed"){
			setDeployedHovered(true)
		} else if (link == "git"){
			setGitHovered(true)
		} else {
			console.log("error")
		}
	}

	const removeHovered = (link) => {
		if (link == "deployed"){
			setDeployedHovered(false)
		} else if (link == "git"){
			setGitHovered(false)
		} else {
			console.log("error")
		}
	}

	// Functions
	const getBadges = (proj) => {
      const projTechs = proj.techs;
      const matchingTechBadges = techBadges.filter(tech => projTechs.includes(tech.name)).map(tech => tech.value);
      const badgeElements = matchingTechBadges.map(value => (
         <img className="h-6 select-none" key={value} alt={value} src={value} />
      ));
      return badgeElements;
   };
	
	const fsImage = (e) => {
		setImg(e.target.src)
		document.getElementById("fsImage").showModal()
	}

	const renderOtherScreenshots = (proj) => {
		if (proj.mobileImgs.length > 0 && proj.desktopImgs.length > 1){
			return (
				<div className="mx-10 flex gap-10">

					<div className="bg-stone-300 bg-opacity-10 rounded-lg p-10 flex gap-5 w-full">
						{proj.mobileImgs.map((image, index) => (
							<div key={index} className="mockup-phone bg-stone-900 bg-opacity-100">
								<div className="bg-stone-900 bg-opacity-100 noise camera"></div> 
								<div className="display bg-stone-900 bg-opacity-100 h-full">
									<div className="phone-1 h-full">
										<Suspense fallback={<Loading/>}>
											<img onClick={() => fsImage(event)} src={image} alt="Mobile view" className="h-full object-cover cursor-pointer" />
										</Suspense>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="w-[50%] bg-stone-300 bg-opacity-10 noise rounded-lg p-10 flex flex-col gap-5">
						<div className="mockup-browser bg-stone-900 bg-opacity-75">
							<div className="mockup-browser-toolbar pt-2">
								<a target="_blank" href={props.focusProj.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{props.focusProj.deployed}</a>
							</div>
							<div className="flex justify-center p-2 bg-stone-900 bg-opacity-75">
								<Suspense fallback={<Loading/>}>
									<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[1]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
								</Suspense>
							</div>
						</div>
						<div className="mockup-browser bg-stone-900 bg-opacity-75">
							<div className="mockup-browser-toolbar pt-2">
								<a target="_blank" href={props.focusProj.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{props.focusProj.deployed}</a>
							</div>
							<div className="flex justify-center p-2 bg-stone-900 bg-opacity-75">
								<Suspense fallback={<Loading/>}>
									<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[2]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
								</Suspense>
							</div>
						</div>
					</div>

				</div>
			)
		} else if (proj.mobileImgs.length > 0 && proj.desktopImgs.length == 1) {
			return (
				<div className="bg-stone-300 bg-opacity-10 rounded-lg p-10 flex gap-5 w-full">
					{proj.mobileImgs.map((image, index) => (
						<div key={index} className="mockup-phone bg-stone-900 bg-opacity-100">
							<div className="bg-stone-900 bg-opacity-100 noise camera"></div> 
							<div className="display bg-stone-900 bg-opacity-100 h-full">
								<div className="phone-1 h-full">
									<Suspense fallback={<Loading/>}>
										<img onClick={() => fsImage(event)} src={image} alt="Mobile view" className="h-full object-cover cursor-pointer" />
									</Suspense>
								</div>
							</div>
						</div>
					))}
				</div>
			)
		} else if (proj.mobileImgs.length == 0 && proj.desktopImgs.length > 1) {
			return (
				<div className="flex px-10 gap-10">
					<div className="mockup-browser bg-stone-900 bg-opacity-100 noise">
						<div className="mockup-browser-toolbar pt-2">
							<a target="_blank" href={props.focusProj.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{props.focusProj.deployed}</a>
						</div>
						<div className="flex justify-center p-2 bg-stone-900 bg-opacity-100 noise">
							<Suspense fallback={<Loading/>}>
								<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[1]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
							</Suspense>
						</div>
					</div>
					<div className="mockup-browser bg-stone-900 bg-opacity-100 noise">
						<div className="mockup-browser-toolbar pt-2">
							<a target="_blank" href={props.focusProj.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{props.focusProj.deployed}</a>
						</div>
						<div className="flex justify-center p-2 bg-stone-900 bg-opacity-100 noise">
							<Suspense fallback={<Loading/>}>
								<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[2]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
							</Suspense>
						</div>
					</div>
				</div>
			)
		}
	}

	const renderDeployedLink = (proj) => {
		if (proj.deployed != ""){
			return(
				<a aria-label="Visit deployed site." target="_blank" href={proj.deployed} onMouseEnter={() => setHovered("deployed")} onMouseLeave={() => removeHovered("deployed")} className="cursor-pointer flex-grow flex justify-center items-center gap-5 bg-stone-300 bg-opacity-10 rounded-lg p-10 noise hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-700">
					<Globe className="h-[3.5vh] w-[3.5vh]" />
					<h2 ref={deployedLink} className="font-title text-[1.4vw] leading-none tracking-widest"></h2>
				</a>
			)
		}
	}

	// GSAP
	useGSAP(() => {
      if (isDeployedHovered) {
         gsap.to(deployedLink.current, {
            duration: 1.5,
            text: "Visit Deployed Site →",
            ease: "power3.inOut"
         })
      } else {
         gsap.to(deployedLink.current, {
            duration: 1.5,
            text: "",
            ease: "power3.inOut"
         })
      }
   },[ isDeployedHovered ])

	useGSAP(() => {
      if (isGitHovered) {
         gsap.to(gitLink.current, {
            duration: 1.5,
            text: "See GitHub Repo →",
            ease: "power3.inOut"
         })
      } else {
         gsap.to(gitLink.current, {
            duration: 1.5,
            text: "",
            ease: "power3.inOut"
         })
      }
   },[ isGitHovered ])

	return (
		<>
			<div className="flex-grow flex flex-col gap-10 overflow-auto pb-10 text-stone-400">
				<div className="mx-10 flex gap-10">
					{renderDeployedLink(project)}
					<a aria-label="Visit GitHub repo." target="_blank" href={project.repo} onMouseEnter={() => setHovered("git")} onMouseLeave={() => removeHovered("git")}  className="cursor-pointer flex-grow flex justify-center items-center gap-5 bg-stone-300 bg-opacity-10 rounded-lg p-10 noise hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-700">
						<FolderGit2 className="h-[3.5vh] w-[3.5vh]" />
						<h2 ref={gitLink} className="font-title text-[1.4vw] leading-none tracking-widest"></h2>
					</a>
				</div>
				<div className="mx-10 bg-stone-300 bg-opacity-10 rounded-lg p-10 ">
					<div className="mockup-browser bg-stone-900 bg-opacity-100 noise">
						<div className="mockup-browser-toolbar pt-2">
							<a target="_blank" href={project.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{project.deployed}</a>
						</div>
						<div className="flex justify-center p-2 bg-stone-900 bg-opacity-100 noise">
							<Suspense fallback={<Loading/>}>
								<img onClick={() => fsImage(event)} src={project.desktopImgs[0]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
							</Suspense>
						</div>
					</div>
				</div>
				<div className="bg-stone-900 bg-opacity-90 noise p-10 flex flex-col gap-10">
					<h1 className="text-[4vw] font-title tracking-wider leading-none">{project.title}</h1>
					<div className="flex justify-between items-center gap-10">
                  <p className="w-[65ch] max-w-[60%] text-wrap-pretty text-xl">{project.desc}</p>
                  <div className="max-w-[30%] flex flex-wrap justify-start items-center gap-4">
                     {getBadges(project)}
                  </div>
               </div>
				</div>
				{renderOtherScreenshots(project)}
				<dialog id="fsImage" className="modal">
					<div className="modal-box bg-stone-900 noise max-w-[90vw] w-fit h-[90vh] overflow-hidden">
						<img src={img} alt="Fullscreen view" className="h-full object-contain" />
					</div>
					<form method="dialog" className="modal-backdrop">
						<button>close</button>
					</form>
				</dialog>
			</div>
		</>
	)
};

export default ProjectFocus;