import React from "react";

import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";

function AboutPage() {
	return (
		<>
			<Navbar/>
			<AboutMe />
			<Skills/>
			{/* <Experience /> */}
		</>
  	)
};

export default AboutPage;