import React from "react";
import NavIcons from "./NavIcons";
import NavItems from "../data/NavItems.json";
import { MenuSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<div className="z-50 fixed left-5 top-5 h-12 flex items-center justify-center gap-5 group">
				<div className="h-full aspect-square rounded-lg bg-stone-300 bg-opacity-10 hover:bg-stone-900 hover:bg-opacity-75 hover:border-opacity-100 border-2 border-stone-400 border-opacity-0 text-stone-500 hover:text-stone-400 duration-700 noise flex items-center justify-center">
					<MenuSquare className="h-full w-full p-[30%]"/>
				</div>
				{NavItems.map((navItem, index) => (
					<NavLink key={index} to={navItem.link} className="h-full aspect-square rounded-lg bg-stone-300 bg-opacity-10 hover:bg-stone-900 hover:bg-opacity-75 hover:border-opacity-100 border-2 border-stone-400 border-opacity-0 text-stone-500 hover:text-stone-400 duration-700 noise flex items-center justify-center">
						{NavIcons(navItem.icon,"h-full w-full p-[30%]")}
					</NavLink>
				))}
			</div>
		</>
	)
}

export default Navbar;