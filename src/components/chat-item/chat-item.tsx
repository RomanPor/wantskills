import React from 'react';
import {Chat} from "../../types";

type Props = {
    chat: Chat
}

const ChatItem: React.FC<Props> = (props) => {
    const {title, scope, telegram_link, telegram_title} = props.chat
    return (
        <div className="chat-item">
            <div className="chat-item__title">{ title }</div>
            <div className="chat-item__scope">
                <h6 className="uk-visible@s">Сфера</h6>
                <div className="uk-grid-small" data-uk-grid>
                    { scope.map((item, idx) => <div key={idx}>{ item }</div>) }
                </div>
            </div>
            <div>
                <a href={telegram_link}>{telegram_title}</a>
            </div>
        </div>
    );
}

export default ChatItem;
