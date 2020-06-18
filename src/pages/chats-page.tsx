import React from 'react';
import SocialListContainer from "../containers/social-list-container";
import ChatListContainer from "../containers/chat-list-container";
import ChatForm from "../components/chat-form/chat-form";

const ChatsPage: React.FC = () => {
    return (
        <div>
            <div className="uk-section-large uk-padding-remove-top">
                <div className="uk-container">
                    <h1>Список чатов и сообществ Краснодара</h1>
                    <div data-uk-grid="margin: uk-margin-large-top">
                        <div className="uk-width-2-3@m">
                            <div className="page__desc">
                                <p>Мир, дружба и жвачка. Готовы стирать границы между людьми, компаниями, чатами и
                                    организаторами.
                                    Благодаря доступности знаний, специалисты и компании будут только в выигрыше.</p>
                                <p>На этой странице будем добавлять и поддерживать информацию о сообществах и чатах.</p>
                            </div>
                            <ChatListContainer />
                        </div>
                        <div className="uk-width-1-3@m">
                            <SocialListContainer />
                        </div>
                    </div>
                </div>
            </div>
            <ChatForm />
        </div>
    );
};

export default ChatsPage;
