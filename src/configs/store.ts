import quizReducer  from '@/modules/quiz/api';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";

export const store = configureStore({
    reducer: combineReducers({
        quiz: quizReducer
    }), 
})
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;