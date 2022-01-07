import React from "react";

const Checkbox = ({ label, ...props }) => {
	return (
		<div>
			<input {...props} type="checkbox" id="input1" />

			<label htmlFor="input1">{label}</label>
		</div>
	);
};

export default Checkbox;
