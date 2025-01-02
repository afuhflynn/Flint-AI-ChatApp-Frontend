import { Link } from "react-router-dom";
import { Button, Input } from "../components";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <header className="p-4 bg-primary text-white flex justify-between">
        <h1 className="text-xl font-semibold">Settings</h1>
        <Link to="/dashboard" className="text-accent">
          Back to Dashboard
        </Link>
      </header>
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">User Settings</h2>
        <form>
          <Input
            type="text"
            placeholder="Update your name"
            onChange={() => {}}
            value=""
          />
          <Input
            type="email"
            placeholder="Update your email"
            onChange={() => {}}
            value=""
          />
          <Button text="Save Changes" type="submit" onClick={() => {}} />
        </form>
      </main>
    </div>
  );
};

export default SettingsPage;
