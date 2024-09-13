import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { generateRandomArray } from "../../utils/utils";

export const memoryGameAdaptor = createEntityAdapter();

export const memoryGameSelectors = memoryGameAdaptor.getSelectors(
  (state) => state.memoryGame
);

const initialState = () => {
  const cardList = generateRandomArray(16);
  return memoryGameAdaptor.getInitialState({
    ids: cardList.map((c) => c.id),
    entities: Object.fromEntries(cardList.map((card) => [card.id, card])),
    clickedCards: [],
    score: 0,
    gameOverStatus: false,
  });
};

export const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState,
  reducers: {
    updateCard: memoryGameAdaptor.updateOne,
    updateManyCard: memoryGameAdaptor.updateMany,
    addClickedCard: (state, action) => {
      state.clickedCards.push(action.payload);
    },
    clearClickedCard: (state, action) => {
      state.clickedCards = [];
    },
    resetGame: () => {
      return initialState();
    },
    gameOver: (state) => {
      state.gameOverStatus = true;
    },
    addPointScore: (state, action) => {
      state.score += action.payload;
    },
  },
});

export const {
  addClickedCard,
  updateCard,
  clearClickedCard,
  updateManyCard,
  resetGame,
  gameOver,
  addPointScore,
} = memoryGameSlice.actions;
export default memoryGameSlice.reducer;
