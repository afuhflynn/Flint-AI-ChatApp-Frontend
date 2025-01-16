import { useRef } from "react";
import { Features, HeroSection } from "../components";
import { useScrollIntoView } from "../hooks";

const HomePage = () => {
  const topRef = useRef<null | HTMLSpanElement>(null);
  useScrollIntoView(topRef.current);

  return (
    <div className="flex-1 w-full bg-primary-bg-light dark:bg-primary-bg-dark">
      <span ref={topRef} />
      <HeroSection />
      <Features />
    </div>
  );
};

export default HomePage;
