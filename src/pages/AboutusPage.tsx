import React from "react";
import { Footer, NavBar } from "../components";
import { Link } from "react-router-dom";

const AboutusPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary-bg-light dark:bg-primary-bg-dark">
      <NavBar />
      <div className="max-w-screen-lg mx-auto mb-4 text-center md:px-8 paddingX">
        <h1 className="mb-8 text-3xl font-semibold md:text-4xl text-text-primary-light dark:text-text-primary-dark ">
          About Us
        </h1>
        <p className="mb-4 text-lg text-text-primary-light dark:text-text-primary-dark">
          Welcome to Flint AI, where innovation meets intelligence. We are a
          company dedicated to building powerful AI-driven solutions that
          enhance the way we work and live. Our goal is to provide cutting-edge
          technology that simplifies tasks and improves decision-making for
          businesses and individuals alike.
        </p>
        <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
          Our Mission
        </h2>
        <p className="mb-8 text-lg text-text-primary-light dark:text-text-primary-dark">
          Our mission is to revolutionize industries by providing innovative
          AI-driven products that empower businesses to make data-driven
          decisions and improve their processes. We strive to make complex tasks
          easier, faster, and more efficient through the use of artificial
          intelligence.
        </p>
        <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
          Our Values
        </h2>
        <ul className="flex flex-col items-start space-y-4 text-lg text-left text-text-primary-light dark:text-text-primary-dark">
          <li>
            Innovation: We believe in constantly pushing the boundaries of
            what’s possible with AI technology.
          </li>
          <li>
            Integrity: We conduct our business with the highest standards of
            honesty and transparency.
          </li>
          <li>
            Customer-Centricity: Our customers’ needs drive everything we do,
            from product development to customer service.
          </li>
          <li>
            Collaboration: We believe in teamwork and fostering an environment
            of shared knowledge and creativity.
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center justify-between w-full h-auto my-4 paddingX modal-text">
        <p className="flex flex-row items-center gap-2">
          <span>Have any question?</span>
          <Link
            to="/faqs"
            className="text-primary-accent-blue-dark hover:underline"
          >
            visit our FAQs
          </Link>
        </p>
        <p className="flex flex-row items-center gap-2">
          <span>Read our</span>
          <Link
            to="/terms-conditions"
            className="text-primary-accent-blue-dark hover:underline"
          >
            terms
          </Link>
          <span>and</span>
          <Link
            to="/terms-conditions"
            className="text-primary-accent-blue-dark hover:underline"
          >
            conditions
          </Link>
          <span>of service</span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutusPage;
