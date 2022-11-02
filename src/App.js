import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import BeastList from "./components/BeastList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blurb from "./components/Blurb";
import Contribute from "./components/Contribute";
import HeroImg from "./components/HeroImg";
import QuickFacts from "./components/QuickFacts";
import BeastBody from "./components/BeastBody";
import entryForm from './components/EntryForm';

// @TODO: Create a <Layout></Layout> Component

const App = () => {
	return (
		<div>
			<Header />
			<main>
			<HeroImg/>
			<BeastList />
			<Contribute />
			</main>
			<Footer />
			<Blurb />
			<QuickFacts />
			<BeastBody/>
			<entryForm/>
		</div>
	);
};

export default App;
