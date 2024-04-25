import React from "react";
import tailwindLogo from "../assets/tailwindcss.svg";
import reactLogo from "../assets/react.svg";
import bootstrapLogo from "../assets/bootstrap.svg";
import pfp from "../assets/pfp.jpg"
import artImg from "../assets/artImg.png";

function AboutMeBento() {

	// States
	const [pokemon, setPokemon] = React.useState(pokeOptions[Math.floor(Math.random() * pokeOptions.length)]);
	
	// Functions
	const pokeOptions = ["gengar", "rayquaza", "piplup", "lucario", "lugia", "bulbasaur", "chansey", "arcanine", "lapras", "snorlax", "dragonair", "crobat", "kingdra", "tyranitar", "grovyle", "ralts", "altaria", "kyogre", "groudon", "chimchar", "luxray", "garchomp", "electivire", "magmortar", "mamoswine", "zoroark"]
   const switchPoke = () => {
		let newPokeOptions = pokeOptions.filter((ele) => ele !== pokemon)
		let newSelection = newPokeOptions[Math.floor(Math.random() * newPokeOptions.length)];
		setPokemon(newSelection);
   };

	return (
	 	<div className="aspect-square hidden lg:grid lg:w-2/5 grid-cols-12 grid-rows-12 gap-4">
			<div className="row-start-1 col-start-1 row-span-5 col-span-5 rounded-xl bg-stone-300 bg-opacity-10 cursor-default ease-in-out duration-700 text-slate-200 flex flex-col justify-center items-center p-4">
				<a className="aspect-square h-full w-full" target="_blank" href="https://www.dropbox.com/s/p69ej2jq38mdphi/JG-SKETCHBOOK-01.pdf?dl=0"><img className="h-full w-full object-cover rounded-lg" src={artImg} alt="My Art Portfolio" /></a>
			</div>
			<div className="row-start-1 col-start-6 row-span-3 col-span-3 rounded-xl bg-stone-300 bg-opacity-10 cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center p-4">
				<img className="h-full w-full rounded-lg" src={pfp} alt="Profile picture" />
			</div>	
			<div className="row-start-4 col-start-6 row-span-2 col-span-3 rounded-xl bg-stone-300 bg-opacity-10 cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center p-4 group">
				<button className="scale-75 ease-in-out duration-700 group-hover:scale-100" type="button" onClick={() => switchPoke()}><img className="w-full h-full" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon}.gif`} alt={`${pokemon}`}></img></button>
			</div>
			<div className="row-start-1 col-start-9 row-span-7 col-span-4 rounded-xl bg-stone-300 bg-opacity-10 cursor-default ease-in-out duration-700 text-slate-200 flex flex-col justify-around items-center p-4">
				<div className="aspect-square max-h-[4vw] rounded-xl bg-[#06B6D4] flex items-middle justify-center p-3 group hover:rotate-12 ease-in-out duration-700"><img className="h-full w-full group-hover:-rotate-[24deg] ease-in-out duration-700" src={tailwindLogo} alt="TailwindCSS Logo" /></div>
				<div className="aspect-square max-h-[4vw] rounded-xl bg-[#61DAFB] flex items-middle justify-center p-3 group hover:rotate-12 ease-in-out duration-700"><img className="h-full w-full group-hover:-rotate-[24deg] ease-in-out duration-700" src={reactLogo} alt="React.js Logo" /></div>
				<div className="aspect-square max-h-[4vw] rounded-xl bg-[#7952B3] flex items-middle justify-center p-3 group hover:rotate-12 ease-in-out duration-700"><img className="h-full w-full group-hover:-rotate-[24deg] ease-in-out duration-700" src={bootstrapLogo} alt="Bootstrap Logo" /></div>
			</div>
			<div className="row-start-6 col-start-1 row-span-6 col-span-8 rounded-xl bg-stone-300 bg-opacity-10 cursor-default ease-in-out duration-700 text-slate-200 flex flex-col justify-between items-center p-4">
			</div>
			<div className="row-start-8 col-start-9 row-span-4 col-span-4 rounded-xl bg-stone-300 bg-opacity-10 cursor-default ease-in-out duration-700 text-slate-200 flex justify-center items-center p-4">
				<img className="h-full w-full object-cover overflow-hidden rounded-lg" src="https://www.ghibli.jp/gallery/howl039.jpg" alt="Howl's Moving Castle" />
			</div>
		</div>
  	)
};

export default AboutMeBento;