import React from "react";
import { Layout } from "antd";
import { _Search } from "../Search";

const { Header } = Layout;

const _Header: React.FC = () => {
  return (
    <>
      <Header style={{ marginBottom: 30, alignItems: "center", display: "flex" }}>
        <_Search />
      </Header>
    </>
  );
};

export { _Header };
