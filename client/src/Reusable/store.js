import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { thunk } from 'redux-thunk';
import home from './Slice/HomeSlice';
import authentication from './Slice/AuthenticationSlice';

const rootReducer = combineReducers({
    home,
    authentication,
});
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    devTools: true,
});
export default store;
