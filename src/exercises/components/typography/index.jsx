import React from "react";
import styles from "./styles.module.css";

const typoTag = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	body1: "p",
	body2: "span",
};

const Typography = ({
	children,
	variant = "body1",
	component: Component = typoTag[variant] ?? "span",
	...props
}) => {
	return (
		<Component className={[styles.Default, styles[variant], props.className].join(" ")}>
			{children}
		</Component>
	);
};

export default Typography;
