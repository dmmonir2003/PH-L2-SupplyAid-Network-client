import { baseApi } from "@/redux/api/baseApi";

const gratitudeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createGratitude: builder.mutation({
            query: (gratitudeData) => ({
                url: '/gratitude',
                method: 'POST',
                body: gratitudeData,
            }),
            invalidatesTags: ['gratitude'],
        }),

        getAllGratitude: builder.query({
            query: () => ({
                url: '/gratitude',
                method: 'GET',
            }),
            providesTags: ['gratitude'],
        }),
    })
});



export const { useCreateGratitudeMutation, useGetAllGratitudeQuery } = gratitudeApi;