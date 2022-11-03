import React from "react";
import { useState } from "react";
import axios from "axios";

const QuickFacts = () => {
	const [API, setAPI] = useState([]);
	const Data = async () => {
		const apiURL = "http://localhost:8989/read";
		try {
			const reqData = await axios.get(apiURL);
			setAPI(reqData.data);
		} catch (error) {
			console.log(error);
		}
	};
	Data();
	return (
		<section>
			{API.map((props, index) => (
				<div key={index}>
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
			))}
		</section>
	);
};

export default QuickFacts;
