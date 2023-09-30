import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

const heroData = data;

export const herosSlice = createSlice({
    name: 'heros',
    initialState: {
        heros: heroData,
        score: 0,
        active: [],
        matched: []
    },
    reducers: {
        openCard: (state, action) => {
            state.active.push({
                id: action.payload.id,
                index: action.payload.index
            });
        },
        checkActive: (state, action) => {
            if (state.active.length === 2) {
                if (state.active[0].id !== state.active[1].id) {
                    state.active = [];
                    state.score = state.score - 10
                } else {
                    state.matched.push(state.active[1].id)
                    state.active = []
                    state.score = state.score + 50
                }
            }
        }
    },
})

// Constant variables
export const heros = (state) => state.heros.heros;
export const userScore = (state) => state.heros.score;
export const activeCard = (state) => state.heros.active;
export const matchedCards = (state) => state.heros.matched;

// Export reducers
export const { openCard, checkActive } = herosSlice.actions;
export default herosSlice.reducer;