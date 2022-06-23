import "./App.css";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navlink from "./components/Navlink";

function App() {
	return (
		<div>
			<Header />
			<Navlink />
			<CardContainer />
			<Footer />
		</div>
	);
}

export default App;
