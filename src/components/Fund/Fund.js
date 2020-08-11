import React, { useContext } from "react";

import "./Fund.css";
import { CharityContext } from "../../contexts/CharityContext/CharityContext";

const Fund = (props) => {
	const charityContext = useContext(CharityContext);
	return (
		<div className="fund-container">
			<div className="title">{props.for}</div>
			<div className="amount">
				{props.for === "Balance"
					? charityContext.personalBalance
					: charityContext.charityBalance}
			</div>
		</div>
	);
};

export default Fund;
