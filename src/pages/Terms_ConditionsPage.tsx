import { useRef } from "react";
import { useScrollIntoView } from "../hooks";

const Terms_ConditionsPage: React.FC = () => {
  const topRef = useRef<null | HTMLSpanElement>(null);
  useScrollIntoView(topRef.current); // Scrolls to the top of the page on page load
  return (
    <section className="flex flex-col bg-primary-bg-light dark:bg-primary-bg-dark">
      <span ref={topRef} />
      <div className="max-w-screen-lg mx-auto text-center md:px-8 paddingX">
        <h1 className="mb-8 text-3xl font-semibold md:text-4xl text-text-primary-light dark:text-text-primary-dark">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            1. Introduction
          </h2>
          <p className="text-lg text-text-primary-light dark:text-text-primary-dark">
            Welcome to Flint AI! By accessing or using our services, you agree
            to be bound by the terms and conditions set forth below. Please read
            them carefully before using our platform.
          </p>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            2. Use of Services
          </h2>
          <div className="text-lg text-left text-text-primary-light dark:text-text-primary-dark">
            <p className="mb-4">
              You agree to use our services in compliance with all applicable
              laws and regulations. You are solely responsible for any activity
              that occurs under your account.
            </p>
            <p>
              Unauthorized use, duplication, or redistribution of the content
              provided on Flint AI is strictly prohibited.
            </p>
          </div>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            3. Account Responsibilities
          </h2>
          <ul className="space-y-4 text-lg text-left list-disc list-inside text-text-primary-light dark:text-text-primary-dark">
            <li>
              You must provide accurate and complete information when creating
              an account.
            </li>
            <li>
              You are responsible for maintaining the security of your account
              credentials.
            </li>
            <li>
              Flint AI is not liable for any losses or damages caused by
              unauthorized account access.
            </li>
          </ul>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            4. Intellectual Property
          </h2>
          <p className="text-lg text-text-primary-light dark:text-text-primary-dark">
            All content on this platform, including but not limited to text,
            graphics, logos, and software, is the property of Flint AI or its
            licensors. Unauthorized use or reproduction is prohibited.
          </p>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            5. Limitation of Liability
          </h2>
          <p className="text-lg text-text-primary-light dark:text-text-primary-dark">
            Flint AI is not liable for any direct, indirect, incidental, or
            consequential damages arising from the use or inability to use our
            services.
          </p>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            6. Governing Law
          </h2>
          <p className="text-lg text-text-primary-light dark:text-text-primary-dark">
            These terms are governed by and construed in accordance with the
            laws of your jurisdiction. Any disputes will be resolved in the
            appropriate courts.
          </p>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            7. Changes to Terms
          </h2>
          <p className="text-lg text-text-primary-light dark:text-text-primary-dark">
            Flint AI reserves the right to update or modify these terms at any
            time. Continued use of the platform constitutes acceptance of the
            revised terms.
          </p>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            8. Contact Us
          </h2>
          <p className="text-lg text-text-primary-light dark:text-text-primary-dark">
            If you have any questions about these terms, please contact us at
            flyinnsafuh@gmail.com.
          </p>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </section>
      </div>
    </section>
  );
};

export default Terms_ConditionsPage;
