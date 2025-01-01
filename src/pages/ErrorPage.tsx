// Import necessary libraries
import React from "react";
import { motion } from "framer-motion";
import { LucideCircleArrowLeft } from "lucide-react";
import { errorVideo } from "../assets/videos";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const animationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-transparent md:px-0">
      {/* Animated text */}
      <motion.div
        className="text-center"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="mb-4 text-6xl font-bold text-primary-accent-blue-dark">
          404
        </h1>
        <p className="text-xl text-primary-text text-text-primary-light dark:text-text-primary-dark">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <pre className="mb-2 text-primary-text text-text-primary-light dark:text-text-primary-dark">
          It may have moved permanently
        </pre>
      </motion.div>

      {/* Video Illustration */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <video
          src={errorVideo}
          className="rounded-lg shadow-ShadowRoot-shadow hover:scale-[1.04] hover:opacity-100 opacity-80"
          title="404 robot video"
          autoPlay
          loop
          muted
          width="600"
        />
      </motion.div>

      {/* Button to navigate back */}
      <Link to="/">
        <motion.button
          className="flex flex-row items-center gap-2 px-6 py-3 mt-10 text-lg text-white bg-primary-accent-blue-dark rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-[1.02]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animationVariants}
          transition={{ duration: 1, delay: 1 }}
        >
          <LucideCircleArrowLeft /> Go Back Home
        </motion.button>
      </Link>
    </div>
  );
};

export default ErrorPage;
