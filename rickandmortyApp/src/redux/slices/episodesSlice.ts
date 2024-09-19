import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

type Episode = {
  id: string;
  name: string;
  episode: string;
  airDate: string;
};

export const episodesAdaptors = createEntityAdapter<Episode>();

export const episodesSelectors = episodesAdaptors.getSelectors(
  (state: { episodes: ReturnType<typeof episodesAdaptors.getInitialState> }) =>
    state.episodes
);

export const fetchEpisodes = createAsyncThunk("fetchEpisodes", async () => {
  const response = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const episodes: Episode[] = data.results.map((ep: any) => ({
    //Burası çokemelli
    id: ep.id,
    name: ep.name,
    episode: ep.episode,
    airDate: ep.air_date,
  }));
  return episodes;
});

const initialState = episodesAdaptors.getInitialState({
  loading: false,
  error: null as string | null,
});

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        episodesAdaptors.setAll(state, action.payload);
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch characters";
      });
  },
});

//export const {} = episodesSlice.actions;
export default episodesSlice.reducer;
