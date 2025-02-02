import { Features, HeroSection } from "../components";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full bg-primary-bg-light dark:bg-primary-bg-dark">
      <HeroSection />
      <Features />
    </div>
  );
};

export default HomePage;
