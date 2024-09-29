import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import themeReducer from "./themeReducer";

//Создание хранилища (store)
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    theme: themeReducer,
  },
});
