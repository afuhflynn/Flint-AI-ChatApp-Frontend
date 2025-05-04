import globalUserStore from "../store/user.store";
import { HeroSection } from "../components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import {Helmet} from "react-helmet"

const HomePage = () => {
  const { user } = globalUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/c/new-chat");
  }, [user, navigate]);

  return (
    <div className="flex flex-col w-full bg-primary-bg-light dark:bg-primary-bg-dark">
      {/*TODO: Implement helmet SEO optimization here and on other pages */}
      <HeroSection />
    </div>
  );
};

export default HomePage;
