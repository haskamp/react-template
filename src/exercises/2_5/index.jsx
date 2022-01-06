import React from "react";
import Button from "../components/button";
import Typography from "../components/typography";
import Checkbox from "../components/checkbox";
import List from "../components/list";
import ListItem from "../components/list";

import styles from "./styles.css";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */
const Exercise = () => {
	return (
		<div>
			<Button className={styles.irgendwas}>Click me</Button>

			<Typography>Hallo</Typography>

			<Checkbox label={"verstanden?"}></Checkbox>
		</div>
	);
};

export default Exercise;

// {React.createElement(Button, { className: "Hallo", "aria-label": "blau" }, "rot")}
