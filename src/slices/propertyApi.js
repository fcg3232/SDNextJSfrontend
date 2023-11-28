// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./api";

// Define a service using a base URL and expected endpoints
export const propertiesdbApi = createApi({
  reducerPath: "propertiesdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  endpoints: (builder) => ({
    getAllpropertiesdb: builder.query({
      query: () => `propertiesdb`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllpropertiesdbQuery } = propertiesdbApi;
