export default function MovieGenres({ genres }: { genres: string }) {
    return (
        <div className="flex flex-wrap gap-2">
            {genres.split(', ').map((genre) => (
                <span key={genre} className="px-3 py-1 text-sm font-semibold bg-red-600 text-white rounded-full">
                    {genre}
                </span>
            ))}
        </div>
    );
}
