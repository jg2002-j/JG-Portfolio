import React from "react";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import Sidebar from "./components/Sidebar";
import ContactMe from "./components/ContactMe";
import NavItems from "./data/NavItems.json";

import "./css/index.css";

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack"; 
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP,Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

function App() {

	const [sidebarState, setsidebarState] = React.useState("hidden");
   const toggleSidebar = (state) => {
      if (state == "hidden") {setsidebarState("visible");} 
      else if (state == "visible") {setsidebarState("hidden");}
   };

	return (
		<Router>
			<Routes>
				<Route path={NavItems[0].route} element={<HomePage/>} />
				<Route path={NavItems[1].route} element={<ProjectsPage/>} />
				<Route path={NavItems[4].route} element={<AboutPage/>} />
				<Route path={NavItems[6].route} element={<ContactPage/>} />
			</Routes>
			{/* <Sidebar state={sidebarState} toggleSidebar={toggleSidebar} />
			<ContactMe /> */}
		</Router>
	);
}

export default App;