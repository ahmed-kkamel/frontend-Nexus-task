import Image from 'next/image';

export default function MoviePoster({ poster, title }: { poster: string; title: string }) {
    return (
        <div className="w-full md:w-1/3 flex justify-center">
            <Image
                src={poster !== 'N/A' ? poster : '/fallback.webp'}
                alt={title}
                width={320}
                height={480}
                className="rounded-lg shadow-lg"
                priority
            />
        </div>
    );
}
