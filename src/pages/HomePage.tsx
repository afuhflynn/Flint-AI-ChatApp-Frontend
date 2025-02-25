import { HeroSection } from "../components";
// import {Helmet} from "react-helmet"

const HomePage = () => {
  return (
    <div className="flex flex-col w-full bg-primary-bg-light dark:bg-primary-bg-dark">
      {/*TODO: Implement helmet SEO optimization here and on other pages */}
      <HeroSection />
    </div>
  );
};

export default HomePage;
