import React, { useState } from "react";

export const CharityContext = React.createContext({
	personalBalance: 0,
	charityBalance: 0,
	addPersonalBalance: () => {},
	addCharityBalance: () => {},
	removePersonalBalance: () => {},
});

const CharityContextProvider = (props) => {
	const [balance, changeBalance] = useState({
		personalBalance: 0,
		charityBalance: 0,
	});

	const addPersonalBalance = () => {
		changeBalance((prevData) => ({
			...prevData,
			personalBalance: prevData.personalBalance + 10000,
		}));
	};

	const addCharityBalance = () => {
		changeBalance((prevData) => ({
			charityBalance: prevData.charityBalance + prevData.personalBalance,
			personalBalance: 0,
		}));
	};

	const removePersonalBalance = () => {
		changeBalance((prevData) => ({
			...prevData,
			personalBalance: prevData.personalBalance - 10000,
		}));
	};

	return (
		<CharityContext.Provider
			value={{
				personalBalance: balance.personalBalance,
				charityBalance: balance.charityBalance,
				addPersonalBalance,
				addCharityBalance,
				removePersonalBalance,
			}}
		>
			{props.children}
		</CharityContext.Provider>
	);
};

export default CharityContextProvider;
