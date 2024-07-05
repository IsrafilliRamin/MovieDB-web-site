import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../createSlice/counterSlice";

export const store = configureStore({
    reducer:{
        allState:counterSlice
    }
})