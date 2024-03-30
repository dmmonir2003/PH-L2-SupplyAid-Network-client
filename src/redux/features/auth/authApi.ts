import { baseApi } from "@/redux/api/baseApi";


const authApi=baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
          query: (userData) => ({
            url: '/register',
            method: 'POST',
            body: userData,
          }),
        }),
        loginUser: builder.mutation({
            query: (userData) => ({
                
              url: '/login',
              method: 'POST',
              body: userData,
            }),
        }),



    }),

});


export const {useRegisterUserMutation,useLoginUserMutation}=authApi;