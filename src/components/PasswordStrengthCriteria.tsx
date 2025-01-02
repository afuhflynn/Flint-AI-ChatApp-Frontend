import { Check, X } from "lucide-react";

const PasswordStrengthCriteria = ({ password }: { password: string }) => {
  const criteria = [
    {
      id: 1,
      label: "At least 8 characters",
      met: password.length >= 8,
    },
    {
      id: 1,
      label: "At least 1 lowercase character",
      met: /[a-z]/.test(password),
    },
    {
      id: 1,
      label: "At least 1 uppercase character",
      met: /[A-Z]/.test(password),
    },
    {
      id: 1,
      label: "At least 1 numeric character",
      met: /[0-9]/.test(password),
    },
    {
      id: 1,
      label: "At least 1 special character",
      met: /[^A-Za-z0-9]/.test(password),
    },
  ];
  return (
    <ul className="flex flex-col items-start gap-2 mb-4 list-none">
      {criteria.map((item, index) => (
        <li
          key={`${item.id}-${item.label}-${index}`}
          className={`text-muted-text flex flex-row items-center gap-2`}
        >
          <div>
            {item.met ? (
              <Check
                className={`text-muted-text ${
                  item.met ? "text-green-500" : "text-red-500"
                }`}
              />
            ) : (
              <X
                className={`text-muted-text ${
                  item.met ? "text-green-500" : "text-red-500"
                }`}
              />
            )}
          </div>{" "}
          <p className={`${item.met ? "text-green-500" : "text-red-500"}`}>
            {item.label}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PasswordStrengthCriteria;
