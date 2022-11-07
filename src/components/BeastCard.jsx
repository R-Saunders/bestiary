import React from "react";
import BeastName from "./BeastName";
import BeastImg from "./BeastImg";

const BeastCard = ({ props }) => {
	const btnTarget = props._id;
	const btnURL = `http://localhost:8011/read?id=${btnTarget}`;
	return (
		<div className="beast_card">
			<BeastImg props={props} />
			<BeastName props={props} />
			<a href={btnURL} className="see_more">
				See More
			</a>
		</div>
	);
};

export default BeastCard;
