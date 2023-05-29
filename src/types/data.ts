export interface IData {
  countries: { country: string }[];
  genres: { genre: string }[];
  imdbId: string;
  kinopoiskId?: number;
  nameEn?: null;
  nameOriginal?: string;
  nameRu: string;
  posterUrl?: string;
  posterUrlPreview?: string;
  ratingImdb?: number;
  ratingKinopoisk?: number;
  type?: string;
  year?: number;
  filmId?: number;
}
