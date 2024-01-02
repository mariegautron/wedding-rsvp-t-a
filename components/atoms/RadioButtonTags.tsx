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
    <Radio.Button
      style={{
        fontSize: 25,
        paddingRight: 50,
        marginRight: 20,
        paddingLeft: 50,
        paddingBottom: 50,
        paddingTop: 20,
      }}
      value={value}
      onClick={() => onChange(value)}
    >
      {text}
    </Radio.Button>
  );
};

export default RadioButtonTag;
