import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
    name:'weather',
    initialState:{
        searchedCity:'Kathmandu'
    },
    reducers:{
        SearchingCity:(state,action)=>{
            state.searchedCity=action.payload;
        },
    }
})

export const {SearchingCity}=SearchSlice.actions;
export default SearchSlice.reducer;