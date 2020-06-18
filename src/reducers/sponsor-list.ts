import {AnyAction} from "redux";
import {Sponsor} from "../types";

const initialState = {
    sponsors: [] as Array<Sponsor>,
    loading: true,
    error: null as string | null
}

export type SponsorState = typeof initialState;

export const ActionType = {
    FETCH_SPONSORS_REQUEST: 'FETCH_SPONSORS_REQUEST',
    FETCH_SPONSORS_SUCCESS: 'FETCH_SPONSORS_SUCCESS',
    FETCH_SPONSORS_FAILURE: 'FETCH_SPONSORS_FAILURE'
}

const sponsorList = (state: SponsorState = initialState, action: AnyAction): SponsorState => {

    switch (action.type) {
        case ActionType.FETCH_SPONSORS_REQUEST:
            return {
                sponsors: [],
                loading: true,
                error: null,
            };

        case ActionType.FETCH_SPONSORS_SUCCESS:
            return {
                sponsors: action.payload,
                loading: false,
                error: null,
            };

        case ActionType.FETCH_SPONSORS_FAILURE:
            return {
                sponsors: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default sponsorList;
