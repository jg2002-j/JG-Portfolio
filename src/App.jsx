import React from "react";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import Experience from "./pages/Experience";
import ContactPage from "./pages/ContactPage";
import Sidebar from "./components/Sidebar";

import "./css/index.css";

// GSAP
import { gsap } from "gsap";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin);

function App() {

	const [sidebarState, setsidebarState] = React.useState("hidden");
   const toggleSidebar = (state) => {
      if (state == "hidden") {setsidebarState("visible");} 
      else if (state == "visible") {setsidebarState("hidden");}
   };

	return (
		<>
         <Sidebar state={sidebarState} toggleSidebar={toggleSidebar} />
			<HomePage  />
			<AboutMePage />
			<ProjectsPage />
			<Experience />
			<ContactPage />
		</>
	);
}

export default App;