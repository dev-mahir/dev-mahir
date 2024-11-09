import { initialState } from "./initialState";

import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
	name: "project",
	initialState,
	reducer: {},
});

export const {} = projectSlice.actions;
export default projectSlice.reducer;
