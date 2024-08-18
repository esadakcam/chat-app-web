import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";

import { useEffect, useState } from "react";

const menuItems = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    title: "Home",
  },
  {
    label: <Link to="/chat">Chat</Link>,
    key: "chat",
    title: "Chat",
  },
];

export const Layout = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const onClick: MenuProps["onClick"] = (e) => setCurrentPage(e.key);
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    if (pathname === "/") {
      setCurrentPage("home");
    } else if (pathname.startsWith("/chat")) {
      setCurrentPage("chat");
    }
  }, [pathname]);

  return (
    <>
      <Menu
        mode="horizontal"
        items={menuItems}
        onClick={onClick}
        selectedKeys={[currentPage]}
      />
      <div style={{ padding: "25px" }}>
        <Outlet />
      </div>
    </>
  );
};
