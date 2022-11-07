import QuickFacts from "../components/QuickFacts";
import BeastDesc from "../components/BeastDesc";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Entry = () => {
	const [singleAPI, setSingleApi] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		singleEntry();
	}, []);

	const singleEntry = async () => {
		const _entry = await axios.get(`http://localhost:8989/read/${id}`);
		console.log(_entry);
		setSingleApi(_entry.data);
	};

	return (
		<main>
			<QuickFacts props={singleAPI} />
			<BeastDesc props={singleAPI} />
		</main>
	);
};

export default Entry;
