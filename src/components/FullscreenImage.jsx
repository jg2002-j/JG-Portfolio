import React from "react";

function FullscreenImage(props) {
	return (
		<>
			<div className="h-dvh w-vw">
				<img src={props.img} alt="Fullscreen image" className="h-full" />
			</div>
		</>
	)
};

export default FullscreenImage;