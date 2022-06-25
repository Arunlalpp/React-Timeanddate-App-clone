import "./App.css";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import MobileCard from "./components/MobileCard";
import MobileHeader from "./components/MobileHeader";
import Navlink from "./components/Navlink";
import TableConatiner from "./components/TableConatiner";

function App() {
	return (
		<div>
			{/* <Header />
			<Navlink />
			<LeftContainer />
			<CardContainer />
			<TableConatiner />
			<Footer /> */}
			<MobileHeader />
			<MobileCard />
		</div>
	);
}

export default App;
