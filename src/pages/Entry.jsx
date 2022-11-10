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
		const _entry = await axios.get(
			`https://bestiary-api.netlify.app/.netlify/functions/api/read/${id}`
		);
		console.log(_entry);
		setSingleApi(_entry.data);
	};

	return (
		<main>
			<section className="page_container">
				<div className="entry_container">
					<div
						id="torn_edge_banner"
						className="torn_container torn_left torn_right"
					>
						<div></div>
						<div className="banner_text_container">
							<span className="banner_text">
								<QuickFacts props={singleAPI} />
								<BeastDesc props={singleAPI} />
							</span>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Entry;
