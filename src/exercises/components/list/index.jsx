import React from "react";
import styles from "./styles.module.css";

const List = ({ children, listTitle, ArrayListItems className, ...props }) => {
	return (
		<div>
			<h3>{listTitle}</h3>
			<ul className={[styles.List, className].join(" ")}>
				for I in [] ...
				arraylistItems.map((li) => (
					<li>li</li>
					<ListItem li={arrayLi}/>
				))
				{children}</ul>
		</div>
	);
};

export default List;
