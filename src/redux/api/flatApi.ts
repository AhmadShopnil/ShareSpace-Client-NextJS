import { baseApi } from "./baseApi";

const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postFlat: build.mutation({
      query: (data) => ({
        url: "/flats",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [],
    }),

    getAllFlats: build.query({
      query: () => ({
        url: "/flats",
        method: "GET",
      }),
      providesTags: [],
    }),

    deleteFlat: build.mutation({
      query: (id) => ({
        url: `/flats/${id}`,
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
