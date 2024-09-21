import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "../App.module.css";

export const AboutPage = () => {
  return (
    <>
    <div className={s.content}>
       <h1> О нас </h1>
       <p>Здесь мы расскажем о том, что продаем телефоны</p>
    </div>

    <div className={s.navContent}> 
          <NavLink to="/">на главную </NavLink>
          <NavLink to="/goods">на страницу товаров</NavLink> 
        </div>
    </>
  
  )
}
