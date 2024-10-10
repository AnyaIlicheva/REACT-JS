import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userReduser";
import { loggerMiddleware } from "./loggerMiddleware";
import userReduser from "./userReduser";

const store = configureStore({
  reducer: { users: usersReducer, user: userReduser },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
