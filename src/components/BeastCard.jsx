import React from "react";
import Name from "./BeastName";
import BeastImg from "./BeastImg";

const BeastCard = ({ props }) => {
	return (
		<div>
			<BeastImg props={props} />
			<Name props={props} />
		</div>
	);
};

export default BeastCard;
