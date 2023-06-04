import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import data from "./slices/dataSlice";

export const store = configureStore({
  reducer: { filter, data },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
