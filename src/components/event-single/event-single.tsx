import React, {Fragment} from "react";
import EventList from "../event-list/event-list";
import {withRouter} from 'react-router-dom';

const EventSingle: React.FC = () => {
    const copyClickHandler = () => {
        navigator.clipboard.writeText('meetupmenu(copy)')
            .catch(err => {
                console.log('Something went wrong', err);
            });
    }
    return (
        <Fragment>
            <div className="uk-section-large uk-padding-remove-top">
                <div className="uk-container">
                    <h1>DevFest 2020 от GDG KRD</h1>
                    <div data-uk-grid="margin: uk-margin-large-top">
                        <div className="uk-width-2-3@m">
                            <div className="uk-flex-middle" data-uk-grid>
                                <div>
                                    <div className="event-item__view">
                                        <img src="/img/icons/eye.svg" alt="" />
                                        <span>344</span>
                                    </div>
                                </div>
                                <div>
                                    <script src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
                                    <script src="https://yastatic.net/share2/share.js"></script>
                                    <div className="ya-share2"
                                         data-services="collections,vkontakte,facebook,odnoklassniki,moimir"></div>
                                </div>
                            </div>
                            <div className="uk-margin-xlarge-bottom">
                                <ul className="event-info">
                                    <li>
                                        <h6>Дата</h6>
                                        <div>04 — 05.04.2020</div>
                                    </li>
                                    <li>
                                        <h6>Формат</h6>
                                        <div>Мероприятие</div>
                                    </li>
                                    <li>
                                        <h6>Место проведения</h6>
                                        <div>г. Краснодар, ул. Красноармейская 123</div>
                                    </li>
                                    <li>
                                        <h6>Сфера</h6>
                                        <div className="uk-grid-small" data-uk-grid>
                                            <div>UX/UI</div>
                                            <div>Marketing</div>
                                            <div>Backend</div>
                                            <div>Mobile</div>
                                            <div>Frontend</div>
                                        </div>
                                    </li>
                                    <li>
                                        <h6>Организатор</h6>
                                        <div>GDG Krasnodar</div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>Описание</h3>
                                <div className="uk-margin-remove-last-child">
                                    <p>В этом году конференция Devfest пройдет в самом центре Краснодара!
                                        Каждый год сотни сообществ GDG по всему миру проводят Devfest при поддержке
                                        Google. В этом
                                        году мы поговорим про Web, UI/UX, маркетинг в IT и не только! Мы сможем
                                        поделиться опытом
                                        друг с другом и послушать вживую выступления тех, кого слушаем в подкастах,
                                        читаем на habre,
                                        на чьи каналы мы подписаны и смотрим в записи с конференций. А после как следует
                                        отдохнем.</p>

                                    <p>Поток разработка — 12 спикеров</p>

                                    <p>Поток дизайн — 7 спикеров</p>

                                    <p>Поток Маркетинг в IT — 7 спикеров</p>

                                    <p>Начало регистрации в 9-00!!!</p>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-3@m">
                            <div className="event-aside">
                                <div className="event-aside__name">Условие участия:</div>
                                <div className="event-aside__price">Бесплатно</div>
                                <div>
                                    <a onClick={copyClickHandler} href="https://creativecult.ru/" className="uk-button uk-button-primary uk-width-1-1">Перейти на сайт</a>
                                </div>
                                <div className="event-promocode">
                                    <div className="event-promocode__title">-15% при оплате до 29.05.2020</div>
                                    <div className="event-promocode__copy">
                                        <div>
                                            Промокод: <span>meetupmenu</span>
                                        </div>
                                        <span onClick={copyClickHandler} className="event-promocode__copy-btn">
                                            <img src="/img/icons/copy.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="event-promocode__desc">Мы скопируем промокод при переходе</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="uk-section-large uk-section-muted">*/}
            {/*    <div className="uk-container">*/}
            {/*        <h2>Похожие события</h2>*/}
            {/*        <div className="uk-width-2-3@m">*/}
            {/*            <EventList />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Fragment>
    )
}

export default withRouter(EventSingle);
