import { createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

export type charactersState = {
  characters: Array<string>;
};

const initialState: charactersState = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
});

//export const {} = charactersSlice.actions;
export default charactersSlice.reducer;
