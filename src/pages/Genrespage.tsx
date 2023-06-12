import React from "react";
import { useEffect } from "react";
import { fetchData } from "../store/slices/dataSlice";
import { Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Sort } from "../components/Sort";
import { Catalog } from "../components/Catalog";

const { Title } = Typography;

const Genrespage: React.FC = () => {
  const { categoryId, currentPage } = useAppSelector((state) => state.filter);
  const { data, loading } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filter = categoryId !== "" ? `&genres=${categoryId}` : "";

    dispatch(fetchData({ currentPage, filter }));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage, categoryId]);
  return (
    <>
      <Title style={{ marginTop: 0, textAlign: "center" }}>Жанры</Title>
      <Sort />

      <Catalog loading={loading} movies={data} />
    </>
  );
};

export { Genrespage };
