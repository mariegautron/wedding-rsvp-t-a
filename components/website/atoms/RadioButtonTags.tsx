import { Radio } from "antd";

interface RadioButtonTagProps {
  value: string;
  text: string;
  onChange: (value: string) => void;
}

const RadioButtonTag: React.FC<RadioButtonTagProps> = ({
  value,
  text,
  onChange,
}) => {
  return (
    <Radio.Button value={value} onClick={() => onChange(value)}>
      {text}
    </Radio.Button>
  );
};

export default RadioButtonTag;
