import React, { FormEvent, useState } from "react";
import { Button, Footer, Input, ModalHeading, NavBar } from "../components";

const ContactusPage: React.FC = () => {
  const maxMsgInput = 250;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (name: string, value: string) => {
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
      <div className="w-full h-full paddingX">
        {/* Card with different background colors for light and dark modes */}
        <div className="modal">
          <ModalHeading text="Send Us a Message" />
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <label htmlFor="name" className="modal-text">
                Your Name
              </label>
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  name="name"
                  onChange={(name, value) => handleInputChange(name, value)}
                />
              </div>
            </div>
            <div className="input-row">
              <label htmlFor="email" className="modal-text">
                Your Email Address
              </label>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  name="email"
                  onChange={(name, value) => handleInputChange(name, value)}
                />
              </div>
            </div>
            <div className="input-row">
              <label htmlFor="message" className="modal-text">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                placeholder="Your Message..."
                required
                rows={5}
                maxLength={maxMsgInput}
                className="custom-input"
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
              <Button type="submit" text="Send Message..." onClick={() => {}} />
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
