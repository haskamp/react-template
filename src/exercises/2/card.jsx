import React from "react";
import styles from "./styles.module.css";

const Card = ({
	HeaderIcon,
	HeaderHeader,
	HeaderSubhead,
	HeaderBookmark,
	CardImageProfile,
	CardTitle,
	CardSubtitle,
	CardDescription,
	CardSkills,
}) => {
	const [hidden, setHidden] = React.useState(true); // [Boolean, function]

	return (
		<div className={styles.Card}>
			<header className={styles.CardHeader}>
				<img className={styles.HeaderIcon} src="" alt="" />
				<h2 className={styles.HeaderName}></h2>
				<h3 className={styles.HeaderPrize}></h3>
				<svg className={styles.HeaderBookmark}></svg>
			</header>
			{hidden ? (
				<main className={stylesCardContent}>
					<figure className={styles.CardImage}>
						<img className={styles.CardImageProfile} src="" alt="Kite Instructor" />
					</figure>
					<h2 className={styles.CardTitle}></h2>
					<h3 className={styles.CardSubtitle}></h3>
					<p className={styles.CardDescription}></p>
					<ul className={styles.CardSkills}></ul>
				</main>
			) : null}
			;
			<footer className={styles.CardActions}>
				<button className={styles.ButtonInfo} onClick={() => setHidden(!hidden)}>
					{hidden ? "Show Infos" : "Hide Info"};
				</button>
				<button className={styles.ButtonBook}></button>
			</footer>
		</div>
	);
};

export default Card;
