import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-auto gap-5 text-center text-gray-900 md:gap-4 dark:text-white paddingY bg-primary-bg-light dark:bg-primary-bg-dark">
      {/* Heading */}
      {/* Animate the heading repeatedly (changing opacity from 0 to 100 on page load and do some crazy animations) */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="text-4xl leading-tight text-center sm:text-5xl font-headings md:text-7xl"
      >
        Your Intelligent <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
            ease: "linear",
          }}
        >
          Chat Companion
        </motion.span>
      </motion.h1>

      {/* Subtext */}
      <div className="max-w-2xl mx-auto mt-8 dark:text-text-primary-dark text-text-primary-light text-opacity-30 opacity-80">
        <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300 md:text-lg">
          Tired of using expensive intelligent Virtual friends?
          <br />
          For just a small price, you gain access to the most advanced AI models
          that make your life easier by helping with:{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400 text-[20px]">
            Automation of simple tasks
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400 text-[20px]">
            Study advice
          </span>
          , and much more...
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-row justify-start items-center w-full md:h-[13%] h-[20%] gap-6 mt-12 md:flex-row md:justify-start">
        {/* Search Section */}
        <form className="flex flex-col items-start justify-center w-full md:h-full h-[9rem] gap-4 px-3 md:gap-6 md:flex-row md:items-center md:paddingX mb-8 md:mb-0">
          <div className="flex flex-row items-center h-full md:w-[60%] w-full overflow-hidden bg-transparent border border-opacity-20 border-solid shadow-lg dark:bg-neutral-dark-grey-dark dark:shadow-sm text-text-primary-light dark:text-text-primary-dark border-neutral-light-grey-light dark:border-neutral-light-grey-dark dark:border-opacity-30 rounded-2xl relative">
            <input
              type="text"
              required
              placeholder="Ask AI anything..."
              className="flex-grow px-6 py-4 text-lg bg-transparent outline-none text-text-primary-light dark:text-text-primary-dark"
            />
            <motion.button
              type="submit"
              className="absolute top-0 bottom-0 right-0 items-center hidden h-full gap-2 px-6 font-medium text-white transition duration-200 ease-in-out bg-blue-500 rounded-r-lg shadow-lg md:flex hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              <span>Ask AI</span>
              {/* Animate arrow to move foward and backward while hover */}

              <motion.span whileHover={{ x: 5 }}>
                <ArrowRight />
              </motion.span>
            </motion.button>
          </div>
          <div className="flex flex-row items-center h-full">
            {/* Get Started Button */}
            <CTAButton className={"h-full"} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
