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
		<div className="flex flex-col font-title text-[8vw] leading-none text-stone-600 select-none ">
			<h1 ref={JGtitle} className="flex gap-x-3">
				<span className="text-stone-400">J</span>
				<span className="text-stone-400">a</span>
				<span className="text-stone-400">i</span>
			</h1>
			<h1 className="flex gap-x-3">
				<span className="">G</span>
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