import React from "react";

import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Sidebar from "../components/Sidebar";
import Experience from "../components/Experience";

function AboutPage() {
	return (
		<>
			<Sidebar/>
			<AboutMe />
			<Skills/>
			{/* <Experience /> */}
		</>
  	)
};

export default AboutPage;