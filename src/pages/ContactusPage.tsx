import React, { FormEvent, useState } from "react";
import { Footer, NavBar } from "../components";

const ContactusPage: React.FC = () => {
  const maxMsgInput = 250;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending the form data to a backend.
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen pb-4 bg-primary-bg-light dark:bg-primary-bg-dark">
      <NavBar />
      <div className="w-full md:w-[50%] max-w-screen-lg mx-auto mt-8 px-4 md:mb-4">
        {/* Card with different background colors for light and dark modes */}
        <div className="p-8 border shadow-lg bg-slate-200 dark:bg-neutral-dark-grey-dark rounded-3xl border-primary-light dark:border-primary-dark">
          <h1 className="mb-8 text-3xl font-semibold text-center md:text-4xl text-text-primary-light dark:text-text-primary-dark">
            Contact Us
          </h1>

          {/* Contact Info */}
          <div className="mb-8 space-y-6 text-center">
            <div className="flex flex-col items-start text-lg text-text-primary-light dark:text-text-primary-dark">
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:flyinnsafuh@gmail.com"
                  className="text-primary-accent-blue-light dark:text-primary-accent-blue-dark"
                >
                  Afuh Flyine Tembeng
                </a>
              </p>
              <p className="mb-2">
                Phone:{" "}
                <a
                  href="tel:+237675171796"
                  className="text-primary-accent-blue-light dark:text-primary-accent-blue-dark"
                >
                  +237 675 17 17 96
                </a>
              </p>
              <p>Address: Yaoune, Cameroon</p>
            </div>
          </div>

          {/* Contact Form */}
          <h2 className="mb-6 text-2xl font-semibold text-center text-text-primary-light dark:text-text-primary-dark">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Your Name"
                required
                className="w-full p-3 bg-transparent border outline-none rounded-xl border-text-primary-light dark:border-text-primary-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-primary-light dark:placeholder:text-text-primary-dark"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Your Email"
                required
                className="w-full p-3 bg-transparent border outline-none rounded-xl border-text-primary-light dark:border-text-primary-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-primary-light dark:placeholder:text-text-primary-dark"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                placeholder="Your Message..."
                required
                rows={5}
                maxLength={maxMsgInput}
                className="w-full p-3 bg-transparent border outline-none resize-none rounded-xl border-text-primary-light dark:border-text-primary-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-primary-light dark:placeholder:text-text-primary-dark"
              />
              <div
                className={`flex flex-row items-center justify-between w-full px-2 text-sm ${
                  formData.message.length >= maxMsgInput
                    ? "text-primary-purple-light dark:text-primary-purple-dark"
                    : "text-gray-500 dark:text-gray-300"
                }`}
              >
                <span>Max</span>
                <span>
                  {formData.message.length} / {maxMsgInput}
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-primary-accent-blue-light dark:bg-primary-accent-blue-dark rounded-xl hover:bg-primary-light-blue-light dark:hover:bg-primary-light-blue-dark"
              >
                Send Message...
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div className="mt-6 text-lg text-center text-text-primary-light dark:text-text-primary-dark">
              <p>
                Thank you for reaching out! We'll get back to you as soon as
                possible.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactusPage;
