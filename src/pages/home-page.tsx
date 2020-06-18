import React from 'react';
import EventListContainer from "../containers/event-list-container";
import SocialListContainer from "../containers/social-list-container";

const HomePage: React.FC = () => {
    return (
        <div>
            <div className="index__main">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                        <div className="index__main-text">
                            <h1>Диджитал-мероприятия Краснодара</h1>
                            <p>Только трушные события Кубанской столицы без мнимых сборищ и левых тусовок</p>
                        </div>
                        <div className="index__main-img uk-visible@s">
                            <img src="/img/main-img.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section-large">
                <div className="uk-container">
                    <div data-uk-grid>
                        <div className="uk-width-2-3@m">
                            <EventListContainer />
                        </div>
                        <div className="uk-width-1-3@m">
                            <SocialListContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
