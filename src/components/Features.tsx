import React from "react";
import CTAButton from "./CTAButton";
import { FeaturesData } from "../constants/constants";

const Features: React.FC = () => {
  return (
    <section className="w-screen h-auto py-16 text-gray-900 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black dark:text-white flex-grow">
      <div className="flex flex-col items-center justify-between px-6 mx-auto text-center max-w-7xl paddingX">
        {/* Features Heading */}
        <h2 className="mb-6 text-4xl leading-tight text-center md:mb-8 sm:text-5xl font-headings md:text-6xl">
          Features That Make Your Life Easier
        </h2>

        {/* Feature List */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Item */}
          {FeaturesData.map((item, index) => (
            <div key={`item-${item.id}-${index}`} className="card">
              <h3 className="card-heading !capitalize">{item.title}</h3>
              <p className="card-p">{item.p}</p>
              <CTAButton />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
