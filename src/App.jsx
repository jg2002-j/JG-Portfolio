import React from "react";
import header from "./components/header";
import homepage from "./components/homepage";
import projectspage from "./components/projectspage";
import featuredproj from "./components/featuredproj";
import project from "./components/project";
import contactpage from "./components/contactpage";

function App() {
	return (
		<>
			<header />
			<homepage />
			<projectspage>
				<featuredproj />
				<project />
			</projectspage>
			<contactpage />
		</>
	);
}

export default App;