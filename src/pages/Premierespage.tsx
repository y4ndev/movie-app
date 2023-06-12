import React from "react";
import { useEffect } from "react";
import { Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Catalog } from "../components/Catalog";
import { fetchDataTop } from "../store/slices/dataSlice";

const Premierespage: React.FC = () => {
  const { data, loading } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const { Title } = Typography;

  useEffect(() => {
    dispatch(fetchDataTop());
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Title style={{ marginTop: 0, textAlign: "center" }}>Премьеры</Title>
      <Catalog loading={loading} movies={data} />
    </>
  );
};

export { Premierespage };
