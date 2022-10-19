import "./App.css";
import BeastList from "./components/BeastList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blurb from "./components/Blurb";
import Contribute from "./components/Contribute";
import HeroImg from "./components/HeroImg";
import QuickFacts from "./components/QuickFacts";


// @TODO: Create a <Layout></Layout> Component

const App = () => {
	return (
		<div>
			<Header />
			<HeroImg/>
			<BeastList />
			<Blurb />
			<Contribute />
			<Footer />
			<QuickFacts />
		</div>
	);
};

export default App;
