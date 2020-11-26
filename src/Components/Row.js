import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Components/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerURL, setTrailerURL] = useState("");

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchURL]);
	//we have to mention fetchURL inside [] in useEffect because it is a var coming outside of the useEffect scope and it needs to every time change for every row so to get new set of data.
	// console.table(movies);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerURL) {
			setTrailerURL("");
		} else {
			movieTrailer(movie?.name || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerURL(urlParams.get("v"));
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row__posters">
				{movies.map((movie) => {
					return (
						<img
							key={movie.id}
							onClick={() => handleClick(movie)}
							className={`row__poster ${isLargeRow && "row__posterLarge"}`}
							src={`${base_URL}${
								isLargeRow ? movie.poster_path : movie.backdrop_path
							}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
			{trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
		</div>
	);
}

export default Row;
