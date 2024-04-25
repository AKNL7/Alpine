import { configureStore } from "@reduxjs/toolkit";
import configuratorReducer from "../../components/features/configuratorSlice";
import AlpineReducer from "../../components/features/alpineSlice";

export const store = configureStore({
    reducer: {
    configurator: configuratorReducer,
      alpine: AlpineReducer,
  },
});
