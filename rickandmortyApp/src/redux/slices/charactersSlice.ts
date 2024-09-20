import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

type Character = {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  lastLocation: string;
  species:
    | "Human"
    | "Alien"
    | "Humanoid"
    | "Poopybutthole"
    | "Mythological Creature"
    | "Animal"
    | "unknown";
  image: string;
};

export const charactersAdapter = createEntityAdapter<Character>();

export const charactersSelectors = charactersAdapter.getSelectors(
  (state: {
    characters: ReturnType<typeof charactersAdapter.getInitialState>;
  }) => state.characters
);

export const fetchCharacters = createAsyncThunk(
  "fetchCharacters",
  async (page: number) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const characters: Character[] = data.results.map((char: any) => ({
      //Burası çokemelli
      id: char.id,
      name: char.name,
      lastLocation: char.location.name,
      status: char.status,
      species: char.species,
      image: char.image,
    }));
    return { characters, page };
  }
);

const initialState = charactersAdapter.getInitialState({
  loading: false,
  error: null as string | null,
  currentPage: 1,
});

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        charactersAdapter.setMany(state, action.payload.characters);
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch characters";
      });
  },
});

export const { incrementPage } = charactersSlice.actions;
export default charactersSlice.reducer;
