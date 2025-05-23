import { useNavigate } from "react-router-dom";

const CTAButton = ({ className }: { className?: string }) => {
  const navigate = useNavigate();

  const handleRouting = (routePath: string) => {
    navigate(routePath);
  };
  return (
    <button
      onClick={() => handleRouting("/auth/sign-up")}
      type="button"
      className={`cta-btn !${className}`}
    >
      Get started for free
    </button>
  );
};

export default CTAButton;
