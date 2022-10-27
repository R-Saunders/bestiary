import React from "react";
import Data from "../data/beasts.json";
import BeastCard from "./BeastCard";

export default function BeastList() {
	return (
		<section className="beast_list">
			<h2 className="section_header">Featured Beasts</h2>
			<div className="beast_list_inner">
				{Data.beasts.map((props, index) => (
					<BeastCard key={index} props={props} />
				))}
			</div>
		</section>
	);
}
