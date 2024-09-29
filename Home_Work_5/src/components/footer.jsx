import React from 'react';
import "./style.css";

import { ThemeToggle } from './ThemeToggle';
import { useDispatch, useSelector } from 'react-redux';

const Footer = () => {
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
    const currentYear = new Date().getFullYear();
  return (
    <footer className={theme.theme} >
    <p>Сейчас {currentYear} год</p>
    <ThemeToggle className={theme}/>
    </footer>
  );
};

export default Footer;