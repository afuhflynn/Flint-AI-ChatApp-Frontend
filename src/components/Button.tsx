import { CustomLoader1 } from "./CustomLoaders";

const Button = ({
  text,
  onClick,
  type = "button",
  className,
  disabled,
  isLoading,
}: {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      type={type}
      className={`auth-btn ${className}`}
      onClick={onClick}
    >
      {isLoading ? <CustomLoader1 /> : text}
    </button>
  );
};

export default Button;
