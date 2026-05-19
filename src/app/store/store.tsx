import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slices/CartSlice';
import searchReducer from '../slices/SearchKeySlice';

export const store=configureStore({
    reducer: {
     cart : cartReducer,
     search :  searchReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;