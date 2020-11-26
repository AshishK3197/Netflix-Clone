import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Row from "./Components/Row";
import request from "./requests";

function App() {
	return (
		<div className="App">
			{/* <h2>Netflix-Clone</h2> */}
			<Nav />
			<Banner />

			<Row
				title="NETFLIX ORIGINALS"
				fetchURL={request.fetchNetFlixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchURL={request.fetchTrending} />
			<Row title="Top Rated" fetchURL={request.fetchTopRated} />
			<Row title="Action Movies" fetchURL={request.fetchActionMovies} />
			<Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
			<Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
			<Row title="Romantic Movies" fetchURL={request.fetchRomanceMovies} />
			<Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
		</div>
	);
}

export default App;
