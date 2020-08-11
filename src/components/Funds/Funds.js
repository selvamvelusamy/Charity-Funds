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
		} else {
            alert("You don't have sufficient balance to reduce your balance");
        }
    };
    
    const addCharityBalanceHandler = () => {
		if (charityContext.personalBalance > 0) {
            charityContext.addCharityBalance();
		} else {
            alert("You don't have sufficient balance to fund");
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
					onClick={addCharityBalanceHandler}
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
