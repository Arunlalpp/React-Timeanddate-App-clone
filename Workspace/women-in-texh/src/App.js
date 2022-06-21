import "./App.css";
import CardContainer from "./components/CardContainer";
import FocuseArea from "./components/FocuseArea";
import MissionEmpover from "./components/MissionEmpover";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<MissionEmpover />
			<FocuseArea />
			<CardContainer />
		</div>
	);
}

export default App;
