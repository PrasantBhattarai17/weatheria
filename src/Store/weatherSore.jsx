import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice";
const weatherStore=configureStore({
    reducer:{
     weather:searchReducer
    }
})

export default weatherStore;