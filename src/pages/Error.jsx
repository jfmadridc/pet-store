import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

const Error = () => {
	return (
		<main className="container flex flex--center flex--column main-404">
			<img className="dog-image" src={image} alt="Doguito" />
			<p className="notfound-text">Sorry this page doesn't exist</p>
			<a className="notfound-text" href="http://localhost:3000">
				Go back Home
			</a>
		</main>
	);
};

export default Error;
