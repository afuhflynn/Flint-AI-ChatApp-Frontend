import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <p className="text-sm text-gray-600 dark:text-gray-400">
      &copy; {new Date().getFullYear()}{" "}
      <Link to="/" className="italic underline">
        Flint AI
      </Link>
      . All Rights Reserved.
    </p>
  );
};

export default CopyRight;
