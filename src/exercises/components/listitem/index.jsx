import React from "react";
import styles from "./styles.module.css";

const ListItem = ({ className, ...props }) => {
	return (
		<li className={[styles.List, className].join(" ")}>
			{children}
			<span className={styles.listItemPrimary}>{children}</span>
			<span className={styles.listItemSecondary}>{children}</span>
		</li>
	);
};

export default ListItem;
