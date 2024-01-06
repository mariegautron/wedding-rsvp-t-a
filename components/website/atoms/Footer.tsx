import React from "react";
import { Layout } from "antd";

const { Footer: AntdFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntdFooter
      style={{
        textAlign: "center",
        backgroundColor: "#f7f3ed",
        fontSize: 20,
        position: "relative",
      }}
    >
      Made with ❤️ by Marie{" "}
      <span style={{ display: "block", padding: 10, fontSize: 16 }}>
        (sous la direction exigeante des futurs mariés)
      </span>
      <img
        src={"/images/leaves-1.svg"}
        alt="Leaves"
        style={{
          position: "absolute",
          bottom: "0", // Positionner le SVG en haut du footer
          right: 0,
          width: "20%",
          transform: "scaleX(-1)", // Flip horizontalement
          zIndex: 10,
        }}
      />
    </AntdFooter>
  );
};

export default Footer;
