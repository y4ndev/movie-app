import React from "react";
import { Layout, Menu, Image, Typography } from "antd";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { Title } = Typography;

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
          defaultSelectedKeys={["premiers"]}
          theme="dark"
          mode="inline"
          items={[
            { label: <Link to="/premiers">Премьеры</Link>, key: "premiers" },
            { label: <Link to="/popular">Популярные</Link>, key: "popular" },
            { label: <Link to="/genres">Жанры</Link>, key: "genres" },
            { label: <Link to="/favorites">Избранное</Link>, key: "favorites" },
          ]}
        />
      </Sider>
    </>
  );
};

export { Sidebar };
