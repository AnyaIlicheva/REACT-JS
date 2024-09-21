import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from "../App.module.css";

export const HomePage = () => {
  return (
    <>
     <div className={s.content}>
        <h1> Главная страница </h1>
        <p>Здесь вы можете почитать о нас</p>
    </div>
 


    <div className={s.navContent}>
          <NavLink to="/about">на страницу о нас</NavLink>
          <NavLink to="/goods">на страницу товаров</NavLink>
      </div>
    </>
    )
}
