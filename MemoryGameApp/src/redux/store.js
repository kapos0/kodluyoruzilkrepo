import { configureStore } from "@reduxjs/toolkit";
import memoryGameSlice from "./memoryGame/memoryGameSlice";

export const store = configureStore({
  reducer: {
    memoryGame: memoryGameSlice,
  },
});
