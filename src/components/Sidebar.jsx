import React from "react";
import { NavIcons, NavItems } from "./NavData";
import { MenuSquare } from "lucide-react";



const SidebarNavButton = (props) => {
   return (
		<li>
			<a href={props.link} className="rounded-lg px-4 py-2 mx-5 my-10 group hover:scale-110 ease-in-out duration-700 flex justify-start items-center">
				{NavIcons(props)}
				<h2 className="ms-5 font-title text-xl tracking-widest text-stone-200 group-hover:tracking-[0.5rem] origin-start ease-in-out duration-700">
					{props.name}
				</h2>
			</a>
		</li>
   )
}

function Sidebar(props) {
  	return (
	 	<div className="fixed top-0 left-0 w-vw h-dvh">
			<button onClick={() => props.toggleSidebar(props.state)} className="absolute z-50 top-10 left-10 inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
				<span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					<MenuSquare />
				</span>
			</button>
			<div className={`${props.state} z-30 h-screen w-screen fixed top-0 left-0 bg-neutral-700 cursor-not-allowed opacity-40`}></div>
			<nav className={`${props.state} bg-[#1e2025] fixed top-0 z-40 min-h-[1/2] w-vw 2xl:w-1/5 rounded-xl m-5 ease-in-out duration-[2000]`}>
				<div className="flex flex-col justify-start items-start my-[6rem] mx-11">
					<h1 className="font-title text-3xl tracking-[5px] uppercase inline-block bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text">Where to?</h1>
					<ul>
						{NavItems.map(navItem => (
							<SidebarNavButton key={navItem.id} name={navItem.name} link={navItem.link} icon={navItem.icon} />
						))}
					</ul>
				</div>
			</nav>
		</div>
  	)
};

export default Sidebar;