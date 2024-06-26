import React from "react";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import NavItems from "./data/NavItems.json";

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

	return (
		<Router>
			<Routes>
				<Route path={NavItems[0].route} element={<HomePage/>} />
				<Route path={NavItems[1].route} element={<ProjectsPage/>} />
				<Route path={NavItems[2].route} element={<AboutPage/>} />
				<Route path={NavItems[3].route} element={<ContactPage/>} />
			</Routes>
		</Router>
	);
}

export default App;