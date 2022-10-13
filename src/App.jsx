import "./App.css";
import BeastList from "./components/BeastList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blurb from "./components/Blurb";

// @TODO: Create a <Layout></Layout> Component

const App = () => {
	return (
		<div>
			<Header />
			<Blurb />
			<BeastList />
			<Footer />
		</div>
	);
};

export default App;
