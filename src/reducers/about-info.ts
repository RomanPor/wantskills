import {AnyAction} from "redux";
import {About} from "../types";

const initialState = {
    about: null as About | null,
    loading: true,
    error: null as string | null
}
export type AboutState = typeof initialState;

export const ActionType = {
    FETCH_ABOUT_REQUEST: 'FETCH_ABOUT_REQUEST',
    FETCH_ABOUT_SUCCESS: 'FETCH_ABOUT_SUCCESS',
    FETCH_ABOUT_FAILURE: 'FETCH_ABOUT_FAILURE'
};

const aboutInfo = (state: AboutState = initialState, action: AnyAction): AboutState => {
    switch (action.type) {
        case  ActionType.FETCH_ABOUT_REQUEST:
            return {
                about: null,
                loading: true,
                error: null,
            };
        case  ActionType.FETCH_ABOUT_SUCCESS:
            return {
                about: action.payload,
                loading: false,
                error: null,
            };
        case  ActionType.FETCH_ABOUT_FAILURE:
            return {
                about: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default aboutInfo;
