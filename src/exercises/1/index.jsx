import React from "react";
import "./styles.css";

/**
 * ## Card
 *  1. Create a card with an image, a headline and a description
 *  2. Add a button
 *      When the user clicks the button
 *      Then the description toggles
 *      And The button text changes
 */
const Exercise = () => {
	const [hidden, setHidden] = React.useState(false); // [Boolean, function]
	return (
		<div className={"Card"}>
			<figure className={"CardImageHolder"}>
				<img
					className={"CardImage"}
					src="https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80"
					alt="People kiting"
				/>
			</figure>
			<div className={"card-headline"}>
				<h3>Surfing</h3>
			</div>
			{hidden ? (
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur
						cumque dolore doloribus explicabo molestiae nisi quidem vel? A aperiam
						cumque ducimus fugiat fugit laboriosam mollitia necessitatibus odio pariatur
						vero.
					</p>
				</div>
			) : null}
			<div className={"card-actions"}>
				<button onClick={() => setHidden(!hidden)}>{hidden ? "Hide" : "Show"}</button>
			</div>
		</div>
	);
};

export default Exercise;
