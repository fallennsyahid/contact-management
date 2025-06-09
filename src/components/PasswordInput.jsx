import { useState } from "react";

const PasswordInput = ({
  label,
  name,
  id,
  value,
  onChange,
  placeholder,
  iconLeft,
  withToggle = false,
  required = true,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-gray-300 font-medium text-sm mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
          <i className={`fas ${iconLeft} text-gray-500`}></i>
        </div>
        {withToggle && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            <i
              className={`fas ${
                show ? "fa-eye-slash" : "fa-eye"
              } text-gray-500`}
            ></i>
          </div>
        )}
        <input
          type={show ? "text" : "password"}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 transition-all"
        />
      </div>
    </div>
  );
};

export default PasswordInput;
