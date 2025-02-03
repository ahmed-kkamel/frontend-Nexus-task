import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
      <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}
