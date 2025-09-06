// components/InputField.js
const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="text-sm text-gray-700">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
};

export default InputField;
