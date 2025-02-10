import React, { FormEvent, useState } from "react";
import { Button, Input, ModalHeading } from "../components";
import { maxMsgInput } from "../constants/constants";

const ContactusPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-primary-bg-light dark:bg-primary-bg-dark">
      <div className="relative w-full h-full paddingX">
        {/* Card with different background colors for light and dark modes */}
        <div className="max-w-screen-lg mx-auto mt-8 mb-4 p-6 rounded-xl shadow-lg md:w-96 w-[96%] bg-transparent dark:bg-neutral-dark-grey-dark dark:shadow-sm">
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
                className={`flex flex-row items-center justify-between w-full px-2 -mt-3 mb-4 text-sm ${
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
              <Button
                type="submit"
                text="Send Message"
                className={`${
                  (formData.email.trim() === "" ||
                    formData.message.trim() === "" ||
                    formData.name.trim() === "") &&
                  "opacity-50"
                }`}
                disabled={
                  formData.email.trim() === "" ||
                  formData.message.trim() === "" ||
                  formData.name.trim() === ""
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactusPage;
