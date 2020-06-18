import React from 'react';
import {Link} from "react-router-dom";
import {Event} from "../../types";

type Props = {
    event: Event
}

const EventItem: React.FC<Props> = (props) => {
    const { id, title, short_desc, date, scope, price, promocode, view } = props.event;
    return (
        <Link to={`/event/${id}`} className="event-item">
            <div className="uk-flex-between" data-uk-grid>
                <div>
                    <div className="event-item__title">{title}</div>
                    <div className="fz14">{short_desc}</div>
                </div>
                <div className="event-item__date uk-width-1-1 uk-width-auto@s">{date}</div>
            </div>
            <div className="event-item__scope">
                <div className="uk-grid-small" data-uk-grid>
                    { scope.map((item, idx) => <div key={idx}>{item}</div>) }
                </div>
            </div>
            <div className="uk-flex-middle" data-uk-grid="margin: uk-margin-small-top">
                <div className="event-item__price uk-width-1-1 uk-width-auto@s">{price}</div>
                {promocode ? <div className="event-item__promocode">Есть промокод</div> : null}
                <div className="event-item__view">
                    <img src="/img/icons/eye.svg" alt=""/>
                    <span>{view}</span>
                </div>
            </div>
        </Link>
    );
}

export default EventItem;
