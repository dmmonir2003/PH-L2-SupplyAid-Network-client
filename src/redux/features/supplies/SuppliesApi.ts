import { baseApi } from "@/redux/api/baseApi";

const suppliesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSupply: builder.mutation({
            query: (supplyData) => ({
                url: '/supplies',
                method: 'POST',
                body: supplyData,
            }),
            invalidatesTags: ['supply'],
        }),
        updateSupply: builder.mutation({
            query: (updatedData) => {

                const { id, supplyData } = updatedData;
              

              return  {
                    url: `/supplies/${id}`, 
                    method: 'PUT',
                    body: supplyData,
                  }
            },
            invalidatesTags: ['supply'],
          }),
        deleteSupply: builder.mutation({
            query: (id) => {
              return  {
                    url: `/supplies/${id}`, 
                    method: 'DELETE',
                  }
            },
            invalidatesTags: ['supply'],
          }),
        getAllSupply: builder.query({
            query: () => ({
                url: '/supplies',
                method: 'GET',  
            }),
            providesTags: ['supply'],
        }),
        getSupply: builder.query({
            query: (id) => ({

                url: `/supplies/${id}`,
                method: 'GET',  
            }),
            providesTags: ['supply'],
        })
    })
});



export const {useCreateSupplyMutation,useGetAllSupplyQuery,useUpdateSupplyMutation,useDeleteSupplyMutation,useGetSupplyQuery}=suppliesApi;