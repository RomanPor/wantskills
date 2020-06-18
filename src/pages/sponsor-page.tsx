import React from 'react';
import SocialListContainer from "../containers/social-list-container";
import SponsorListContainer from "../containers/sponsor-list-container";

const SponsorPage: React.FC = () => {
    return (
        <div className="uk-section-large uk-padding-remove-top">
            <div className="uk-container">
                <h1>Для спонсоров</h1>
                <div data-uk-grid="margin: uk-margin-large-top">
                    <div className="uk-width-2-3@m">
                        <div className="page__desc">
                            Если вы хотите выступить спонсором на мероприятии или поддержать информационно свяжитесь с
                            организаторами мероприятий.
                        </div>
                        <h3 className="sponsor__list-title">Список организаторов мероприятий</h3>
                        <div className="uk-width-3-4@s">
                            <SponsorListContainer />
                        </div>
                    </div>
                    <div className="uk-width-1-3@m">
                        <SocialListContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorPage;
