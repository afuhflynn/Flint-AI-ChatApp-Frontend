import { Loader2 } from "lucide-react";

const CustomLoader1 = () => {
  return <Loader2 className="text-text-primary-dark animate-spin" />;
};
const CustomLoader2 = () => {
  return (
    <div className="animate-spin size-[2.8rem] rounded-full border-solid border-t-[3px] border-primary-accent-blue-light" />
  );
};

export { CustomLoader1, CustomLoader2 };
