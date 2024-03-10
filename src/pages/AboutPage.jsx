import React from "react";

import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";

import { Link, Route, Routes } from 'react-router-dom';
import NavItems from "../data/NavItems.json";

function AboutPage() {
	return (
		<>
			<div className="2xl:mx-60 m-20 flex flex-col justify-start items-center" id="about">
            <h1 className="font-title text-center tracking-[0.7rem] text-5xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">About Me</h1>
         </div>
			<AboutMe />
			{/* <Link to={NavItems[5].route} role="button" className="p-4 m-2 rounded-lg bg-slate-50">Show {NavItems[5].title}</Link>
			<Link to="" role="button" className="p-4 m-2 rounded-lg bg-slate-50">Hide {NavItems[5].title}</Link>
			<Routes>
        		<Route path={NavItems[5].route} element={<Experience />} />
      	</Routes> */}
			<Experience />
		</>
  	)
};

export default AboutPage;