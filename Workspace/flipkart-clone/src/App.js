import "./App.css";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import Navlink from "./components/Navlink";

function App() {
	return (
		<div>
			<Header />
			<Navlink />
			<LeftContainer />
			<CardContainer />
			<Footer />
		</div>
	);
}

export default App;
