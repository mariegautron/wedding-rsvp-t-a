"use client";

import themeTokens from "@/utils/theme";
import { ConfigProvider, theme } from "antd";
import "../app/globals.css";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider theme={themeTokens}>
      <div className="w-11/12 mx-auto py-5">{children}</div>
    </ConfigProvider>
  );
};

export default AdminLayout;
