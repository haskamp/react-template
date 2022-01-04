import React from "react";
import styles from "./styles.module.css";

const Typography = ({ children, variant, ...props }) => {
	switch (variant) {
		default:
			return (
				<div>
					<p className={styles.p}>{children}</p>
				</div>
			);
		case "span":
			return (
				<div>
					<span className={styles.span}>{children}</span>
				</div>
			);
	}
};

export default Typography;
