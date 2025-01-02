import { FAQSection, NavBar } from "../components";

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="max-w-screen-lg mx-auto mb-4 text-center md:px-8 paddingX">
        <FAQSection />
      </div>
    </div>
  );
};

export default FAQPage;
