import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
	const location = window.location;
	console.log(location.pathname);

	const Router = () => {
		if (location.pathname === "/") {
			return <Home />;
		} else {
			return <Sobre />;
		}
	};

	return <>{Router()}</>;
}

export default App;
