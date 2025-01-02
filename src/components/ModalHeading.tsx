const ModalHeading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <h2
    className={`mb-6 text-2xl font-semibold text-left text-text-primary-light dark:text-text-primary-dark ${className}`}
  >
    {text}
  </h2>
);

export default ModalHeading;
