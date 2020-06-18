import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import {fetchChats, filterChats} from "../actions/chat-list";
import withDataService from "../hocs/with-data-service";
import compose from "../utils/compose";
import {bindActionCreators, Dispatch} from "redux";
import ChatList from "../components/chat-list/chat-list";
import RequestStatus from "../hocs/request-status";
import {Chat, OwnProps} from "../types";
import {ChatState} from "../reducers/chat-list";
import {RootState} from "../reducers";

type Props = {
    filterChats: (filter: string) => {}
    fetchChats: () => Array<Chat>
} & ChatState

class ChatListContainer extends PureComponent<Props> {
    componentDidMount() {
        this.props.fetchChats();
    }

    render() {
        const { chats, loading, error, filterChats } = this.props;
        return (
            <RequestStatus loading={loading} error={error}>
                <Fragment>
                    <div className="uk-margin-medium-bottom">
                        <div className="uk-margin-bottom uk-width-1-1 uk-width-auto@s"
                             data-uk-form-custom="target: > * > span:first-child">
                            <select onChange={e => filterChats(e.target.value)}>
                                <option value="all">Все</option>
                                <option value="design">Design</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="mobile">Mobile</option>
                                <option value="marketing">Marketing</option>
                            </select>
                            <button className="uk-button select-btn uk-width-1-1" type="button" tabIndex={-1}>
                                <span></span>
                                <img src="/img/icons/arrow.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="uk-width-3-4@s">
                        <ChatList chats={chats} />
                    </div>
                </Fragment>
            </RequestStatus>
        );
    }
}

const mapStateToProps = ({ chatList: { chats, loading, error } }: RootState) => {
    return { chats, loading, error };
}

const mapDispatchToProps = (dispatch: Dispatch, { dataService }: OwnProps) => {
    return bindActionCreators({
        fetchChats: fetchChats(dataService),
        filterChats
    }, dispatch)
}

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps))(ChatListContainer);
