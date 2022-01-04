import React from "react";
import styles from "./styles.module.css";

const Button = ({ children, className, ...props }) => {
	// Create a React Component
	const [clicked, setClicked] = React.useState(false); // Get React State properties in Form of

	return (
		<button
			{...props}
			className={[styles.Button, className].join(" ")}
			onClick={() => setClicked(!clicked)}
		>
			{children}
			{clicked ? "Clicked" : "Not clicked"}
		</button>
	);
};

export default Button;
