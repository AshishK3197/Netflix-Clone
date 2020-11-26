import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

//instance.get(/foo-bar) --->  https://api.themoviedb.org/3/foo-bar
//basically appends inside get param to the baseurl of instance obj.

export default instance;
