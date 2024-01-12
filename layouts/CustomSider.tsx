"use client";

import { MENU_ITEMS } from "@/utils/enums/menuItems";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useMemo } from "react";

const CustomSider: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const pathname = usePathname();

  const selectedKey = useMemo(() => {
    const menuItem = MENU_ITEMS.find((item) => pathname === item.path);
    return menuItem ? menuItem.key : "1";
  }, [pathname]);

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      style={{ background: "#e8dad6ff", color: "#4f4341ff" }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        style={{ background: "#e8dad6ff" }}
      >
        {MENU_ITEMS.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            style={{
              color: selectedKey === item.key ? "#ffffff" : "#4f4341ff",
              fontFamily: "Raleway",
            }}
          >
            <Link href={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default CustomSider;
