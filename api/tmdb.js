import { TMDB_API_KEY } from "@env";

const API_KEY = TMDB_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";

export const fetchTopRatedMovies = async () => {
  console.log("Fetching top-rated movies from TMDB API", API_KEY);
  const response = await fetch(
    `${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  const data = await response.json();
  return data.results;
};
