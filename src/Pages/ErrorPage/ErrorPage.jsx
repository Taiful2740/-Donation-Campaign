import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error 404 Sorry</h1>
      <h2>We Misplaced That Page</h2>
      <p>
        Our digital librarian seems to have misplaced the page you requested.
        Stay with us, and we'll help you rediscover it.
      </p>
      <Link to="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
