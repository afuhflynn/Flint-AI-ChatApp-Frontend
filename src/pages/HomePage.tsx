import { useEffect, useRef } from "react";
import { Features, HeroSection } from "../components";

const HomePage = () => {
  const topRef = useRef<null | HTMLSpanElement>(null);
  useEffect(() => {
    const handleScrollToBottom = () => {
      if (topRef && topRef.current) {
        topRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    };
    handleScrollToBottom();
  }, []);

  return (
    <div className="flex flex-col w-full bg-primary-bg-light dark:bg-primary-bg-dark">
      <span ref={topRef} />
      <HeroSection />
      <Features />
    </div>
  );
};

export default HomePage;
