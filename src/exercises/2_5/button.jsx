import React from "react";
import "styles";

const Button = () => {
	// Create a React Component
	const [clicked, setClicked] = React.useState(false); // Get React State properties in Form of

	return (
		<button className={"Button"} onClick={() => setClicked(!clicked)}>
			{clicked ? "Clicked" : "Not clicked"}
		</button>
	);
};

export default Button;
