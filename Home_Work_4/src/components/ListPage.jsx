import React from 'react';
import { Link, useParams } from "react-router-dom";
import s from "../App.module.css";
export const ListPage = ({ goods }) => {
    const { pageNumber } = useParams;
  return (
    <>
       
        <div className={s.content}>
            <h1>Страница списка</h1>
            <p>Здесь перечислены те самые телефоны, которые мы продаем</p>
            <ul>
                {goods.map((item) => (<li key={item.id}>
                <Link to={`/goods/${item.id}`}>{item.title}</Link>
                </li>
                ))}
            </ul>
        </div>
        <div className={s.navContent}>
        <Link to="/">на главную</Link>
        <Link to="/about">на страницу о нас</Link>
            </div>
    </>
   );
}