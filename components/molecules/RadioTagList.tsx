import { Radio } from "antd";
import { FC } from "react";
import RadioButtonTag from "../atoms/RadioButtonTags";

interface RadioTagListProps {
  options: { value: string; text: string }[];
  onChange: (step: number, value: string) => void;
  step: number;
}

const RadioTagList: FC<RadioTagListProps> = ({ options, onChange, step }) => {
  return (
    <Radio.Group buttonStyle="solid">
      {options.map((option) => (
        <RadioButtonTag onChange={onChange} step={step} {...option} />
      ))}
    </Radio.Group>
  );
};

export default RadioTagList;
