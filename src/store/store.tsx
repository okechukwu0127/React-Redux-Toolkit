//eslint-disable-next-line
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { newsApi } from "../services/newsApi";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
});
