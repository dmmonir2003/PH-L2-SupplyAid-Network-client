import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTestimonial: builder.mutation({
            query: (testimonialData) => ({
                url: '/testimonials',
                method: 'POST',
                body: testimonialData,
            }),
            invalidatesTags: ['testimonial'],
        }),

        getAlltestimonial: builder.query({
            query: () => ({
                url: '/testimonials',
                method: 'GET',
            }),
            providesTags: ['testimonial'],
        }),
    })
});



export const { useCreateTestimonialMutation,useGetAlltestimonialQuery } = testimonialApi;