import projectReducer from "../feature/project/projectSlice";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        project: projectReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
