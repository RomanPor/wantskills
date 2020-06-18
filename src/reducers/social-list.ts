import {AnyAction} from "redux";
import {Social} from "../types";

const initialState = {
    socials: [] as Array<Social>,
    loading: true,
    error: null as string | null
}

export type SocialState = typeof initialState;

export const ActionType = {
    FETCH_SOCIALS_REQUEST: 'FETCH_SOCIALS_REQUEST',
    FETCH_SOCIALS_SUCCESS: 'FETCH_SOCIALS_SUCCESS',
    FETCH_SOCIALS_FAILURE: 'FETCH_SOCIALS_FAILURE'
}

const socialList = (state: SocialState = initialState, action: AnyAction): SocialState => {

    switch (action.type) {
        case ActionType.FETCH_SOCIALS_REQUEST:
            return {
                socials: [],
                loading: true,
                error: null,
            };

        case ActionType.FETCH_SOCIALS_SUCCESS:
            return {
                socials: action.payload,
                loading: false,
                error: null,
            };

        case ActionType.FETCH_SOCIALS_FAILURE:
            return {
                socials: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default socialList;
