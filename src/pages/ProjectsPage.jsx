import React from "react";
import AllProjects from "../components/AllProjects";
import Navbar from "../components/Navbar";

function ProjectsPage() {
   return (
      <>
         <Navbar/>
         <div className="min-h-dvh">
            <AllProjects />
         </div>      
      </>
)
};

export default ProjectsPage;