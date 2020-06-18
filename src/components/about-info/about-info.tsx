import React, {Fragment} from "react";
import {About} from "../../types";

type Props = {
    about: About | null
}

const AboutInfo: React.FC<Props> = (props) => {
    const {short_description, description, name, position, phone, email, telegram_title, telegram_link, image} = props.about as About
    return (
        <Fragment>
            <div className="page__desc">
                {short_description}
            </div>
            <div className="uk-margin-large-bottom" dangerouslySetInnerHTML={{__html: description}}>
        </div>
            <div>
                <h3>Контакты</h3>
                <div className="about-card">
                    <div className="about-card__img">
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <div className="about-card__name">{name}</div>
                        <div className="about-card__position">{position}</div>
                        <div className="margin-bottom-12">
                            <a href={`tel:${phone}`}>
                                <img src="/img/icons/phone.svg" alt="" data-uk-svg />
                                <span className="uk-margin-small-left">{phone}</span>
                            </a>
                        </div>
                        <div className="margin-bottom-12">
                            <a href={`mailto:${email}`}>
                                <img src="/img/icons/mail.svg" alt="" data-uk-svg />
                                <span className="uk-margin-small-left">{email}</span>
                            </a>
                        </div>
                        <div><a href={telegram_link}>{telegram_title}</a></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AboutInfo;
