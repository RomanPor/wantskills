import {IDataService} from "../services/data-service";
import {Dispatch} from "redux";
import {ActionType} from "../reducers/event-list";

const eventsRequested = () => {
    return {
        type: ActionType.FETCH_EVENTS_REQUEST
    }
};

const eventsLoaded = (newEvents: Array<Event>) => {
    return {
        type: ActionType.FETCH_EVENTS_SUCCESS,
        payload: newEvents
    };
};

const eventsError = (error: string) => {
    return {
        type: ActionType.FETCH_EVENTS_FAILURE,
        payload: error
    };
};

const filterEvents = (filter: string) => {
    return {
        type: ActionType.FILTER_EVENTS,
        payload: filter
    };
};

const fetchEvents = (dataService: IDataService) => () => (dispatch: Dispatch) => {
    dispatch(eventsRequested());
    dataService.getEvents()
        .then((data: Array<Event>) => dispatch(eventsLoaded(data)))
        .catch((err: string) => dispatch(eventsError(err)));
};

export {
    fetchEvents,
    filterEvents
};
