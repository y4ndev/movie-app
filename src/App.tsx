import React from "react";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Search } from "./components/Search";
import { Catalog } from "./components/Catalog";
import { IData } from "./types/data";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [data, setData] = React.useState<IData[]>([]);

  console.log(data);

  React.useEffect(() => {
    fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films", {
      method: "GET",
      headers: {
        "X-API-KEY": "4c89bc1d-4237-4c3a-a0e0-0f740083b048",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ marginBottom: 30 }}>
        <Search />
      </Header>
      <Layout>
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
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
              (icon, index) => ({
                key: String(index + 1),
                icon: React.createElement(icon),
                label: `nav ${index + 1}`,
              })
            )}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "0 22px 0" }}>
            <div style={{ padding: 24, minHeight: "700px", background: colorBgContainer }}>
              <Catalog movies={data} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
