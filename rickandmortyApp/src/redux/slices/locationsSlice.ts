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

export const fetchLocations = createAsyncThunk("fetchLocations", async () => {
  const response = await fetch("https://rickandmortyapi.com/api/location");
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locations: Location[] = data.results.map((loc: any) => ({
    //Burası çokemelli
    id: loc.id,
    name: loc.name,
    type: loc.type,
    dimension: loc.dimension,
  }));
  return locations;
});

const initialState = locationsAdaptor.getInitialState({
  loading: false,
  error: null as string | null,
});

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.loading = false;
        locationsAdaptor.setAll(state, action.payload);
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch characters";
      });
  },
});

//export const {} = locationsSlice.actions;
export default locationsSlice.reducer;
