import React, { ChangeEvent } from "react";

interface InputTextAreaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-4/5">
      <label
        className="block text-base mb-2 font-Raleway text-current"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        className="appearance-none bg-transparent border-2 rounded-sm border-tagDefaultBorder w-full py-3 px-4 font-Raleway text-lg leading-tight focus:shadow-outline focus:border-2 focus:border-primary resize-none"
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputTextArea;
