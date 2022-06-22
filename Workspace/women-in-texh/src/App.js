import "./App.css";
import FocuseArea from "./components/FocuseArea";
import MissionEmpover from "./components/MissionEmpover";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import WomenTechGlobal from "./components/WomenTechGlobal";
import WomenTechGrowing from "./components/WomenTechGrowing";
import WomenTechpatronage from "./components/WomenTechpatronage";
import NewsCardContainer from "./components/NewsCardContainer";
import PastEvents from "./components/PastEvents";
import CompanyLogos from "./components/CompanyLogos";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<MissionEmpover />
			<FocuseArea />
			<CardContainer />
			<WomenTechGlobal />
			<WomenTechGrowing />
			<WomenTechpatronage />
			<NewsCardContainer />
			<PastEvents />
			<CompanyLogos />
			<Footer />
		</div>
	);
}

export default App;
