import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: '',
    pathName:'',
  };

const catagorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
        selectCategory:(state,actions)=>{
            const{category,pathName}=actions.payload
            state.category=category,
            state.pathName=pathName
        }
    },

})

export const{selectCategory}=catagorySlice.actions;
export default catagorySlice.reducer;