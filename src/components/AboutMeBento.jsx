import React from "react";
import { Spotify } from "react-spotify-embed";
import tailwindLogo from "../assets/tailwindcss.svg";
import reactLogo from "../assets/react.svg";
import bootstrapLogo from "../assets/bootstrap.svg";

// fav tech stacks
// fav designed things
// top 3 spotify songs

// fav shows

// mobile bento: 360*360
// desktop bento: 1200*1200 therefore 1 col/row = 10px

function AboutMeBento() {
  	return (
	 	<div className="aspect-square hidden 2xl:grid 2xl:w-2/5 grid-cols-12 grid-rows-12 gap-4">
			<div className="row-start-1 col-start-1 row-span-5 col-span-5 rounded-xl bg-[#4d1e2c] hover:bg-[#442222] cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center p-4">
				Fav 3 Designed Things
			</div>
			<div className="row-start-1 col-start-6 row-span-3 col-span-3 rounded-xl bg-[#4d1e2c] hover:bg-[#442222] cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center p-4">
				Misc.
			</div>
			<div className="row-start-4 col-start-6 row-span-2 col-span-3 rounded-xl bg-[#4d1e2c] hover:bg-[#442222] cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center p-4">
				PFP?
			</div>
			<div className="row-start-1 col-start-9 row-span-7 col-span-4 rounded-xl bg-[#4d1e2c] hover:bg-[#442222] cursor-default ease-in-out duration-700 text-slate-200 flex flex-col justify-center items-center p-4">
				<div className="aspect-square h-20 rounded-xl bg-[#06B6D4] m-3 flex items-middle justify-center p-3"><img className="h-full w-full" src={tailwindLogo} alt="TailwindCSS Logo" /></div>
				<div className="aspect-square h-20 rounded-xl bg-[#61DAFB] m-3 flex items-middle justify-center p-3"><img className="h-full w-full" src={reactLogo} alt="React.js Logo" /></div>
				<div className="aspect-square h-20 rounded-xl bg-[#7952B3] m-3 flex items-middle justify-center p-3"><img className="h-full w-full" src={bootstrapLogo} alt="Bootstrap Logo" /></div>
			</div>
			<div className="row-start-6 col-start-1 row-span-6 col-span-8 rounded-xl bg-[#4d1e2c] hover:bg-[#442222] cursor-default ease-in-out duration-700 text-slate-200 flex flex-col justify-between items-center p-4">
				<Spotify wide link="https://open.spotify.com/track/5Y35SjAfXjjG0sFQ3KOxmm?si=8a6c496b86624b78" />
				<Spotify wide link="https://open.spotify.com/track/3vkCueOmm7xQDoJ17W1Pm3?si=1a188c7af1084ddc" />
				<Spotify wide link="https://open.spotify.com/track/0tkBOcK7oRVXQJY97zzSvr?si=47a25e084d4d4640" />
			</div>
			<div className="row-start-8 col-start-9 row-span-4 col-span-4 rounded-xl bg-[#4d1e2c] hover:bg-[#442222] cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center p-4">Fav TV Show</div>
		</div>
  	)
};

export default AboutMeBento;