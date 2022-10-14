import Desc from "./BeastDesc";
import Data from "../data/beasts.json";
import Name from "./BeastName";
import React from "react";

export default function Blurb() {
	return (
		<section>
			{Data.beasts.map((props, index) => (
				<div>
					<Name key={index} props={props} />
					<Desc key={index} props={props} />
				</div>
			))}
		</section>
	);
}
