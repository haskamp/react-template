import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import Button from "../button";
import Typography from "../typography";

const Header = () => {
	const pageActual = window.location.href.split("/")[3];
	return (
		<div className={styles.wrapper}>
			<div>
				<Link to={`./pages/portfolio`}></Link>
			</div>
			<Typography variant={"body1"} component={"h1"}>
				{pageActual}
			</Typography>
			<nav className={"nav"}>
				<Link to={"../"}>
					<i> / {"home"}</i>
				</Link>
				<Link to={"/"}>
					<i> / {pageActual}</i>
				</Link>
			</nav>

			<Button>
				<Link to={"/projects"}>{"Projects"}</Link>
			</Button>
		</div>
	);
};

export default Header;
