import React from "react";
import styles from "./styles.module.css";

const Typography = ({ children, variant, ...props }) => {
	const Variant = variant;
	return <Variant>{children}</Variant>;
};

export default Typography;

function Test(a, b, c) {}

Test(c, 2, a);
