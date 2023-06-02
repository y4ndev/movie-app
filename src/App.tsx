import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Favoritespage } from "./pages/Favoritespage";
import { Genrespage } from "./pages/Genrespage";
import { Premierespage } from "./pages/Premierespage";
import { _Header } from "./components/Header";
import { _Search } from "./components/Search";
import { Layout, theme } from "antd";
import { Catalog } from "./components/Catalog";
import { IData } from "./types/data";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Sort } from "./components/Sort";
import { useAppSelector } from "./store/hook";

const { Content, Footer } = Layout;

export const genresArr = {
  genres: [
    { id: 1, genre: "Триллер" },
    { id: 2, genre: "Драма" },
    { id: 3, genre: "Криминал" },
    { id: 4, genre: "Мелодрама" },
    { id: 5, genre: "Детектив" },
    { id: 6, genre: "Фантастика" },
    { id: 7, genre: "Приключения" },
    { id: 8, genre: "Биография" },
    { id: 9, genre: "Фильм-нуар" },
    { id: 10, genre: "Вестерн" },
    { id: 11, genre: "Боевик" },
    { id: 12, genre: "Фэнтези" },
    { id: 13, genre: "Комедия" },
    { id: 14, genre: "Военный" },
    { id: 15, genre: "История" },
    { id: 16, genre: "Музыка" },
    { id: 17, genre: "Ужасы" },
    { id: 18, genre: "Мультфильм" },
    { id: 19, genre: "Семейный" },
    { id: 20, genre: "Мюзикл" },
    { id: 21, genre: "Спорт" },
    { id: 22, genre: "Документальный" },
    { id: 23, genre: "Короткометражка" },
    { id: 24, genre: "Аниме" },
    { id: 25, genre: "" },
    { id: 26, genre: "Новости" },
    { id: 27, genre: "Концерт" },
    { id: 28, genre: "Для взрослых" },
    { id: 29, genre: "Церемония" },
    { id: 30, genre: "Реальное ТВ" },
    { id: 31, genre: "Игра" },
    { id: 32, genre: "Ток-шоу" },
    { id: 33, genre: "Детский" },
  ],
};

const App: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [dataStatus, setDataStatus] = useState<boolean>(false);

  const { categoryId, currentPage } = useAppSelector((state) => state.filter);

 

  useEffect(() => {
    const _filter = `&genres=${categoryId}`;
    axios
      .get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=FILM&page=${currentPage}${
          categoryId !== "" ? _filter : ""
        }`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "4c89bc1d-4237-4c3a-a0e0-0f740083b048",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setDataStatus(true);

        console.log(res);
        setData(res.data.items);
      });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setDataStatus(false);
  }, [currentPage, categoryId]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <_Header />
      <Layout>
        <Sidebar />
        <Layout>
          <Content style={{ margin: "0 22px 0" }}>
            <div style={{ padding: 24, minHeight: "700px", background: colorBgContainer }}>
              <Routes>
                <Route path="/favorites" element={<Favoritespage />} />
              </Routes>
              <Sort />
              <Catalog
                loading={dataStatus}
                
                page={currentPage}
                movies={data}
              />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
