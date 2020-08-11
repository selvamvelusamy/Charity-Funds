import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import TitleBar from "../TitleBar/TitleBar";
import "./Funds.css";
import Fund from "../Fund/Fund";
import { CharityContext } from "../../contexts/CharityContext/CharityContext";

const Funds = () => {
	const charityContext = useContext(CharityContext);

	const removeBalanceHandler = () => {
		if (charityContext.personalBalance > 0) {
			charityContext.removePersonalBalance();
		}
	};
	return (
		<>
			<TitleBar>ABC Charity</TitleBar>
			<div className="funds-container">
				<Fund for={"Balance"}></Fund>
				<Fund for={"Charity"}></Fund>
			</div>
			<div className="action-buttons">
				<Button
					onClick={charityContext.addPersonalBalance}
					className="action"
					variant="outlined"
					color="secondary"
				>
					+ 10000
				</Button>
				<Button
					onClick={removeBalanceHandler}
					className="action"
					variant="outlined"
					color="secondary"
				>
					- 10000
				</Button>
				<Button
					onClick={charityContext.addCharityBalance}
					className="action"
					variant="outlined"
					color="secondary"
				>
					Donate
				</Button>
			</div>
		</>
	);
};

export default Funds;
