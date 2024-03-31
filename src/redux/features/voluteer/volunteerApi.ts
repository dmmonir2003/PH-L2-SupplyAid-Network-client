import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createVolunteerAplication: builder.mutation({
            query: (volunteerData) => ({
                url: '/volunteer-application',
                method: 'POST',
                body: volunteerData,
            }),
            invalidatesTags: ['volunteer'],
        }),
        
        volunteerApproved: builder.mutation({
            query: (id) => {
              return  {
                    url: `/volunteer-applications/approve/${id}`, 
                    method: 'PUT',
                  }
            },
            invalidatesTags: ['volunteer'],
          }),
        volunteerDelete: builder.mutation({
            query: (id) => {
              return  {
                    url: `/volunteer-applications/${id}`, 
                    method: 'DELETE',
                  }
            },
            invalidatesTags: ['volunteer'],
          }),
        getAllVolunteer: builder.query({
            query: () => ({
                url: '/volunteer-applications',
                method: 'GET',  
            }),
            providesTags:['volunteer'],
        }),
        getAllApprovedVolunteer: builder.query({
            query: () => ({

                url: `/volunteer-applications/approved`,
                method: 'GET',  
            }),
            providesTags:['volunteer'],
        })
    })
});



export const {useCreateVolunteerAplicationMutation,useGetAllVolunteerQuery,useVolunteerApprovedMutation,useVolunteerDeleteMutation,useGetAllApprovedVolunteerQuery}=volunteerApi;