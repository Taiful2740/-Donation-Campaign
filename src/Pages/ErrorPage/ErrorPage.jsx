import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <div className="text-center mt-[200px]">
        <h1 className="text-6xl">Error 404 Sorry</h1>
        <h2 className="text-4xl">We Misplaced That Page</h2>
        <p>
          Our digital librarian seems to have misplaced the page you requested.
          Stay with us, and we'll help you rediscover it.
        </p>
      </div>
      <Link to="/">
        <button className="bg-gray-500 text-white rounded-lg px-2 py-1">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
