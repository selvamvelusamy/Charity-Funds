import React from "react";

import "./Header.css";

const Header = (props) => (
	<div className="titlebar-container">
		<span className="title">{props.children}</span>
	</div>
);

export default Header;
