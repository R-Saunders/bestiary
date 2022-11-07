import React from "react";

const QuickFacts = ({ props }) => {
	return (
		<section>
			<div>
				<h3>Name</h3>
				<p>{props.name}</p>
				<img src={props.image} alt={props.name}></img>
				<h4>Location</h4>
				<p>{props.location}</p>
				<h3>Mythos</h3>
				<p>{props.mythology}</p>
				<h4>Characteristics</h4>
				<p>{props.characteristics}</p>
			</div>
		</section>
	);
};

export default QuickFacts;
