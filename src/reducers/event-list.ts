import {AnyAction} from "redux";
import {Event} from "../types";

const initialState = {
    events: [] as Array<Event>,
    loading: true,
    error: null as string | null
};

export type EventsState = typeof initialState;

export const ActionType = {
    FETCH_EVENTS_REQUEST: 'FETCH_EVENTS_REQUEST',
    FETCH_EVENTS_SUCCESS: 'FETCH_EVENTS_SUCCESS',
    FETCH_EVENTS_FAILURE: 'FETCH_EVENTS_FAILURE',
    FILTER_EVENTS: 'FILTER_EVENTS'
}

const filterEvents = (state: EventsState, action: AnyAction): EventsState => {
    return initialState
};

const eventList = (state: EventsState = initialState, action: AnyAction): EventsState => {

    switch (action.type) {
        case ActionType.FETCH_EVENTS_REQUEST:
            return {
                ...state,
                events: [],
                loading: true,
                error: null
            };

        case ActionType.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                loading: false,
                error: null
            };

        case ActionType.FETCH_EVENTS_FAILURE:
            return {
                ...state,
                events: [],
                loading: false,
                error: action.payload
            };

        case ActionType.FILTER_EVENTS:
            return filterEvents(state, action)

        default:
            return state;
    }
};

export default eventList;
