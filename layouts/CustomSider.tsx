"use client";

import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { FC } from "react";

const { Header, Sider, Content } = Layout;

const CustomSider: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Liste des invités",
          },
        ]}
      />
    </Sider>
  );
};

export default CustomSider;
