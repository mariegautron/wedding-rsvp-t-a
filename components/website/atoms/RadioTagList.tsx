import { Radio } from "antd";
import { FC } from "react";
import RadioButtonTag from "./RadioButtonTags";

interface RadioTagListProps {
  options: { value: string; text: string }[];
  onChange: (value: string) => void;
  defaultValue?: string | boolean | object;
}

const RadioTagList: FC<RadioTagListProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <Radio.Group buttonStyle="solid" defaultValue={defaultValue}>
      {options.map((option) => (
        <RadioButtonTag
          key={option.value}
          value={option.value}
          text={option.text}
          onChange={onChange}
        />
      ))}
    </Radio.Group>
  );
};

export default RadioTagList;
