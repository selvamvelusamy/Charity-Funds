import React from "react";

import "./TitleBar.css";

const TitleBar = (props) => (
	<div className="titlebar-container">
		<span className="title">{props.children}</span>
	</div>
);

export default TitleBar;
