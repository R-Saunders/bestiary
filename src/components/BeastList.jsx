import React from "react";
import { useState } from "react";
import axios from "axios";
import BeastCard from "./BeastCard";

export default function BeastList() {
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
		<section className="beast_list">
			<h2 className="section_header">Featured Beasts</h2>
			<div className="beast_list_inner">
				{API.map((props, index) => (
					<BeastCard key={index} props={props} />
				))}
			</div>
		</section>
	);
}
