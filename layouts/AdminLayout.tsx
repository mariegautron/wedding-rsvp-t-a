"use client";

import themeTokens from "@/utils/theme";
import { ConfigProvider, Layout, theme } from "antd";
import "../app/globals.css";
import { useState } from "react";
import CustomHeader from "./CustomHeader";
import CustomSider from "./CustomSider";

const { Content } = Layout;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider theme={themeTokens}>
      <Layout>
        <CustomSider collapsed={collapsed} />
        <Layout>
          <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AdminLayout;
