import React from "react";



function Sidebar(props) {
  	return (
	 	<div className="border-2 border-pink-600 sticky w-vw h-dvh">
			<button onClick={() => props.toggleSidebar(props.state)} className="sticky z-50 top-10 left-10 inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
				<span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Toggle sidebar
				</span>
			</button>
			<nav className={`${props.state} bg-slate-300 fixed top-0 z-40 h-2/3 w-vw 2xl:w-1/4 rounded-xl m-5 ease-in-out duration-[2000]`}>
				<div className="flex flex-col justify-start items-start border-2 my-[5rem] mx-11 border-black">
					<h1 className="font-title text-md">hello</h1>
				</div>
			</nav>
		</div>
  	)
};

export default Sidebar;