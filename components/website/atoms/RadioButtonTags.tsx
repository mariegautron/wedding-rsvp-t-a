import Tag from "@/components/design-system/Tag";
import React from "react";

interface RadioButtonTagProps {
  value: string;
  text: string;
  onChange: (value: string) => void;
  isSelected: boolean;
}

const RadioButtonTag: React.FC<RadioButtonTagProps> = ({
  value,
  text,
  onChange,
  isSelected,
}) => {
  const handleClick = () => {
    if (!isSelected) {
      onChange(value);
    }
  };

  return (
    <div
      className={`inline-flex justify-center items-center px-3 py-1 cursor-pointer 
        transition-all duration-300 ease-in-out focus:outline-none text-center`}
      onClick={handleClick}
    >
      <input
        type="radio"
        className="opacity-0 absolute"
        value={value}
        onChange={() => onChange(value)}
        checked={isSelected}
      />
      <Tag variant={isSelected ? "default" : "transparent"} isRadio>
        {text}
      </Tag>
    </div>
  );
};

export default RadioButtonTag;
