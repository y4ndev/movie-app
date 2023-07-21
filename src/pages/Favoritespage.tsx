import React from "react";
import { IData } from "../types/data";
import { Catalog } from "../components/Catalog";
import { useAppSelector } from "../store/hook";

const Favoritespage: React.FC = () => {
  const { likedMovies, data } = useAppSelector((state) => state.data);
  const favoriteMovies: IData[] = data.filter(
    (movie) => likedMovies[(movie.filmId || movie.kinopoiskId) ?? ""]
  );

  console.log(favoriteMovies);

  return (
    <div>
      <Catalog movies={favoriteMovies} loading={true} />
    </div>
  );
};

export { Favoritespage };
