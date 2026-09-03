import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fffaf3] px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#7a3d10]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-[#7a3d10] px-6 py-3 font-medium text-white transition hover:bg-[#5f2f0c]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}