"use client";

import { ConfigProvider, Layout, theme } from "antd";
import { useState } from "react";
import "../app/globals.css";
import CustomHeader from "./CustomHeader";
import CustomSider from "./CustomSider";
import themeTokens from "@/utils/theme";

const { Content } = Layout;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider theme={themeTokens}>
      <Layout style={{ height: "100%" }} className="isAdmin">
        <CustomSider collapsed={collapsed} />
        <Layout>
          <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
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
