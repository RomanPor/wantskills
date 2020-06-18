import {Chat} from "../types";
import {IDataService} from "../services/data-service";
import {Dispatch} from "redux";
import {ActionType} from "../reducers/chat-list";

const chatsRequested = () => {
    return {
        type: ActionType.FETCH_CHATS_REQUEST
    }
};

const chatsLoaded = (newChats: Array<Chat>) => {
    return {
        type: ActionType.FETCH_CHATS_SUCCESS,
        payload: newChats
    };
};

const chatsError = (error: string) => {
    return {
        type: ActionType.FETCH_CHATS_FAILURE,
        payload: error
    };
};

const filterChats = (filter: string) => {
    return {
        type: ActionType.FILTER_CHATS,
        payload: filter
    };
};


const fetchChats = (dataService: IDataService) => () => (dispatch: Dispatch) => {
    const chatsRequest = dataService.getChats();
    if (chatsRequest instanceof Promise) {
        dispatch(chatsRequested());
        chatsRequest
            .then((data) => {
                dispatch(chatsLoaded(data))
            })
            .catch((err) => dispatch(chatsError(err)));
    } else {
        dispatch(chatsLoaded(chatsRequest));
    }
};

export {
    fetchChats,
    filterChats
};
