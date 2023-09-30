import { configureStore } from "@reduxjs/toolkit";
import herosSlice from "./slice/card.slice";

export const store = configureStore({
    reducer: {
        heros: herosSlice,
    },
});