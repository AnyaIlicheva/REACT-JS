import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import themeReducer from "./themeReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
