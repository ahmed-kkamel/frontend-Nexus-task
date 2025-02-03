import { notFound } from 'next/navigation';
import { getMovieDetails } from '@/service/movieService';
import MoviePoster from '@/components/MoviePoster';
import MovieDetails from '@/components/MovieDetails';
import MovieGenres from '@/components/MovieGenres';
import MovieRating from '@/components/MovieRating';
import IMDbButton from '@/components/IMDbButton';

export default async function MoviePage({
    params,
}: {
    params: Promise<{ imdbID: string }>
}) {
    const { imdbID } = await params;

    if (!imdbID) return notFound();

    const movie = await getMovieDetails(imdbID);
    if (!movie) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-950 text-white p-6 text-center">
                <h1 className="text-4xl font-bold">Oops! Movie Not Found</h1>
                <p className="text-gray-300">Try another search.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-14 bg-gradient-to-r from-gray-900 to-gray-950 text-white">
            <MoviePoster poster={movie.Poster} title={movie.Title} />
            <div className="w-full md:w-2/3 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    {movie.Title} <span className="text-gray-400">({movie.Year})</span>
                </h1>
                <p className="italic text-gray-400 text-lg">{movie.Plot}</p>
                <MovieGenres genres={movie.Genre} />
                <div className="flex items-center gap-6">
                    <MovieRating rating={movie.imdbRating} />
                    <IMDbButton imdbID={movie.imdbID} />
                </div>
                <MovieDetails movie={movie} />
            </div>
        </div>
    );
}
