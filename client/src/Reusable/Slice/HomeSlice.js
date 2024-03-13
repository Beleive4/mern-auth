import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    home: [],
};


export const HomeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getHomeSlice(state, action) {
            state.home = action.payload;
        },

    },
});
export const {
    getHomeSlice
} = HomeSlice.actions;
export default HomeSlice.reducer;
