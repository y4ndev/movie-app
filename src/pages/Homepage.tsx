import React, { useEffect } from "react";
import { Catalog } from "../components/Catalog";
import { Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { fetchDataBest } from "../store/slices/dataSlice";

const { Title } = Typography;

const Homepage: React.FC = () => {
  const { currentPage } = useAppSelector((state) => state.filter);
  const { data, loading } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataBest({ currentPage }));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);
  return (
    <>
      <Title style={{ marginTop: 0, textAlign: "center" }}>Лучшие фильмы</Title>
      <Catalog loading={loading} movies={data} />
    </>
  );
};

export { Homepage };
