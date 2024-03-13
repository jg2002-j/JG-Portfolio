import React from "react";
import { NavIcons } from "./NavIcons";
import NavData from "../data/NavItems.json";
import { MenuSquare } from "lucide-react";
import { NavLink } from "react-router-dom";


const SidebarNavButton = (props) => {
	if (props.type == "page") {
		return(
			<li>
				<NavLink to={props.link} className={`rounded-lg px-4 py-2 mt-8 group ease-in-out duration-300 flex justify-start items-center`}>
					{NavIcons(props.icon, "text-[#cdd2d4] group-hover:text-[#e99c9c]")}<h2 className="ms-5 font-title tracking-[0.275rem] text-xl text-[#cdd2d4] group-hover:text-[#e99c9c] origin-start ease-in-out duration-300">{props.name}</h2>
				</NavLink>
			</li>
		)
	} else if (props.type == "section") {
		return(
			<NavLink to={props.link} className={`rounded-lg px-4 py-2 ms-8 mt-1 group ease-in-out duration-300 flex justify-start items-center`}>
				{NavIcons(props.icon, "text-[#cdd2d4] group-hover:text-[#e99c9c]")}<h2 className="ms-5 font-title tracking-[0.275rem] text-sm text-[#cdd2d4] group-hover:text-[#e99c9c] origin-start ease-in-out duration-300">{props.name}</h2>
			</NavLink>
		)
	}
}

// function Sidebar(props) {
//   	return (
// 	 	<div className="fixed top-0 left-0 w-vw h-dvh">
// 			<button onClick={() => props.toggleSidebar(props.state)} className="absolute z-50 top-10 left-10 inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
// 				<span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// 					<MenuSquare />
// 				</span>
// 			</button>
// 			<div className={`${props.state} z-30 h-screen w-screen fixed top-0 left-0 bg-neutral-700 cursor-not-allowed opacity-40`}></div>
// 			<nav className={`${props.state} bg-[#1e2025] fixed top-0 z-40 min-h-[1/2] w-vw 2xl:w-1/4 rounded-xl m-5 ease-in-out duration-[2000]`}>
// 				<div className="flex flex-col justify-start items-start my-[6rem] mx-11">
// 					<h1 className="font-title text-3xl tracking-[5px] uppercase inline-block bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text">Where to?</h1>
// 					<ul>
// 						{NavData.map(navItem => (
// 							<SidebarNavButton key={navItem.id} name={navItem.name} link={navItem.link} icon={navItem.icon} type={navItem.type} />
// 						))}
// 					</ul>
// 				</div>
// 			</nav>
// 		</div>
//   	)
// };

function Sidebar() {
	return (
		<>
			<div className="fixed top-0 left-0 w-vw h-dvh">
				<button onClick={()=>document.getElementById("navigation").showModal()} className="absolute z-50 top-10 left-10 inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
					<span className="relative px-3 py-1.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0"><MenuSquare /></span>
				</button>
			</div>

			<dialog id="navigation" className="modal">
				<div className="modal-box">
					<div className="flex flex-col justify-start items-start my-[6rem] mx-11">
						<h1 className="font-title text-3xl tracking-[5px] uppercase inline-block bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text">Where to?</h1>
						<ul>
							{NavData.map(navItem => (
								<SidebarNavButton key={navItem.id} name={navItem.name} link={navItem.link} icon={navItem.icon} type={navItem.type} />
							))}
						</ul>
					</div>
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	)
}

export default Sidebar;