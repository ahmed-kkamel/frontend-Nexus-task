'use client';

interface SearchInputProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export default function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchTerm(query);
    };

    return (
        <div className="relative w-full max-w-lg">
            <input
                type="text"
                placeholder="Search for a movie..."
                className="w-full p-4 pl-12 rounded-full shadow-lg bg-gray-800 text-white border border-gray-600 outline-none transition-all"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <span className="absolute left-4 top-[15px] text-xl">🔍</span>
        </div>
    );
}
