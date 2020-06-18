import React, {Fragment} from "react";
import UIkit from "uikit";
import {Event} from "../../types";
import {Action} from "redux";

type Props = {
    filterEvents: (filter: string) =>  Action
    events: Array<Event>
}

const EventFilter: React.FC<Props> = (props) => {
    const {events, filterEvents} = props;
     return (
         <Fragment>
            <div className="events-title uk-grid-small" data-uk-grid>
                <div>
                    <h2>Мероприятия</h2>
                </div>
                <div>{events.length}</div>
            </div>
            <div className="uk-margin-medium-bottom">
                <div className="uk-grid-medium uk-visible@s" data-uk-grid>
                    <div className="uk-width-expand">
                        <div className="uk-width-1-1" data-uk-form-custom="target: > * > span:first-child">
                            <select>
                                <option value="">Следующая неделя
                                </option>
                                <option value="1">Следующая неделя</option>
                            </select>
                            <button className="uk-button select-btn uk-width-1-1" type="button"
                                    tabIndex={-1}>
                                <span></span>
                                <img src="/img/icons/arrow.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="events-filter__scope"
                             data-uk-form-custom="target: > * > span:first-child">
                            <select>
                                <option value="">Маркетинг</option>
                                <option value="1">Фронтенд</option>
                            </select>
                            <button className="uk-button select-btn uk-width-1-1" type="button"
                                    tabIndex={-1}>
                                <span></span>
                                <img src="/img/icons/arrow.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-auto@l">
                        <div className="events-filter__choose">
                            <div>
                                <input name="choose" id="choose1" type="radio" defaultChecked />
                                <label htmlFor="choose1">
                                    Все
                                </label>
                            </div>
                            <div>
                                <input name="choose" id="choose2" type="radio" />
                                <label htmlFor="choose2">
                                    С промокодом
                                </label>
                            </div>
                            <div>
                                <input name="choose" id="choose3" type="radio" />
                                <label htmlFor="choose3">
                                    Бесплатные
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <span tabIndex={-1} className="events-filter__btn uk-hidden@s" onClick={() => UIkit.offcanvas('#offcanvas-filter', {overlay: true}).show()}>Отфильтровать
                    мероприятия</span>
            </div>
            <div id="offcanvas-filter" data-uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar">
            <div className="offcanvas-filter__head">
                <div className="uk-child-width-expand" data-uk-grid>
                    <div>
                        <a href="#offcanvas-filter" data-uk-toggle>Закрыть</a>
                    </div>
                    <div className="uk-width-auto">
                        Фильтр
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="offcanvas-filter__main">
                <ul>
                    <li>
                        <div className="uk-margin-bottom uk-width-1-1"
                             data-uk-form-custom="target: > * > span:first-child">
                            <select>
                                <option value="">Маркетинг</option>
                                <option value="1">Фронтенд</option>
                            </select>
                            <button className="uk-button select-btn uk-width-1-1" type="button" tabIndex={-1}>
                                <span></span>
                                <img src="/img/icons/arrow.svg" alt=""/>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="uk-margin-bottom uk-width-1-1"
                             data-uk-form-custom="target: > * > span:first-child">
                            <select>
                                <option value="">Маркетинг</option>
                                <option value="1">Фронтенд</option>
                            </select>
                            <button className="uk-button select-btn uk-width-1-1" type="button" tabIndex={-1}>
                                <span></span>
                                <img src="/img/icons/arrow.svg" alt=""/>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="uk-margin-bottom uk-width-1-1"
                             data-uk-form-custom="target: > * > span:first-child">
                            <select>
                                <option value="">Маркетинг</option>
                                <option value="1">Фронтенд</option>
                            </select>
                            <button className="uk-button select-btn uk-width-1-1" type="button" tabIndex={-1}>
                                <span></span>
                                <img src="/img/icons/arrow.svg" alt=""/>
                            </button>
                        </div>
                    </li>
                </ul>
                <div>
                    <a className="uk-button uk-button-primary uk-width-1-1" href="#offcanvas-filter"
                       data-uk-toggle>Применить фильтры</a>
                </div>
            </div>
        </div>
            </div>
        </Fragment>
     );
};

export default EventFilter;
