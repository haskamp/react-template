import React from "react";
import styles from "./styles.module.css";

const Button = ({ children, variant, className[variant],  ...props }) => {
	// Create a React Component
	const [clicked, setClicked] = React.useState(false); // Get React State properties in Form of

	return (
		<button onClick={() => setClicked(!clicked)}
				className={[styles.Button, className]}
				{...props}>
			{children}
			{clicked ? "Clicked" : "Not clicked"}
		</button>
	);
};

export default Button;
