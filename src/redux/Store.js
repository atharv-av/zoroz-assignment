import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slice";


export const store=configureStore({
    reducer:{
        cart:CartSlice.reducer,
    },
})
