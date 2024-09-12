import { configureStore } from "@reduxjs/toolkit";

import gatesSlice from "./gatesSlice";

export const store = configureStore({
  reducer: {
    gates: gatesSlice,
  },
});
