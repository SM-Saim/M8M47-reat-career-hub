import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-auto space-y-5">
      <h1 className="text-4xl font-semibold">Opps!</h1>
      <Link to="/">
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
