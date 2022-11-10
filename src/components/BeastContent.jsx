import React from "react";
import { useState } from "react";
import axios from "axios";

const BeastContent = () => {
	const [API, setAPI] = useState([]);
	const Data = async () => {
		const apiURL =
			"https://bestiary-api.netlify.app/.netlify/functions/api/read";
		try {
			const reqData = await axios.get(apiURL);
			setAPI(reqData.data);
		} catch (error) {
			console.log(error);
		}
	};
	Data();
	return (
		<div>
			{" "}
			{API.map((props, index) => (
				<p key={index}>{props.content}</p>
			))}
		</div>
	);
};

export default BeastContent;
