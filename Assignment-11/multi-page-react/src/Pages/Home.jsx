import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Multi-Page React App
      </h1>

      <p className="text-gray-600 mb-8 text-center max-w-lg">
        This application demonstrates routing using React Router,
        parameterized routes, and dynamic navigation.
      </p>

      <div className="space-x-4">
        <Link
          to="/about"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          About
        </Link>

        <Link
          to="/users"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          View Users
        </Link>
      </div>
    </div>
  );
}

export default Home;
