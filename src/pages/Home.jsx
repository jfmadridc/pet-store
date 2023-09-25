import ListsPosts from "../components/ListPosts";

const Home = () => {
	return (
		<main>
			<div className="container">
				<h2 className="title-page">Pet noticias</h2>
			</div>

			<ListsPosts url={"/posts"} />
		</main>
	);
};

export default Home;
