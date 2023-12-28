"use client";

import { MENU_ITEMS } from "@/utils/constants/menuItems";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useMemo } from "react";

const CustomSider: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const pathname = usePathname();

  const selectedKey = useMemo(() => {
    const menuItem = MENU_ITEMS.find((item) => pathname.startsWith(item.path));
    return menuItem ? menuItem.key : "1";
  }, [pathname]);

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      style={{ background: "#606C5D" }}
    >
      <Menu mode="inline" defaultSelectedKeys={[selectedKey]}>
        {MENU_ITEMS.map((item) => (
          <Menu.Item key={item.key} icon={<UserOutlined />}>
            <Link href={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default CustomSider;
