import React from 'react';
import SocialListContainer from "../containers/social-list-container";
import AddEventForm from "../components/add-event-form/add-event-form";

const AddEventPage: React.FC = () => {
    return (
        <div>
            <div className="uk-section-large uk-padding-remove-top">
                <div className="uk-container">
                    <h1>Правила добавления</h1>
                    <div data-uk-grid="margin: uk-margin-large-top">
                        <div className="uk-width-2-3@m">
                            <div className="page__desc">
                                Чтобы разместить событие на сайте, нужно соответствовать ряду условий.
                            </div>
                            <ul className="rules-list">
                                <li>
                                    Мероприятие должно быть связано с программирование, дизайном, маркетингом или
                                    смежными темами для IT
                                </li>
                                <li>
                                    <div>
                                        Платное мероприятие размещается с условием предоставления организаторами скидки
                                        для участников сообщества
                                    </div>
                                    <div className="rules-list__important">
                                        В исключительных случаях возможна плата за размещение, персональные условия
                                        будут предложены администратором.
                                    </div>
                                </li>
                                <li>Бесплатное для участников мероприятие размещается без условий</li>
                            </ul>
                        </div>
                        <div className="uk-width-1-3@m">
                            <SocialListContainer />
                        </div>
                    </div>
                </div>
            </div>
            <AddEventForm />
        </div>
    );
};

export default AddEventPage;
