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
      }}
    >
      Made with ❤️ by Marie{" "}
      <span style={{ display: "block", padding: 10, fontSize: 16 }}>
        (sous la direction exigeante des futurs mariés)
      </span>
    </AntdFooter>
  );
};

export default Footer;
