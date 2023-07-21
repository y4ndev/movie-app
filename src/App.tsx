import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Favoritespage } from "./pages/Favoritespage";
import { Genrespage } from "./pages/Genrespage";
import { Premierespage } from "./pages/Premierespage";
import { Cardpage } from "./pages/Cardpage";
import { _Header } from "./components/Header";
import { _Search } from "./components/Search";
import { _Layout } from "./components/Layout";
import { Homepage } from "./pages/Homepage";

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
  return (
    <Routes>
      <Route path="/" element={<_Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/premiers" element={<Premierespage />} />
        <Route path="/genres" element={<Genrespage />} />
        <Route path="/favorites" element={<Favoritespage />} />
        <Route path="film/:id" element={<Cardpage />} />
      </Route>
    </Routes>
  );
};

export default App;
