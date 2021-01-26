import React from "react";
import Loader from "react-loader-spinner";

function Loading() {
	return (
		<Loader
			className="loader"
			type="TailSpin"
			color="#333"
			height={80}
			width={80}
		/>
	);
}

export default Loading;
