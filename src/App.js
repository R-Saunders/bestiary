import "./App.css";
import BeastList from "./components/BeastList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blurb from "./components/Blurb";
import Contribute from "./components/Contribute";


// @TODO: Create a <Layout></Layout> Component

const App = () => {
	return (
		<div>
			<Header />
			<BeastList />
			<Blurb />
			<Contribute />
			<Footer />
		</div>
	);
};

export default App;
