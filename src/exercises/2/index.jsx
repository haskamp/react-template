import React from "react";
import styles from "./styles.module.css";
import Card from "./card.jsx";

/**
 * ## Cards
 * 1. Reuse the card from the previous exercise
 * - Create a reusable component with these properties:
 *   - headline
 *   - description
 *   - image
 *
 * 2. Create a Responsive Grid with 5 cards
 * - ! Make sure that there are no errors about the `key` property in the web-console
 */

const instructors = Array.from({ length: 5 }, () => {
	return {
		icon: "3 Icons",
		name: "Lennard",
		prize: "50€",
		bookmark: "icon",
	};
});

const Exercise = () => {
	return (
		<div>
			{instructors.map((instructor) => {
				return <Card HeaderIcon={instructor.icon} />;
			})}
			}
		</div>
	);
};

export default Exercise;
