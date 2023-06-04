import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IData } from "../../types/data";

enum StatusCode {
  SUCCESS = "success",
  LOADING = "loading",
  FAILED = "failed",
}

interface IMovieData {
  data: IData[];
  loading: boolean;
  status: StatusCode;
  error: string | null;
}

export const fetchData = createAsyncThunk<IData[], { currentPage: number; filter: string }>(
  "data/fetchData",
  async function ({ currentPage, filter }) {
    const resp = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=FILM&page=${currentPage}${filter}`,
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

const initialState: IMovieData = {
  data: [],
  status: StatusCode.LOADING,
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataItems: (state, action: PayloadAction<IData[]>) => {
      state.data = action.payload;
    },
  },
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
  },
});

export const { setDataItems } = dataSlice.actions;

// export const selectFilter = (state: RootState) => state.filter;

export default dataSlice.reducer;
