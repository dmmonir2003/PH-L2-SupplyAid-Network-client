import { baseApi } from "@/redux/api/baseApi";

const donationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createDonation: builder.mutation({
            query: (donationData) => ({
                url: '/donations',
                method: 'POST',
                body: donationData,
            }),
            invalidatesTags: ['donation'],
        }),
        getTotalDonationAmount: builder.query({
            query: () => ({
                url: '/donations/total',
                method: 'GET',
            }),
            providesTags: ['donation'],
        }),
        getCategoryTotalDonationAmount: builder.query({
            query: (category) => ({
                url: `/donations/category/${category}`,
                method: 'GET',
               
            }),
            providesTags: ['donation'],
        }),
        getUserTotalDonationAmount: builder.query({
            query: (userId) => ({
                url: `/donations/user/${userId}`,
                method: 'GET',
               
            }),
            providesTags: ['donation'],
        }),
        getUserDonationDataWithAmount: builder.query({
            query: (userId) => ({
                url: `/donations/donation-data/user/${userId}`,
                method: 'GET',
               
            }),
            providesTags: ['donation'],
        }),
        getAllDonerData: builder.query({
            query: () => ({
                url: '/donations/all-donors',
                method: 'GET',
               
            }),
            providesTags: ['donation'],
        }),
       
       
        
    })
});



export const {useCreateDonationMutation,useGetTotalDonationAmountQuery,useGetCategoryTotalDonationAmountQuery,useGetUserTotalDonationAmountQuery,useGetUserDonationDataWithAmountQuery,useGetAllDonerDataQuery}=donationApi;