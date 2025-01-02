import { useState } from "react";
import { faqData } from "../constants/constants";
import { ChevronDown, ChevronUp } from "lucide-react";
import ModalHeading from "./ModalHeading";

// FAQ Section Component
const FAQSection = () => {
  const [activeId, setActiveId] = useState<null | number>(null);

  const toggleAnswer = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-4xl p-6 mx-auto mt-8 mb-4 bg-transparent rounded-lg shadow-md dark:bg-neutral-dark-grey-dark dark:shadow-sm ">
      <ModalHeading text="Frequently Asked Questions" />
      {faqData.map(({ id, label, answer }) => (
        <div
          key={id}
          className="py-4 border-b border-b-border-opacity-50 border-b-border-solid border-b-border-neutral-light-grey-light dark:border-b-border-neutral-light-grey-dark dark:border-opacity-40 last:border-none"
        >
          <button
            onClick={() => toggleAnswer(id)}
            className="flex items-center justify-between w-full text-left focus:outline-none"
          >
            <span className="text-lg font-semibold modal-text">{label}</span>
            <span className="modal-text">
              {activeId === id ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
          {activeId === id && (
            <p className="mt-3 text-left transition-all duration-300 dark:text-text-secondary-dark text-text-secondary-light">
              {answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
