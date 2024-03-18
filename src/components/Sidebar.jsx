import React from "react";
import { NavIcons } from "./NavIcons";
import NavData from "../data/NavItems.json";
import { MenuSquare } from "lucide-react";
import { NavLink } from "react-router-dom";


const SidebarNavButton = (props) => {
	return(
		<li>
			<NavLink to={props.link} className="rounded-lg px-4 py-2 mt-8 group ease-in-out duration-300 flex justify-start items-center">
				{NavIcons(props.icon, "text-transparent group-hover:text-[#cdd2d4] duration-50")}
				<h2 className="group-hover:ms-10 font-title tracking-[0.275rem] text-2xl text-stone-400 hover:text-[#cdd2d4] origin-start ease-in-out duration-700">{props.name}</h2>
			</NavLink>
		</li>
	)
}

function Sidebar() {
	return (
		<>
			<div className="fixed top-0 left-0 w-vw h-dvh">
				<button onClick={()=>document.getElementById("navigation").showModal()} className="absolute z-50 top-10 left-10 inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white">
					<span className="relative px-3 py-1.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0"><MenuSquare /></span>
				</button>
			</div>

			<dialog id="navigation" className="modal justify-start px-2">
				<div className="modal-box h-screen lg:w-[30vw] rounded-e-[3rem]">
					<div className="flex flex-col justify-start items-start mt-[6rem] mx-10">
						<h1 className="font-title text-3xl tracking-[5px] uppercase inline-block bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text">Where to?</h1>
						<ul> 	
							{NavData.map(navItem => (
								<SidebarNavButton key={navItem.id} name={navItem.name} link={navItem.link} icon={navItem.icon} type={navItem.type} />
							))}
						</ul>
					</div>
					<form method="dialog">
						<button className="absolute right-8 top-8 btn btn-ghost rounded-tr-[calc(1.3rem)]">✕</button>
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