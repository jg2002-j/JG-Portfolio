import React from "react";
import projects from "../data/Projects.json"
import FeaturedProject from "../components/FeaturedProject";
import AllProjects from "../components/AllProjects";



//// Must render six instances of the Project component dynamically
//// Be sure to store your project details data in a JSON file and import it into your project

function ProjectsPage() {

   // const [ project, setProject ] = React.useState()
   
   const chooseProjfnct = (index) => {
      console.log(index)
      console.log(projects[index])
      // document.getElementById("featuredprojimg").scrollIntoView();
   }

   return (
      <>
         <div className="2xl:mx-60 m-20 flex flex-col justify-start items-center" id="projects">
            <h1 className="font-title text-center tracking-[0.7rem] text-6xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">My Work</h1>
         </div>
         {/* <Link to={NavItems[2].route} role="button" className="p-4 m-2 rounded-lg bg-slate-50">Show {NavItems[2].name}</Link>
         <Link to={NavItems[3].route} role="button" className="p-4 m-2 rounded-lg bg-slate-50">Show {NavItems[3].name}</Link>
			<Link to="" role="button" className="p-4 m-2 rounded-lg bg-slate-50">Hide All</Link>
			<Routes>
        		<Route path={NavItems[2].route} element={<FeaturedProject />} />
        		<Route path={NavItems[3].route} element={<AllProjects />} />
      	</Routes> */}
         {/* <FeaturedProject project={project} /> */}
         <AllProjects chooseProjfnct={chooseProjfnct} />
      </>      
   )
};

export default ProjectsPage;