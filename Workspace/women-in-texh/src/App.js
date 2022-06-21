import "./App.css";
import FocuseArea from "./components/FocuseArea";
import MissionEmpover from "./components/MissionEmpover";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import WomenTechGlobal from "./components/WomenTechGlobal";
import WomenTechGrowing from "./components/WomenTechGrowing";

function App() {
	return (
		<div>
			<Navbar />
			<MissionEmpover />
			<FocuseArea />
			<CardContainer />
			<WomenTechGlobal />
			<WomenTechGrowing />
		</div>
	);
}

export default App;
