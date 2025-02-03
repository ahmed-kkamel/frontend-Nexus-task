import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/Movie';

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <Link href={`/movie/${movie.imdbID}`}>
            <div className="relative flex items-center p-4 bg-gray-800 bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-yellow-400/30">
                <div className="relative w-20 h-28">
                    <Image
                        src={movie.Poster !== 'N/A' ? movie.Poster : '/fallback.webp'}
                        alt={movie.Title}
                        className="rounded-md border border-gray-600 shadow-lg object-cover"
                        priority
                        fill
                    />
                </div>
                <div className="ml-4">
                    <h2 className="text-lg font-semibold text-yellow-300">{movie.Title}</h2>
                    <p className="text-sm text-gray-400">{movie.Year}</p>
                </div>
            </div>
        </Link>
    );
}