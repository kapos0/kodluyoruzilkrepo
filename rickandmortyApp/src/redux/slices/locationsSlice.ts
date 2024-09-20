import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

type Location = {
  id: string;
  name: string;
  type: string;
  dimension: string;
};

export const locationsAdaptor = createEntityAdapter<Location>();

export const locationsSelectors = locationsAdaptor.getSelectors(
  (state: { locations: ReturnType<typeof locationsAdaptor.getInitialState> }) =>
    state.locations
);

export const fetchLocations = createAsyncThunk(
  "fetchLocations",
  async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`
    );
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const locations: Location[] = data.results.map((loc: any) => ({
      //Burası çokemelli
      id: loc.id,
      name: loc.name,
      type: loc.type,
      dimension: loc.dimension,
    }));
    return { locations, page };
  }
);

const initialState = locationsAdaptor.getInitialState({
  currentPage: 1,
});

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      locationsAdaptor.setMany(state, action.payload.locations);
    });
  },
});

export const { incrementPage } = locationsSlice.actions;
export default locationsSlice.reducer;
