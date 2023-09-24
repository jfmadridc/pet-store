import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<main className="container flex flex--center flex--column main-404">
			<img className="dog-image" src={image} alt="Doguito" />
			<p className="notfound-text">Sorry this page doesn't exist</p>
			<Link className="notfound-text" to="/">
				Go back Home
			</Link>
		</main>
	);
};

export default Error;
