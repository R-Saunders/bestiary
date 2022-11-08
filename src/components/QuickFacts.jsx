import React from "react";

const QuickFacts = ({ props }) => {
	return (
		<section className="quick_facts">
			<div>
			<h2 className="quick_facts-name">{props.name}</h2>
			<div className="quick_facts-location">
				<h4>Location:</h4>
				<p>{props.location}</p>
			</div>
			<div className="quick_facts-mythos">
				<h4>Mythos:</h4>
				<p>{props.mythology}</p>
			</div>
			<div className="quick_facts-chars" >
			<h4>Characteristics:</h4>
			<p>{props.characteristics}</p></div></div>
			<div><img className="quick_facts-img" src={props.image} alt={props.name}></img></div>
		</section>
	);
};

export default QuickFacts;
