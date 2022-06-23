import "./App.css";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navlink from "./components/Navlink";
import RightCards from "./components/RightCards";
import RightContainer from "./components/RightContainer";

function App() {
	return (
		<div>
			<Header />
			<Navlink />
			<RightContainer />
			{/* <CardContainer /> */}
			{/* <Footer /> */}
			<RightCards />
		</div>
	);
}

export default App;
