import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./postSlice";

export const store = configureStore({
  reducer: {
    postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
