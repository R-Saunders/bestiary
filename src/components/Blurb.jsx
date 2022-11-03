import Desc from "./BeastDesc";
import Name from "./BeastName";
import React from "react";
import { useState } from "react";
import axios from "axios";

const Blurb = () => {
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
				<div>
					<Name key={index} props={props} />
					<Desc key={index} props={props} />
				</div>
			))}
		</section>
	);
};

export default Blurb;
