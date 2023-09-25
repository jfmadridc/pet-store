import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Error from "./pages/Error";
import Header from "./components/Header";
import Post from "./pages/Post";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/posts/:id" element={<Post />} />
				<Route path="/categoria/:id" />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
