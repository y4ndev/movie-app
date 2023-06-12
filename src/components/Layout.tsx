import React from "react";
import { _Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

const _Layout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <_Header />
        <Layout>
          <Sidebar />
          <Layout>
            <Content style={{ margin: "0 22px 0" }}>
              <div style={{ padding: 24, minHeight: "700px", background: colorBgContainer }}>
                <Outlet />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Ant Design ©2023 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export { _Layout };
