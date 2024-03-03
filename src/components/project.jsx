import React from "react";

//// Must be a reusable component that ingests JSON data as props and renders a single instance for each project
// TODO: Must utilize Router props to properly render the right project based on user selection
//// Must render the following info:
   //// Project title
   //// Link to the deployed version
   //// Link to the GitHub repository
   //// GIF or screenshot of the deployed application

function Project(props) {
   return (
	   <div className="text-slate-200">
         {props.title}, {props.desc}, {props.img}, {props.deployed}, {props.repo}
      </div>
   )
};

export default Project;