import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Title() {

	const JGtitle = useRef(null)
   // useGSAP(() => {
   //    gsap.to(JGtitle.current, {

   //    });
   // })

  	return (
		<div className="my-[10vh]">
			<div className="flex justify-center items-center">
				<h1 ref={JGtitle} className="font-title text-[10vw] 2xl:text-[10rem] whitespace-nowrap text-center uppercase mix-blend-difference text-slate-200 mx-8 select-none duration-500 ease-in-out flex gap-x-2 lg:gap-x-8">
					<span className="">J</span>
					<span className="">a</span>
					<span className="">i</span>
					<span className=" ms-[3vw]">G</span>
					<span className="">a</span>
					<span className="">n</span>
					<span className="">d</span>
					<span className="">h</span>
					<span className="">i</span>
				</h1>
			</div>
		</div>
  	)
};

export default Title;