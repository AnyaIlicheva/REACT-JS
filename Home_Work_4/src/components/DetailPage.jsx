import React from 'react';
import s from "../App.module.css";
import { useNavigate, useParams } from 'react-router-dom';

function DetailPage({ goods }) {
    const { goodsId } = useParams();
    const navigate = useNavigate();
    const item = goods.find(item => item.id === parseInt(goodsId));
  
    if (!item) {
      return <div>Товар не найден</div>;
    }
  const goBack = () => {
    navigate(-1);
  }
    return (
        <>
        <div className={s.content}>
       

       <h2>{item.title}</h2>
       <p>А здесь написана информация о конкретном телефоне</p>
       <p>{item.price}</p>
       
      
     </div>
     <button className={s.navContent} onClick={goBack}>Назад</button>
        </>
      
    );
  }

  export default DetailPage;