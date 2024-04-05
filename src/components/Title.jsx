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
		<div className="flex justify-center items-center">
			<h1 ref={JGtitle} className="font-title text-[10vw] whitespace-nowrap text-center uppercase text-stone-700 mx-8 select-none flex gap-x-2 lg:gap-x-8">
				<span className="text-stone-800">J</span>
				<span className="text-stone-800">a</span>
				<span className="text-stone-800">i</span>
				<span className=" ms-[3vw]">G</span>
				<span className="">a</span>
				<span className="">n</span>
				<span className="">d</span>
				<span className="">h</span>
				<span className="">i</span>
			</h1>
		</div>
  	)
};

export default Title;