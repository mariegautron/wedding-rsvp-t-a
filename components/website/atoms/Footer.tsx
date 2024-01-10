import React from "react";
import { Layout } from "antd";

const { Footer: AntdFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntdFooter className="text-center bg-f7f3ed text-base relative">
      Made with ❤️ by Marie{" "}
      <span className="block p-2 small-text">
        (sous la direction exigeante des futurs mariés)
      </span>
      <img
        src={"/images/leaves-1.svg"}
        alt="Leaves"
        className="absolute bottom-0 right-0 w-20 transform scale-x-[-1] z-10"
      />
    </AntdFooter>
  );
};

export default Footer;
