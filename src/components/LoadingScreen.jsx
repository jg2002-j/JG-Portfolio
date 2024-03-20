import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Loader2 } from "lucide-react";


function LoadingScreen() {

	const tl = useRef();
	const LSRef = useRef(null)
	const LScreenRef = useRef(null);
	const JGRef = useRef(null);
	const PRef = useRef(null);

	useGSAP(() => {
	tl.current = gsap
		.timeline({ delay: 1 })
		.to(LSRef.current, { opacity: 0 })
		.to(JGRef.current, { lineHeight: 1, duration: 1 })
		.to(PRef.current, { lineHeight: 1, duration: 1.5 }, "<")
		.to(LScreenRef.current, { borderRadius: "0 0 50% 50%", y: -120, height: 0, duration: 2 })
		.to([JGRef.current, PRef.current], { opacity: 0, duration: 1 }, "<")
		.reverse();
	});
 
	useEffect(() => {
		tl.current.play()
	}, [])

  	return (
		<div ref={LScreenRef} className="w-full h-dvh z-50 bg-stone-950 noise flex justify-center items-center">
			<div className="flex flex-col gap-5 justify-center items-center">
				<Loader2 ref={LSRef} size={50} className="animate-spin" />
				<h1 ref={JGRef} className="box font-title text-4xl leading-[0] overflow-hidden">Jai Gandhi</h1>
				<h1 ref={PRef} className="box font-title text-5xl leading-[0] overflow-hidden">Portfolio</h1>
			</div>
		</div>
  	)
};

export default LoadingScreen;