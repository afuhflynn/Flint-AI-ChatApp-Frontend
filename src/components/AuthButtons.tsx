import { authNavItems } from "../constants/constants";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
  btnClassName?: string;
}

const AuthButtons = ({ className, btnClassName }: Props) => {
  const navigate = useNavigate();
  const handleRouting = (routePath: string) => {
    navigate(routePath);
  };
  return (
    <div className={className}>
      {authNavItems.map((item, index) => (
        <button
          onClick={() =>
            handleRouting(
              item.label === "Log in" ? "/auth/log-in" : "/auth/sign-up"
            )
          }
          className={`text-[15px] rounded-3xl hover:scale-[1.02] ${
            item.label === "Log in"
              ? "ring-1 ring-primary-bg-dark dark:ring-primary-bg-light bg-transparent dark:text-text-primary-dark text-text-primary-light w-[6rem] h-[2.5rem]"
              : "bg-primary-accent-blue-light dark:bg-primary-accent-blue-dark dark:hover:bg-primary-light-blue-dark hover:bg-primary-light-blue-light text-text-primary-dark w-[10rem] h-[3rem]"
          } ${btnClassName}`}
          type="button"
          key={`${index}-${item.id}-${item.label}`}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AuthButtons;
