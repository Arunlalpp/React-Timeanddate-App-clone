import "./App.css";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import MobileCard from "./components/MobileCard";
import MobileHeader from "./components/MobileHeader";
import MobileScrollCard from "./components/MobileScrollCard";
import Navlink from "./components/Navlink";
import TableConatiner from "./components/TableConatiner";
import TopPicksCard from "./components/TopPicksCard";

function App() {
	return (
		<div>
			<MobileHeader />
			<TopPicksCard />
			<MobileCard />
			<MobileScrollCard />
			<Header />
			<Navlink />
			<LeftContainer />
			<CardContainer />
			<TableConatiner />
			<Footer />
		</div>
	);
}

export default App;
