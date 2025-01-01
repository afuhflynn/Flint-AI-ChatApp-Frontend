import React from "react";
import CTAButton from "./CTAButton";

const Features: React.FC = () => {
  return (
    <section className="w-screen py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black paddingX">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Features Heading */}
        <h2 className="mb-6 text-4xl leading-tight text-center md:mb-8 sm:text-5xl font-headings md:text-6xl">
          Features That Make Your Life Easier
        </h2>

        {/* Feature List */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Item */}
          <div className="card">
            <h3 className="card-heading">Automation</h3>
            <p className="card-p">
              Save time by automating repetitive tasks with advanced AI models
              tailored to your needs.
            </p>
            <CTAButton />
          </div>

          <div className="card">
            <h3 className="card-heading">Study Advice</h3>
            <p className="card-p">
              Receive personalized study guidance to optimize learning and
              improve productivity.
            </p>
            <CTAButton />
          </div>

          <div className="card">
            <h3 className="card-heading">Virtual Friend</h3>
            <p className="card-p">
              Enjoy engaging, interactive conversations with a highly
              intelligent virtual companion.
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
