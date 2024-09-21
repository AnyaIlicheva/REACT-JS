import s from "./App.module.css";
import React from "react";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { ListPage } from "./components/ListPage";
import DetailPage from "./components/DetailPage";

const items = [
  { id: 1, text: "Рассольник", style: { color: "red" } },
  { id: 2, text: "Борщ", style: { color: "yellow" } },
  { id: 3, text: "Зеленые щи", style: { color: "green" } },
];
const goods = [
  { id: 1, title: "Samsung", price: "28990 руб" },
  { id: 2, title: "Xiaomi", price: "14890 руб" },
  { id: 3, title: "iPhone", price: "69990 руб" },
];
function App() {
  const renderItem = (item, i) => {
    const style = { color: `${i % 2 ? "red" : "green"}` };

    return <article style={style}>{item.text}</article>;
  };
  const styleActiveLink = ({ isActive }) =>
    isActive ? `${s.link} ${s.active}` : "";

  return (
    <div>
      <BrowserRouter>
        <nav className={s.nav}>
          <NavLink className={styleActiveLink} to="/">
            Главная
          </NavLink>
          <NavLink className={styleActiveLink} to="/about">
            О нас
          </NavLink>
          <NavLink className={styleActiveLink} to="/goods">
            Страница товаров
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/goods" element={<ListPage goods={goods} />} />
          <Route
            path="/goods/:goodsId"
            element={<DetailPage goods={goods} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
