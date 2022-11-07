import Desc from "./BeastDesc";
import Name from "./BeastName";
import React from "react";

const Blurb = ({ props }) => {
	return (
		<section>
			<Name props={props} />
			<Desc props={props} />
		</section>
	);
};

export default Blurb;
