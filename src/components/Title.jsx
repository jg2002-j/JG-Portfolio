import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Title() {

	const JGtitle = useRef(null)
   useGSAP(() => {
      gsap.to(JGtitle.current, {
         text: {
            value: "Portfolio",
            newClass: "text-slate-500",
            speed: 1,
         },
         scrollTrigger: {
            trigger: JGtitle.current,
            start: 'center 35%',
            end: 'center 15%',
            scrub: true,
            // delay: 3,
            // markers: true,
         },
      });
   })

  	return (
		<div className="border-2">
			<div className="flex justify-center items-center overflow-hidden">
				<h1 ref={JGtitle} className="font-title text-[15vw] whitespace-nowrap text-center tracking-[24px] uppercase mix-blend-difference text-slate-200 mx-8 select-none duration-500 ease-in-out">Jai Gandhi</h1>
			</div>
		
		</div>
  	)
};

export default Title;