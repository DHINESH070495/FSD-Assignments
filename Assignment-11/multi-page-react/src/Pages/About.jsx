import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          About This Application
        </h1>

        <p className="text-gray-600 mb-6">
          This project showcases multi-page routing in React using
          React Router. It includes navigation,and reusable components.
        </p>

        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default About;
