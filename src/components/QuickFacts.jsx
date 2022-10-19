import Data from "../data/beasts.json";

const QuickFacts = () => {
	return (
		<ol>
			{Data.beasts.map((props, index) => (
				<ul key={index}>
					<li>
						<h3>{props.name}</h3>
					</li>
					<li>
						<img src={props.hero_image} alt={props.name}></img>
					</li>
					<li>
						<h4>Locale</h4>
					</li>
					<ul>
						<li>{props.location}</li>
						<li>{props.coordinates}</li>
					</ul>
					<li>
						<h4>Characteristics</h4>
					</li>
					<ol>
						{props.characteristics.map((props, index) => (
							<li key={index}>{props}</li>
						))}
					</ol>
				</ul>
			))}
		</ol>
	);
};

export default QuickFacts;
