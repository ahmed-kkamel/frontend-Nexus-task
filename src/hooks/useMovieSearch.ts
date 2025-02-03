import { useState, useEffect, useCallback } from "react";
import { fetchMovies } from "@/service/movieService";
import { Movie } from "@/types/Movie";

export function useMovieSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMovieData = useCallback(async () => {
    setLoading(true);
    const { movies, error } = await fetchMovies(searchTerm);
    setMovies(movies);
    setError(error);
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    const debounceFetch = setTimeout(fetchMovieData, 500);
    return () => clearTimeout(debounceFetch);
  }, [fetchMovieData]);

  return { searchTerm, setSearchTerm, movies, error, loading };
}
