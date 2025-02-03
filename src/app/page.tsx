'use client';
import SearchInput from '@/components/SearchInput';
import MovieList from '@/components/MovieList';
import { useMovieSearch } from '@/hooks/useMovieSearch';

export default function MovieSearch() {


  const { movies, error, loading, searchTerm, setSearchTerm } = useMovieSearch();

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold md:font-extrabold text-yellow-400 mb-4 md:mb-6">
        Movie Finder
      </h1>

      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <p className="mt-4 text-yellow-300 animate-pulse text-lg">Fetching movies...</p>}
      {error && <p className="mt-4 text-red-400 text-lg">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}
