import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slicers/counterslice';
export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})