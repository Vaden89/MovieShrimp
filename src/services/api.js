import axios from "axios";

const API_KEY = "9f3c4400325ca9bb061714a3b63ea8c8";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

export const fetchMovies = async (endpoint, params = {}) => {
  try {
    const res = await api.get(endpoint, { params });
    return res.data.results;
  } catch (error) {
    throw new Error(
      "There was an error with requesting your movie title",
      error
    );
  }
};

export const fetchMoviesByGenre = async (genreId) => {
  try {
    const endpoint = "/discover/movie";
    const params = { with_genres: genreId };
    const res = await api.get(endpoint, { params });
    return res.data.results;
  } catch (error) {
    throw new Error("There was an error fetching movies by genre", error);
  }
};
