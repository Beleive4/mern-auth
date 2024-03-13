import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    accessToken: null,
    expires_in: 0,
    profileData: null,
    isverify: false,
};


export const dashboardSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        loginReducer: (state, action) => {
            console.log(action.payload,"action payload");
            localStorage.setItem("token", action.payload.token);
            state.accessToken = action.payload.token;
            window.location.reload();
        },
    },
});
export const {
    loginReducer,
    logoutReducer,

} = dashboardSlice.actions;
export default dashboardSlice.reducer;
