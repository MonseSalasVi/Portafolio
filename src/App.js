import "./App.scss";
import Nav from "./components/Nav";
import Aboutme from "./Pages/Aboutme/index";
import Proyects from "./Pages/Proyects/index";
import Experience from "./Pages/Experience/index";
import Education from "./Pages/Education/index";

function App() {
	return (
		<div className='container'>
			<Nav />
			<Aboutme />
			<Experience />
			<Proyects />
			<Education />
		</div>
	);
}

export default App;
