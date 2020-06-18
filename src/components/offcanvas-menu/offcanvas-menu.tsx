import React, {RefObject} from 'react';
import {Link} from "react-router-dom";

import UIkit from "uikit";

const OffcanvasMenu = () => {
    const offcanvasRef: RefObject<HTMLDivElement> = React.createRef();
    const linkClickHandler = () => {
        UIkit.offcanvas(offcanvasRef.current as HTMLDivElement).hide();
    };

    return (
        <div ref={offcanvasRef} id="offcanvas-menu" data-uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <div className="offcanvas__head">
                    <div className="uk-flex uk-flex-middle">
                        <div className="offcanvas__head-logo">
                            <Link onClick={linkClickHandler} to="/">
                                <img src="/img/icons/logo.svg" alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="uk-flex uk-flex-middle">
                        <div>
                            <Link onClick={linkClickHandler} to="/new-event" className="uk-button uk-button-primary">
                                <img src="/img/icons/plus.svg" alt=""/>
                            </Link>
                        </div>
                        <div className="uk-margin-left">
                            <span tabIndex={-1} className='uk-offcanvas-close'>
                                <img src="/img/icons/close.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="offcanvas__main"
                     data-uk-scrollspy="target: li; cls: uk-animation-slide-bottom-small; delay: 100; repeat: true">
                    <ul className="offcanvas__list">
                        <li><Link onClick={linkClickHandler} to="/">Главная</Link></li>
                        <li><Link onClick={linkClickHandler} to="/about">О проекте</Link></li>
                        <li><Link onClick={linkClickHandler} to="/chats">Чаты и сообщества</Link></li>
                        <li><Link onClick={linkClickHandler} to="/sponsor">Спонсорам</Link></li>
                    </ul>
                    <ul className="offcanvas__socials">
                        <li><a rel="nofollow" target="_blank" href="#">Телеграм</a></li>
                        <li><a rel="nofollow" target="_blank" href="#">Инстаграм</a></li>
                        <li><a rel="nofollow" target="_blank" href="#">Фейсбук</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OffcanvasMenu;
