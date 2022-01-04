import React from "react";
import styles from "./styles.module.css";

const Card = ({ headline, description, image }) => {
	const [hidden, setHidden] = React.useState(false); // [Boolean, function]
	return (
		<div className={styles.Card}>
			<figure className={styles.CardImageHolder}>
				<img className={styles.CardImage} src={image} alt="Kite Instructor" />
			</figure>
			<div className={styles.CardHeadline}>
				<h2>{headline}</h2>
			</div>
			{hidden ? <div className={styles.CardDescription}>{description}</div> : null}
			<div className={styles.CardActions}>
				<button className={styles.ActionButton} onClick={() => setHidden(!hidden)}>
					{hidden ? "Hide Skills" : "Show Skills"}
				</button>
			</div>
		</div>
	);
};

export default Card;
