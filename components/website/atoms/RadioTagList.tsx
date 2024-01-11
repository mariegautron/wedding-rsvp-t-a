import React, { useState, useEffect } from "react";
import RadioButtonTag from "./RadioButtonTags";

interface RadioTagListProps {
  options: { value: string; text: string }[];
  onChange: (value: string) => void;
  defaultValue?: string | boolean | object;
}

const RadioTagList: React.FC<RadioTagListProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue as string | undefined
  );

  useEffect(() => {
    setSelectedValue(defaultValue as string | undefined);
  }, [defaultValue]);

  const handleRadioChange = (value: string) => {
    onChange(value);
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-wrap justify-center items-center space-x-1">
      {options.map((option) => (
        <RadioButtonTag
          key={option.value}
          value={option.value}
          text={option.text}
          onChange={handleRadioChange}
          isSelected={option.value === selectedValue}
        />
      ))}
    </div>
  );
};

export default RadioTagList;
