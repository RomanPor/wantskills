import React from 'react';
import {Sponsor} from "../../types";

type Props = {
    sponsor: Sponsor
}

const SponsorItem: React.FC<Props> = (props) => {
    const { title, success, scope, contact, phone, email } = props.sponsor;
    return (
        <div className="sponsor-item">
            <div className="sponsor-item__title">{ title }</div>
            <div className="sponsor-item__desc">
                <div className="uk-grid-small" data-uk-grid>
                    { success.map((item, idx) => <div key={idx}>{ item }</div>) }
                </div>
            </div>
            <div className="sponsor-item__scope">
                <h6 className="uk-visible@s">Сфера</h6>
                <div className="uk-grid-small" data-uk-grid>
                    { scope.map((item, idx) => <div key={idx}>{ item }</div>) }
                </div>
            </div>
            <div className="sponsor-item__contacts">
                <div className="sponsor-item__user">
                    <img src="/img/icons/user.svg" alt="" />
                        <span className="uk-margin-small-left">{ contact }</span>
                </div>
                <div data-uk-grid>
                    <div>
                        <a href={`tel:${ phone }`}>
                            <img src="/img/icons/phone.svg" data-uk-svg alt="" />
                                <span className="uk-margin-small-left">{ phone }</span>
                        </a>
                    </div>
                    <div>
                        <a href={`mailto:${ email }`}>
                            <img src="/img/icons/mail.svg" data-uk-svg alt="" />
                                <span className="uk-margin-small-left">{ email }</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

);
}

export default SponsorItem;
