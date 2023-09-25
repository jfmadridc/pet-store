import ListsPosts from "../components/ListPosts";
import ListCategories from "../components/ListCategoires";

const Home = () => {
	return (
		<main>
			<div className="container">
				<h2 className="title-page">Pet noticias</h2>
			</div>
			<ListCategories />
			<ListsPosts url={"/posts"} />
		</main>
	);
};

export default Home;
