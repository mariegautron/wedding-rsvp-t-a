import { FC } from "react";

interface CustomIconProps {
  Icon: any;
}

const CustomIcon: FC<CustomIconProps> = ({ Icon }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#F1C376",
          borderRadius: "50%",
          padding: "4px",
          top: "-8px",
          left: "-8px",
          width: 24,
          height: 24,
          zIndex: "-1",
        }}
      />
      <Icon style={{ color: "#4D5A4F", fontSize: "30px" }} />
    </div>
  );
};

export default CustomIcon;
