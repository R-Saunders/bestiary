import React from "react";
import Data from "../data/beasts.json";
import BeastCard from "./BeastCard";

export default function BeastList() {
	return (
		<section>
			{Data.beasts.map((props, index) => (
				<BeastCard key={index} props={props} />
			))}
		</section>
	);
}
