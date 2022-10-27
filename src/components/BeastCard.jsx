import React from "react";
import Name from "./BeastName";
import BeastImg from "./BeastImg";

const BeastCard = ({ props }) => {
	return (
		<div className="beast_card">
			<BeastImg props={props} />
			<Name props={props} />
			<button className="see_more">See More</button>
		</div>
	);
};

export default BeastCard;
