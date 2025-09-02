import { Link } from "react-router-dom";
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import logoimg from '../../app/images/svg/logo.svg';
import telegram from '../../app/images/svg/telegram-icon.svg';
import './Header.css';
import LanguageSelector from "../../shared/LenguageSelector/LenguageSelector";
import img from '../../app/images/svg/menu-btn.svg'
import img2 from '../../app/images/svg/close-menu-btn.svg'

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="main-header">
            <div className="header-section">
                <Link to='/'>
                <img src={logoimg} alt="" className="header-logo-svg" />
                </Link>
            </div>
            
            <div className="desktop-menu-con">
                <div className="header-section header-section-links">
                    <Link to='/'>Главная</Link>
                    <Link to='/our-programs'>Программы</Link>
                    <Link to='/start-with'>С чего начать</Link>
                    <Link to='/reviews'>Отзывы</Link>
                    <Link to='/blog'>Блог</Link>
                </div>
                <div className="header-section-btn-container">
                    <a href="https://t.me/statum_support" className="header-link-btn">
                        <img src={telegram} alt="" />
                        <span>Поговорить с экспертом</span>
                    </a>

                    {/* Кастомный селектор языка */}
                    {/* <LanguageSelector /> */}          
                </div>
            </div>

            <div onClick={openMenu} className="mobile-menu-btn">
                {menuOpen ? <img src={img2} alt="" /> : <img src={img} alt="" />}
            </div>


            {menuOpen ?
                <div className="mobile-menu-links-conteiner">
                    <div onClick={openMenu} className={menuOpen ? "mobile-menu-btn mobile-menu-btn-krest" : "mobile-menu-btn"}>
                        {menuOpen ? <img src={img2} alt="" /> : null}
                    </div>
                    <div className="mobile-menu-links-conteiner-ls">
                        <Link onClick={openMenu} to='/'>Главная</Link>
                        <Link onClick={openMenu} to='/our-programs'>Программы</Link>
                        <Link onClick={openMenu} to='/start-with'>С чего начать</Link>
                        <Link onClick={openMenu} to='/reviews'>Отзывы</Link>
                        <Link onClick={openMenu} to='/blog'>Блог</Link>
                        <a href="https://t.me/statum_support">Поговорить с экспертом</a>
                    </div>
                    {/*<div>Выберите язык <LanguageSelector /></div>*/}
                </div> : null}
        </header>
    );
}
