import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { News } from "../model/news.model";

export const newsApi = createApi({
  reducerPath: "newsApi",
  tagTypes: ["News"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    news: builder.query<News[], void>({
      query: () => "/news",
      providesTags: ["News"],
    }),
    //OUTPUT,INPUT
    singleNews: builder.query<News, number>({
      query: (id) => `/news/${id}`,
      providesTags: ["News"],
    }),
    addNews: builder.mutation<void, News>({
      query: (news) => ({
        url: "/news",
        method: "POST",
        body: news,
      }),
      invalidatesTags: ["News"],
    }),

    updateNews: builder.mutation<void, News>({
      query: ({ id, ...rest }) => ({
        url: `/news/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["News"],
    }),

    deleteNews: builder.mutation<void, number>({
      query: (id) => ({
        url: `/news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),
  }),
});

export const { useNewsQuery,useSingleNewsQuery, useDeleteNewsMutation, useUpdateNewsMutation,useAddNewsMutation } = newsApi;
