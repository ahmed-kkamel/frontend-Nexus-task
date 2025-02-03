import Link from 'next/link';

export default function IMDbButton({ imdbID }: { imdbID: string }) {
    return (
        <Link href={`https://www.imdb.com/title/${imdbID}/`} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-5 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                </svg>
                View on IMDb
            </button>
        </Link>
    );
}
