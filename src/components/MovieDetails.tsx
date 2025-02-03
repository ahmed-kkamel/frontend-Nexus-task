import { MovieDetails as MovieType } from '@/types/MovieDetails';

export default function MovieDetails({ movie }: { movie: MovieType }) {
    const details = [
        { label: "Director", value: movie.Director },
        { label: "Writer", value: movie.Writer },
        { label: "Actors", value: movie.Actors },
        { label: "Release Date", value: movie.Released },
        { label: "Runtime", value: movie.Runtime },
        { label: "Language", value: movie.Language },
        { label: "Country", value: movie.Country },
        { label: "Metascore", value: movie.Metascore !== "N/A" ? movie.Metascore : "Not Available" },
        { label: "IMDb Votes", value: movie.imdbVotes },
        { label: "Box Office", value: movie.BoxOffice !== "N/A" ? movie.BoxOffice : "Not Available" },
        { label: "Production", value: movie.Production !== "N/A" ? movie.Production : "Not Available" },
        { label: "DVD Release", value: movie.DVD !== "N/A" ? movie.DVD : "Not Available" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {details.map(({ label, value }) => (
                <p key={label} className="text-gray-300">
                    <span className="font-semibold">{label}:</span> {value}
                </p>
            ))}
        </div>
    );
}
