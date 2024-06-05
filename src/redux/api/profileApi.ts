import { baseApi } from "./baseApi";

export const profileAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => {
        return {
          url: "/profile",
          method: "GET",
        };
      },
      providesTags: [],
    }),
    updateMyProfile: build.mutation({
      query: (data) => {
        return {
          url: "/profile",
          method: "PUT",
          data,
          contentType: "multipart/form-data",
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdateMyProfileMutation } = profileAPi;
