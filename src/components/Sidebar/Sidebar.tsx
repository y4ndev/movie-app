import React from "react";
import { Layout, Menu, Image, Typography } from "antd";
import logo from "../../assets/img/logo.png";
const { Sider } = Layout;
const { Title } = Typography;
const menuList = ["Жанры", "Премьеры", "Избранное"];

const Sidebar: React.FC = () => {
  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Image src={logo} preview={false} />
        <Title
          italic
          style={{ textAlign: "center", marginTop: 10, marginBottom: 50, color: "#ffffff" }}
          level={3}
        >
          Movie-app
        </Title>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={menuList.map((item, index) => ({
            key: String(index + 1),
            label: `${item}`,
          }))}
        />
      </Sider>
    </>
  );
};

export { Sidebar };
