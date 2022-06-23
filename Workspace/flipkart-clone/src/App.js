import "./App.css";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navlink from "./components/Navlink";
import Pagination from "./components/Pagination";
import RightCards from "./components/RightCards";
import RightContainer from "./components/RightContainer";

function App() {
	return (
		<div>
			<Header />
			<Navlink />
			<RightContainer />
			<RightCards />
			<Pagination />
			<CardContainer />
			<Footer />
		</div>
	);
}

export default App;
