// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./api";

// Define a service using a base URL and expected endpoints
export const personaldbApi = createApi({
  reducerPath: "personaldbApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  endpoints: (builder) => ({
    getAllpersonaldb: builder.query({
      query: () => `personaldb`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllpersonaldbQuery } = personaldbApi;
