"use client";

import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { FC } from "react";

const { Sider } = Layout;

const CustomSider: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      style={{ background: "#606C5D" }}
    >
      <Menu
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
