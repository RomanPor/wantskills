import React from 'react';
import {Link, useLocation} from "react-router-dom";
import UIkit from 'uikit';

const Header: React.FC = () => {
    const { pathname } = useLocation();

    const showMenu = () => {
        UIkit.offcanvas('#offcanvas-menu', {overlay: true}).show();
    };

    return (
        <header className={pathname === '/' ? 'head head_index' : 'head'}>
            <div className="uk-container">
                <div className="head__inner">
                    <div className="uk-flex uk-flex-middle">
                        <div className="head__logo">
                            <Link to="/">
                                <img src="/img/icons/logo.svg" alt=""/>
                            </Link>
                        </div>
                        <ul className="head__menu uk-visible@m">
                            <li><Link to="/about">О проекте</Link></li>
                            <li><Link to="/chats">Чаты и сообщества</Link></li>
                            <li><Link to="/sponsor">Спонсорам</Link></li>
                        </ul>
                    </div>
                    <div className="uk-flex uk-flex-middle">
                        <div>
                            <Link to="/new-event" className="uk-button uk-button-primary">
                                <span className="uk-visible@m">Добавить мероприятие</span>
                                <img src="/img/icons/plus.svg" className="uk-hidden@m" />
                            </Link>
                        </div>
                        <div className="uk-margin-left uk-hidden@m">
                            <span tabIndex={-1} onClick={showMenu}>
                                <img src="/img/icons/menu.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
