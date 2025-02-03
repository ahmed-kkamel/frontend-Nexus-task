export default function MovieRating({ rating }: { rating: string }) {
    return (
        <div className="relative w-14 h-14 flex justify-center items-center">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                <path className="stroke-gray-700" strokeWidth="4" d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" fill="none" />
                <path className="stroke-yellow-400" strokeWidth="4" strokeDasharray={`${(parseFloat(rating) / 10) * 100}, 100`} d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" fill="none" />
            </svg>
            <p className="text-lg font-bold">{rating}</p>
        </div>
    );
}
