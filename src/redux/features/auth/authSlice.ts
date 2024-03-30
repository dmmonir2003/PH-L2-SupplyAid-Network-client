import { createSlice } from "@reduxjs/toolkit";


interface User {
    email: string,
    name: string,
    userId: string 
  
}

interface AuthState {
  user: User | null;
   token:null|string
  }
  
  const initialState: AuthState = {
    user:null,
    token:null
  };

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUser:(state,action)=>{
        const{user,token}=action.payload
        state.user=user,
        state.token=token
      },
      logOut:(state)=>{
        state.user=null,
        state.token=null
      }

    }


});


export const{setUser,logOut}=authSlice.actions;
export default authSlice.reducer;