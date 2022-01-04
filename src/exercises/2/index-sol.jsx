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

const names = Array.from({ length: 5 }, () => rand);

const items = Array.from({ length: 5 }, () => {
	return {
		headline: "",
		description: "irgendwas",
		image: "https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	};
});

const Exercise = () => {
	return (
		<div className={styles.Cards}>
			{items.map((item) => (
				<Card
					headline={item.headline} // Beginn Props-Bereich
					description={item.description}
					image={item.image}
				/>
			))}
		</div>
	);
};

export default Exercise;
