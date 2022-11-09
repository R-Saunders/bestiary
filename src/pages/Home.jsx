import HeroImg from "../components/HeroImg";
import BeastList from "../components/BeastList";
import React from "react";
import Welcome from "../components/Welcome";

const Home = () => {
	return (
		<main>
			<HeroImg />
			<Welcome />
			<BeastList />
		</main>
	);
};

export default Home;
