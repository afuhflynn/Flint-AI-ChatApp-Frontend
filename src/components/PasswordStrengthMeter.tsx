import { useEffect } from "react";
import globalAppStore from "../store/app.store";

const PasswordStrengthMeter = ({ password }: { password: string }) => {
  const { setIsPasswordValid } = globalAppStore();
  const handleStrengthValue = (): number => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (
      password.match(/[a-z]/) &&
      password.match(/[A-Z]/) &&
      password.match(/[\d]/)
    )
      strength++;
    if (password.match(/[^A-Za-z\d]/) && password.length >= 8) strength++;
    return strength;
  };

  const getColor = (strength: number) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-yellow-500";
    if (strength === 2) return "bg-blue-500";
    if (strength === 3) return "bg-green-500";
  };

  useEffect(() => {
    // Modify the global password validation state
    if (handleStrengthValue() === 3) setIsPasswordValid(true);
  }, [password]);

  return (
    <div className="grid items-center w-full h-auto grid-cols-4 grid-rows-1 gap-4 mb-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`${
            index <= handleStrengthValue()
              ? getColor(handleStrengthValue())
              : "bg-gray-300"
          } h-[3px] rounded-full`}
        />
      ))}
    </div>
  );
};

export default PasswordStrengthMeter;
