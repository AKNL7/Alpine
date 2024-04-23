import { configureStore } from "@reduxjs/toolkit";
import configuratorReducer from "../../components/features/configuratorSlice";

export const store = configureStore({
    reducer: {
      configurator : configuratorReducer,
  },
});
