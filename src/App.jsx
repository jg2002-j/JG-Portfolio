import React from "react";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import Experience from "./pages/Experience";
import ContactPage from "./pages/ContactPage";
import "./css/index.css";

function App() {
	return (
		<div className="">
			<HomePage />
			<AboutMePage />
			<ProjectsPage />
			<Experience />
			<ContactPage />
		</div>
	);
}

export default App;