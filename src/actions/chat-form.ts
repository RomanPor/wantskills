import {IDataService} from "../services/data-service";
import {Dispatch} from "redux";
import {ActionType} from "../reducers/chat-form";

const chatValueChange = (value: string, target: string) => {
    return {
        type: ActionType.CHAT_VALUE_CHANGE,
        value,
        target
    };
};

const postRequested = () => {
    return {
        type: ActionType.POST_CHAT_REQUEST
    }
};

const postLoaded = () => {
    return {
        type: ActionType.POST_CHAT_SUCCESS,
    };
};

const postError = (error: string) => {
    return {
        type: ActionType.POST_CHAT_FAILURE,
        payload: error
    };
};

const postChat = (dataService: IDataService) => (data: any) => (dispatch: Dispatch) => {
    dispatch(postRequested());
    dataService.postChat(data)
        .then(() => dispatch(postLoaded()))
        .catch((err: string) => dispatch(postError(err)));
};

export {
    chatValueChange,
    postChat
};
