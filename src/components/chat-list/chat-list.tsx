import React, {Fragment} from "react";
import ChatItem from "../chat-item/chat-item";
import {Chat} from "../../types";

type Props = {
    chats: Array<Chat>
}

const ChatList: React.FC<Props> = (props) => {
    const { chats } = props;
    return (
        <Fragment>
            {
                chats.map((chat: Chat) => {
                    return (
                        <ChatItem key={chat.id} chat={chat} />
                    );
                })
            }
        </Fragment>
    );
};

export default ChatList;
