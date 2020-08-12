import React from "react";

import "./TitleBar.css";

const Header = (props) => (
	<div className="titlebar-container">
		<span className="title">{props.children}</span>
	</div>
);

export default Header;
