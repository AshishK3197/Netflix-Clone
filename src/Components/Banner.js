import axios from "../axios";
import React, { useState, useEffect } from "react";
import request from "../requests";
import "./Banner.css";

function Banner(props) {
	const [movie, setMovie] = useState([]);

	//random movie to be stored inside movie state to display image on the banner.

	useEffect(() => {
		async function fetchData() {
			const requestToServer = await axios.get(request.fetchNetFlixOriginals);

			setMovie(
				requestToServer.data.results[
					Math.floor(Math.random() * requestToServer.data.results.length - 1)
				]
			);

			// console.log(
			// 	requestToServer.data.results[
			// 		Math.floor(Math.random() * requestToServer.data.results.length - 1)
			// 	]
			// );
			return requestToServer;
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
	// console.log(movie);
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner_contents">
				<h1 className="banner_title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner_buttons">
					<button className="banner_button">Play</button>
					<button className="banner_button">My List</button>
				</div>

				<h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
			</div>
			<div className="banner_fadebottom" />
		</header>
	);
}

export default Banner;
