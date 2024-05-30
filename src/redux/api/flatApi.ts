import { baseApi } from "./baseApi";

const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postFlat: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [],
    }),

    getAllFlats: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: [],
    }),

    deleteFlat: build.mutation({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [],
    }),
  }),
});

export const {
  useDeleteFlatMutation,
  useGetAllFlatsQuery,
  usePostFlatMutation,
} = flatApi;
