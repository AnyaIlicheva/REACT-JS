import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeReducer";

export const ThemeToggle = () => {
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      {theme === "light" ? "Темная тема" : "Светлая тема"}
    </button>
  );
};
