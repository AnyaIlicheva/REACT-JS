import React, { useContext } from 'react';
import "./style.css";
import { UserContext } from '../Contexts/UserContext';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const { userName, setUserName } = useContext(UserContext);
    const { name, email } = useSelector((state) => state.user);
    const theme = useSelector((store) => store.theme);
    const dispatch = useDispatch();
  return (
    <header className={theme.theme} >


        <div>Добро пожаловать, {userName}</div>
        <div>Ваш login: {name}</div>
        <div>Ваш E-mail: {email}</div>


        <button className='backButton'
            onClick={() => 
            setUserName('Гость')
            }>
            Выйти из системы
        </button>
    </header>
  );
};

export default Header;