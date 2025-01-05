const Button = ({
  text,
  onClick,
  type = "button",
  className,
  disabled,
}: {
  text: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`auth-btn !${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
