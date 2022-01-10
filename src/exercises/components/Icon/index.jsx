import React from "react";
 // import styles from "";
import { createRenderer } from "react-dom/test-utils";

const Icon = ({type, source, alt, pathd, className}) => {
		switch (type) {
			default:
				return(
				<figure>
					<img className={[styles.img, className].join(" ")} src={source} alt={alt}/>
				</figure>
				);
			case type:
				return(
				<figure>
					<svg className={[styles.svg, className].join(" ")} viewBox={0 0 48 48}>
						<path d={pathd}/>
					</svg>
				</figure>
				);
		}
};

export default Icon;
