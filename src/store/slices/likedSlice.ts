import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ILiked {
  categoryId: string;
  currentPage: number;
}

const initialState: ILiked = {
  categoryId: "",
  currentPage: 1,
};

export const likedSlice = createSlice({
  name: "liked",
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

export const { setCategoryId, setCurrentPage } = likedSlice.actions;

// export const selectFilter = (state: RootState) => state.filter;

export default likedSlice.reducer;
