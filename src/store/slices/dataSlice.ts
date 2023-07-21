import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IData } from "../../types/data";

enum StatusCode {
  SUCCESS = "success",
  LOADING = "loading",
  ERROR = "error",
}

interface ILikedMovies {
  [movieId: string]: boolean;
}

interface IMovieData {
  data: IData[];
  likedMovies: ILikedMovies;
  loading: boolean;
  status: StatusCode;
  error: string | null;
}

export const fetchData = createAsyncThunk<IData[], { currentPage: number; filter: string }>(
  "data/fetchData",
  async function ({ currentPage, filter }) {
    const resp = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=FILM&page=${currentPage}${filter}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "4c89bc1d-4237-4c3a-a0e0-0f740083b048",
          "Content-Type": "application/json",
        },
      }
    );

    return resp.data.items as IData[];
  }
);

export const fetchDataTop = createAsyncThunk<IData[]>("data/fetchDataTop", async function () {
  const resp = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=MAY`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "4c89bc1d-4237-4c3a-a0e0-0f740083b048",
        "Content-Type": "application/json",
      },
    }
  );

  return resp.data.items as IData[];
});

export const fetchDataBest = createAsyncThunk<IData[], { currentPage: number }>(
  "data/fetchDataBest",
  async function ({ currentPage }) {
    const resp = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${currentPage}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "4c89bc1d-4237-4c3a-a0e0-0f740083b048",
          "Content-Type": "application/json",
        },
      }
    );

    return resp.data.films as IData[];
  }
);

const initialState: IMovieData = {
  data: [],
  likedMovies: {},
  status: StatusCode.LOADING,
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataItems: (state, action) => {
      state.data = action.payload;
    },
    setItemLikes: (state, action) => {
      const { id } = action.payload;
      state.likedMovies[id] = !state.likedMovies[id];
    },
  },

  ///Fetch GENRES_DATA
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = false;
      state.status = StatusCode.LOADING;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.error = null;
      state.loading = true;
      state.status = StatusCode.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.error = "ERROR";
      state.status = StatusCode.ERROR;
      state.data = [];
    });

    ///Fetch TOP_DATA
    builder.addCase(fetchDataTop.pending, (state) => {
      state.loading = false;
      state.status = StatusCode.LOADING;
      state.error = null;
    });
    builder.addCase(fetchDataTop.fulfilled, (state, action) => {
      state.error = null;
      state.loading = true;
      state.status = StatusCode.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchDataTop.rejected, (state) => {
      state.error = "ERROR";
      state.status = StatusCode.ERROR;
      state.data = [];
    });
    ///Fetch BEST_DATA
    builder.addCase(fetchDataBest.pending, (state) => {
      state.loading = false;
      state.status = StatusCode.LOADING;
      state.error = null;
    });
    builder.addCase(fetchDataBest.fulfilled, (state, action) => {
      state.error = null;
      state.loading = true;
      state.status = StatusCode.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchDataBest.rejected, (state) => {
      state.error = "ERROR";
      state.status = StatusCode.ERROR;
      state.data = [];
    });
  },
});

export const { setDataItems, setItemLikes } = dataSlice.actions;

// export const selectFilter = (state: RootState) => state.filter;

export default dataSlice.reducer;
