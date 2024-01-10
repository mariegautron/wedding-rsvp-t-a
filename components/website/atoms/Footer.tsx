import React from "react";
import { Layout } from "antd";

const { Footer: AntdFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntdFooter>
      <div className="text-center text-base relative font-classico">
        Made with ❤️ by Marie{" "}
        <span className="block p-2 text-xs font-Raleway italic">
          (sous la direction exigeante des futurs mariés)
        </span>
      </div>
    </AntdFooter>
  );
};

export default Footer;
