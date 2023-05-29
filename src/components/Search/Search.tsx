import React from "react";
import { Input } from "antd";

const { Search } = Input;

const _Search: React.FC = () => {
  return (
    <>
      <Search
        placeholder="input search text"
        enterButton
        size="large"
        style={{ width: 450, margin: "0 auto" }}
      />
    </>
  );
};

export { _Search };
