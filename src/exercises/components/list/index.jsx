import React from "react";
import styles from "./styles.module.css";

const List = ({ children, listTitle, ...props }) => {
	return (
		<div>
			<h3>{listTitle}</h3>
			<ul>{children}</ul>
		</div>
	);
};

export default List;
