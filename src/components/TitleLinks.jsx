import React from "react";
import NavIcons from "../components/NavIcons";
import NavItems from "../data/NavItems.json";
import { NavLink } from "react-router-dom";


function TitleLinks() {

	NavItems.map((navItem, index) => {
		
	})


	return (
		<div className="p-10 h-full grid justify-center items-center gap-10 help">
			<div className="help col-start-1 row-start-1 bg-stone-300 bg-opacity-10 rounded-lg aspect-square min-w-12 w-full p-5">
				
			</div>
			<div className="help col-start-2 row-start-1 bg-stone-300 bg-opacity-10 rounded-lg aspect-square min-w-12 w-full p-5">
				
			</div>
			<div className="help col-start-1 row-start-2 bg-stone-300 bg-opacity-10 rounded-lg aspect-square min-w-12 w-full p-5">
				
			</div>
			<div className="help col-start-2 row-start-2 bg-stone-300 bg-opacity-10 rounded-lg aspect-square min-w-12 w-full p-5">
				
			</div>
			<div className="help col-start-3 row-start-1 bg-stone-300 bg-opacity-10 rounded-lg aspect-square min-w-12 w-full p-5">
				
			</div>
		</div>
	)
}

export default TitleLinks;