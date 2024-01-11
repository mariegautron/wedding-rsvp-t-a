import React, { ChangeEvent } from "react";

interface InputTextProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        className="block text-base  mb-2 font-Raleway text-current"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="appearance-none bg-transparent border-2 rounded-sm border-tagDefaultBorder w-full py-3 px-4 font-Raleway text-lg leading-tight focus:shadow-outline focus:border-2 focus:border-primary "
        id={label}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
