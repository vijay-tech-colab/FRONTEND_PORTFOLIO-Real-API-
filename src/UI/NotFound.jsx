import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h1 className="text-7xl font-bold text-green-500 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
