import React from "react";
import { Loader } from "lucide-react";

function Loading() {
	return (
		<div className="max-h-full max-w-full m-10 p-10 bg-stone-300 bg-opacity-10 text-stone-400 hover:text-stone-300 rounded-lg flex justify-center items-center gap-5 hover:bg-stone-400 hover:bg-opacity-20 duration-1000">
			<Loader className="animate-spin" />
		</div>
	)
}

export default Loading;