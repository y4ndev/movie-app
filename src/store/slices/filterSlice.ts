import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface IFilter {
  categoryId: string;
  currentPage: number;
}

const initialState: IFilter = {
  categoryId: "",
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.categoryId = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryId, setCurrentPage } = filterSlice.actions;

// export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
