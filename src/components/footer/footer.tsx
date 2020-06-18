import React from 'react';
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    const linkClickHandler = function() {
        window.scrollTo(0, 0);
    };
    return (
        <footer className="footer">
            <div className="uk-container">
                <div className="footer__main">
                    <div className="uk-flex uk-flex-middle">
                        <div className="footer__logo">
                            <Link onClick={linkClickHandler} to="/">
                                <img src="/img/icons/logo.svg" alt=""/>
                            </Link>
                        </div>
                        <ul className="footer__menu uk-visible@m">
                            <li><Link onClick={linkClickHandler} to="/about">О проекте</Link></li>
                            <li><Link onClick={linkClickHandler} to="/chats">Чаты и сообщества</Link></li>
                            <li><Link onClick={linkClickHandler} to="/sponsor">Спонсорам</Link></li>
                        </ul>
                    </div>
                    <div className="uk-visible@s">
                        <Link onClick={linkClickHandler} to="/new-event" className="uk-button uk-button-primary">Добавить мероприятие</Link>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="uk-child-width-1-4@m uk-child-width-1-3@s" data-uk-grid>
                        <div className="footer__made-in uk-text-center uk-text-left@s">
                            Проект появился на свет благодаря&nbsp;<a target="_blank" rel="nofollow"
                                                                      href="https://creativecult.ru/"><s>Creative</s>&nbsp;Cult</a>
                        </div>
                        <div className="uk-visible@s">
                            <div className="footer__made-in">Руководитель проекта</div>
                            <div className="fwm">Пётр Гуреев</div>
                        </div>
                        <div className="uk-visible@s">
                            <div className="footer__made-in">Дизайнер</div>
                            <div className="fwm">Никита Грудин</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
}

export default Footer;
