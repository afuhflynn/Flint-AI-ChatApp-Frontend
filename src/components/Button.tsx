const Button = ({
  text,
  onClick,
  type = "button",
  className,
}: {
  text: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
}) => {
  return (
    <button type={type} className={`auth-btn !${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
