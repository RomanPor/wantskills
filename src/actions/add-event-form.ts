import {IDataService} from "../services/data-service";
import {Dispatch} from "redux";
import {ActionType} from "../reducers/add-event-form";

const eventValueChange = (value: string, target: string) => {
    return {
        type: ActionType.EVENT_VALUE_CHANGE,
        value,
        target
    };
};

const postRequested = () => {
    return {
        type: ActionType.POST_EVENT_REQUEST
    }
};

const postLoaded = () => {
    return {
        type: ActionType.POST_EVENT_SUCCESS,
    };
};

const postError = (error: string) => {
    return {
        type: ActionType.POST_EVENT_FAILURE,
        payload: error
    };
};

const postEvent = (dataService: IDataService) => (data: string) => (dispatch: Dispatch) => {
    dispatch(postRequested());
    dataService.postEvent(data)
        .then(() => dispatch(postLoaded()))
        .catch((err: string) => dispatch(postError(err)));
};

export {
    eventValueChange,
    postEvent
};
