import React from "react";


// fav tech stacks
// fav designed things
// top 3 spotify songs
// fav shows

// mobile bento: 360*360
// desktop bento: 1200*1200 therefore 1 col/row = 10px

function AboutMeBento() {
  	return (
	 	<div className="aspect-square max-w-9xl 2xl:w-[2/5] grid grid-cols-12 grid-rows-12 gap-4">
			<div className="row-start-1 col-start-1 row-span-6 col-span-5 rounded-xl border-[#492830] border-4 bg-[#4d1e2c] opacity-50 hover:opacity-100 hover:scale-[1.75] hover:z-10 cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center">Top 3 Designed Things</div>
			<div className="row-start-1 col-start-6 row-span-7 col-span-7 rounded-xl border-[#492830] border-4 bg-[#4d1e2c] opacity-50 hover:opacity-100 hover:scale-[1.75] hover:z-10 cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center">Top 3 Tech Stacks</div>
			<div className="row-start-7 col-start-1 row-span-5 col-span-4 rounded-xl border-[#492830] border-4 bg-[#4d1e2c] opacity-50 hover:opacity-100 hover:scale-[1.75] hover:z-10 cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center">Top 3 Spotify Songs</div>
			<div className="row-start-8 col-start-5 row-span-4 col-span-4 rounded-xl border-[#492830] border-4 bg-[#4d1e2c] opacity-50 hover:opacity-100 hover:scale-[1.75] hover:z-10 cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center">Misc.</div>
			<div className="row-start-8 col-start-9 row-span-4 col-span-4 rounded-xl border-[#492830] border-4 bg-[#4d1e2c] opacity-50 hover:opacity-100 hover:scale-[1.75] hover:z-10 cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center">Fav TV Show</div>
		</div>
  	)
};

export default AboutMeBento;