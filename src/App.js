import './App.css';
import BeastList from './components/BeastList';
import Header from './components/Header';
import Footer from './components/Footer'

// @TODO: Create a <Layout></Layout> Component

function App() {
  return (
    <div>
      <Header/>
      <BeastList/>
      <Footer/>
    </div>
  );
}

export default App;