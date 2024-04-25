import React, { useRef, useState, Suspense } from "react";
import Loading from "./Loading";
import techBadges from "../data/TechBadges.json";
import { FolderGit2, Globe, Search, StepForward } from 'lucide-react';
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
         <img className="h-4 lg:h-6 select-none" key={value} alt={value} src={value} />
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
				<div className="mx-5 lg:mx-10 flex flex-col lg:flex-row gap-5 lg:gap-10">

					<div className="bg-stone-300 bg-opacity-10 rounded-lg p-5 lg:p-10 flex gap-5 w-full">
						{proj.mobileImgs.map((image, index) => (
							<div key={index} className="flex flex-col">
								<div className="flex-grow hidden lg:block mockup-phone bg-stone-900 bg-opacity-100">
									<div className="bg-stone-900 bg-opacity-100 noise camera"></div> 
									<div className="display bg-stone-900 bg-opacity-100 h-full">
										<div className="phone-1 h-full">
											<Suspense fallback={<Loading/>}>
												<img onClick={() => fsImage(event)} src={image} alt="Mobile view" className="h-full object-cover cursor-pointer" />
											</Suspense>
										</div>
									</div>
								</div>
								<Suspense fallback={<Loading/>}>
									<img onClick={() => fsImage(event)} src={image} alt="Mobile view" className="lg:hidden flex-grow rounded-lg object-cover cursor-pointer" />
								</Suspense>
							</div>
						))}
					</div>

					<div className="lg:w-[50%] bg-stone-300 bg-opacity-10 noise rounded-lg p-5 lg:p-10 flex flex-col gap-5">
						<div className="hidden lg:block mockup-browser bg-stone-900 bg-opacity-75">
							<div className="mockup-browser-toolbar pt-2">
								<a target="_blank" href={props.focusProj.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{props.focusProj.deployed}</a>
							</div>
							<div className="flex justify-center p-2 bg-stone-900 bg-opacity-75">
								<Suspense fallback={<Loading/>}>
									<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[1]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
								</Suspense>
							</div>
						</div>
						<div className="hidden lg:block mockup-browser bg-stone-900 bg-opacity-75">
							<div className="mockup-browser-toolbar pt-2">
								<a target="_blank" href={props.focusProj.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{props.focusProj.deployed}</a>
							</div>
							<div className="flex justify-center p-2 bg-stone-900 bg-opacity-75">
								<Suspense fallback={<Loading/>}>
									<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[2]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
								</Suspense>
							</div>
						</div>
						<Suspense fallback={<Loading/>}>
							<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[1]} alt="Desktop view" className="lg:hidden w-full rounded-lg cursor-pointer" />
						</Suspense>
						<Suspense fallback={<Loading/>}>
							<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[2]} alt="Desktop view" className="lg:hidden w-full rounded-lg cursor-pointer" />
						</Suspense>
					</div>

				</div>
			)
		} else if (proj.mobileImgs.length > 0 && proj.desktopImgs.length == 1) {
			return (
				<div className="bg-stone-300 bg-opacity-10 rounded-lg p-5 lg:p-10 flex gap-5 w-full">
						{proj.mobileImgs.map((image, index) => (
							<div key={index} className="flex flex-col">
								<div className="flex-grow hidden lg:block mockup-phone bg-stone-900 bg-opacity-100">
									<div className="bg-stone-900 bg-opacity-100 noise camera"></div> 
									<div className="display bg-stone-900 bg-opacity-100 h-full">
										<div className="phone-1 h-full">
											<Suspense fallback={<Loading/>}>
												<img onClick={() => fsImage(event)} src={image} alt="Mobile view" className="h-full object-cover cursor-pointer" />
											</Suspense>
										</div>
									</div>
								</div>
								<Suspense fallback={<Loading/>}>
									<img onClick={() => fsImage(event)} src={image} alt="Mobile view" className="lg:hidden flex-grow rounded-lg object-cover cursor-pointer" />
								</Suspense>
							</div>
						))}
				</div>
			)
		} else if (proj.mobileImgs.length == 0 && proj.desktopImgs.length > 1) {
			return (
				<div className="flex px-5 lg:px-10 gap-5 lg:gap-10">
					<div className="hidden lg:block mockup-browser bg-stone-900 bg-opacity-75">
						<div className="mockup-browser-toolbar pt-2">
							<a target="_blank" href={props.focusProj.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{props.focusProj.deployed}</a>
						</div>
						<div className="flex justify-center p-2 bg-stone-900 bg-opacity-75">
							<Suspense fallback={<Loading/>}>
								<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[1]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
							</Suspense>
						</div>
					</div>
					<div className="hidden lg:block mockup-browser bg-stone-900 bg-opacity-75">
						<div className="mockup-browser-toolbar pt-2">
							<a target="_blank" href={props.focusProj.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{props.focusProj.deployed}</a>
						</div>
						<div className="flex justify-center p-2 bg-stone-900 bg-opacity-75">
							<Suspense fallback={<Loading/>}>
								<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[2]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
							</Suspense>
						</div>
					</div>
					<Suspense fallback={<Loading/>}>
						<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[1]} alt="Desktop view" className="lg:hidden w-full rounded-lg cursor-pointer" />
					</Suspense>
					<Suspense fallback={<Loading/>}>
						<img onClick={() => fsImage(event)} src={props.focusProj.desktopImgs[2]} alt="Desktop view" className="lg:hidden w-full rounded-lg cursor-pointer" />
					</Suspense>
				</div>
			)
		}
	}

	const renderDeployedLink = (proj) => {
		if (proj.deployed != ""){
			return(
				<div className="flex-grow">
					<a aria-label="Visit deployed site." target="_blank" href={proj.deployed} onMouseEnter={() => setHovered("deployed")} onMouseLeave={() => removeHovered("deployed")} className="hidden lg:flex cursor-pointer justify-center items-center gap-5 bg-stone-300 bg-opacity-10 rounded-lg p-10 noise hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-700">
						<Globe className="h-[3.5vh] w-[3.5vh]" />
						<h2 ref={deployedLink} className="font-title text-[1.4vw] leading-none tracking-widest"></h2>
					</a>
					<a aria-label="Visit deployed site." target="_blank" href={proj.deployed} className="lg:hidden flex-grow cursor-pointer flex justify-center items-center bg-stone-300 bg-opacity-10 rounded-lg p-4 noise hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-700">
						<Globe className="h-[3.5vh] w-[3.5vh]" />
						<h2 className="font-title text-[1.4vw] leading-none tracking-widest"></h2>
					</a>
				</div>
			)
		}
	}

	const nextProjBtn = () => {
		if (props.currentProj+1 == props.projsLength) {
			props.chooseProjfnct(0)
		} else {
			props.chooseProjfnct(props.currentProj+1)
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
			<div className="flex-grow flex flex-col gap-5 lg:gap-10 overflow-auto pb-10 text-stone-400">
				<div className="mx-5 lg:mx-10 flex gap-5 lg:gap-10">
					{renderDeployedLink(project)}
					<a aria-label="Visit GitHub repo." target="_blank" href={project.repo} onMouseEnter={() => setHovered("git")} onMouseLeave={() => removeHovered("git")}  className="hidden lg:flex cursor-pointer flex-grow justify-center items-center gap-5 bg-stone-300 bg-opacity-10 rounded-lg p-10 noise hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-700">
						<FolderGit2 className="h-[3.5vh] w-[3.5vh]" />
						<h2 ref={gitLink} className="font-title text-[1.4vw] leading-none tracking-widest"></h2>
					</a>
					<a aria-label="Visit GitHub repo." target="_blank" href={project.repo} className="lg:hidden flex-grow cursor-pointer flex justify-center items-center bg-stone-300 bg-opacity-10 rounded-lg p-4 noise hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-700">
						<FolderGit2 className="h-[3.5vh] w-[3.5vh]" />
						<h2 className="font-title text-[1.4vw] leading-none tracking-widest"></h2>
					</a>
					<button aria-label="See next Project." onClick={() => nextProjBtn()} className="lg:hidden flex-grow cursor-pointer flex justify-center items-center gap-3 bg-stone-300 bg-opacity-10 rounded-lg p-4 noise hover:bg-stone-900 hover:bg-opacity-90 ease-in-out duration-700">
						<h2 className="font-mono leading-none tracking-widest">{props.currentProj+1} / {props.projsLength}</h2>
						<StepForward className="h-[3.5vh] w-[3.5vh]" />
					</button>
				</div>
				<div className="mx-5 lg:mx-10 bg-stone-300 bg-opacity-10 rounded-lg p-5 lg:p-10 ">
					<div className="hidden lg:block mockup-browser bg-stone-900 bg-opacity-100 noise">
						<div className="mockup-browser-toolbar pt-2">
							<a target="_blank" href={project.deployed} className="mx-auto w-fit px-5 py-1 flex justify-center items-center gap-2 bg-stone-300 bg-opacity-10 rounded-lg font-mono text-sm text-stone-400 text-opacity-80"><Search className="p-1" />{project.deployed}</a>
						</div>
						<div className="flex justify-center p-2 bg-stone-900 bg-opacity-100 noise">
							<Suspense fallback={<Loading/>}>
								<img onClick={() => fsImage(event)} src={project.desktopImgs[0]} alt="Desktop view" className=" w-full rounded-lg cursor-pointer" />
							</Suspense>
						</div>
					</div>
					<Suspense fallback={<Loading/>}>
						<img onClick={() => fsImage(event)} src={project.desktopImgs[0]} alt="Desktop view" className="lg:hidden w-full rounded-lg cursor-pointer" />
					</Suspense>
				</div>
				<div className="bg-stone-900 bg-opacity-90 noise p-10 flex flex-col gap-10">
					<h1 className="text-3xl lg:text-[4vw] font-title tracking-wider leading-none">{project.title}</h1>
					<div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
                  <p className="lg:max-w-[60%] text-wrap-pretty text-sm lg:text-xl">{project.desc}</p>
                  <div className="lg:max-w-[30%] flex flex-wrap justify-start items-center gap-4">
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