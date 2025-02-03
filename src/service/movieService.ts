import { MovieDetails } from "@/types/MovieDetails";

export async function getMovieDetails(
  imdbID: string
): Promise<MovieDetails | null> {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
  );
  const data = await response.json();
  return data.Response === "True" ? data : null;
}

export const fetchMovies = async (searchTerm: string) => {
  if (searchTerm.length < 3) return { movies: [], error: null };

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      return { movies: data.Search, error: null };
    } else {
      return { movies: [], error: data.Error || "No movies found." };
    }
  } catch {
    return { movies: [], error: "Failed to fetch movies. Please try again." };
  }
};
