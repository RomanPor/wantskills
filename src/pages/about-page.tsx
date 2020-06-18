import React from 'react';
import SocialListContainer from "../containers/social-list-container";
import AboutInfoContainer from "../containers/about-info-container"

const AboutPage: React.FC = () => {
    return (
        <div className="uk-section-large uk-padding-remove-top">
            <div className="uk-container">
                <h1>О проекте</h1>
                <div data-uk-grid="margin: uk-margin-large-top">
                    <div className="uk-width-2-3@m">
                        <AboutInfoContainer />
                    </div>
                    <div className="uk-width-1-3@m">
                        <SocialListContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
