import { Features, Footer, HeroSection, NavBar } from "../components";

const HomePage = () => {
  return (
    <div className="flex flex-col items-start w-full h-full justify-bteween dark:text-white">
      <NavBar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
