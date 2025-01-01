const CTAButton = ({ className }: { className?: string }) => {
  return (
    <button type="button" className={`cta-btn !${className}`}>
      Get Started for Free
    </button>
  );
};

export default CTAButton;
