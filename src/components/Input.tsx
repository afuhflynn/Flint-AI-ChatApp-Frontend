const Input = ({
  type,
  placeholder,
  value,
  name,
  className,
  maxLength,
  onChange,
}: {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  className?: string;
  maxLength?: number;
  onChange: (name: string, value: string) => void;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    name={name}
    onChange={(e) => onChange(e.target.name, e.target.value)}
    className={`custom-input !${className}`}
    max={maxLength}
    required
  />
);

export default Input;
