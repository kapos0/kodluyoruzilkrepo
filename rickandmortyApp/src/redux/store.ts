import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slices/charactersSlice";
import locationsReducer from "./slices/locationsSlice";
import episodesReducer from "./slices/episodesSlice";
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    locations: locationsReducer,
    episodes: episodesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
