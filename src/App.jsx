import React from "react";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import Experience from "./pages/Experience";
import ContactPage from "./pages/ContactPage";
import Sidebar from "./components/Sidebar";
import NavItems from "./data/NavItems.json";

import "./css/index.css";

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
		<Router>
         <Sidebar state={sidebarState} toggleSidebar={toggleSidebar} />
			<Routes>
				<Route path={NavItems[0].link} element={<HomePage/>} />
				<Route path={NavItems[1].link} element={<AboutMePage/>} />
				<Route path={NavItems[2].link} element={<ProjectsPage/>} />
				<Route path={NavItems[3].link} element={<Experience/>} />
				<Route path={NavItems[4].link} element={<ContactPage/>} />
			</Routes>
		</Router>
	);
}

export default App;