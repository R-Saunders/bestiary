import React from "react";
import BeastName from "./BeastName";
import BeastImg from "./BeastImg";
import { Link } from "react-router-dom";

const BeastCard = ({ props }) => {
	const btnTarget = props._id;
	return (
		<div className="beast_card">
			<BeastImg props={props} />
			<BeastName props={props} />
			<Link to={`/entry/${btnTarget}`} className="see_more">
				See More
			</Link>
		</div>
	);
};

export default BeastCard;
