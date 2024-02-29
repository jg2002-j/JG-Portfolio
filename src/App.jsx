import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import FeaturedProject from "./components/FeaturedProject";
import Project from "./components/Project";
import ContactPage from "./components/ContactPage";

function App() {
	return (
		<>
			<Header />
			<HomePage />
			<ProjectsPage />
			<FeaturedProject />
			<Project />
			<ContactPage />
		</>
	);
}

export default App;