import { Link } from "react-router-dom";
import { Button } from "../components";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-background text-text">
      <div className="w-96 p-6 bg-secondary rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Account Deletion Reason</h1>
        <form>
          <textarea
            placeholder="Please tell us why you're leaving..."
            className="w-full py-2 px-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={4}
          ></textarea>
          <Button text="Submit Reason" type="submit" onClick={() => {}} />
        </form>
        <p className="mt-4 text-sm">
          Changed your mind?{" "}
          <Link to="/dashboard" className="text-accent">
            Go back to Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DeleteAccount;
