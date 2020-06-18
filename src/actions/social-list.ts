import {Social} from "../types";
import {Dispatch} from "redux";
import {IDataService} from "../services/data-service";
import {ActionType} from "../reducers/social-list";


const socialsRequested = () => {
    return {
        type: ActionType.FETCH_SOCIALS_REQUEST
    }
};

const socialsLoaded = (newSocials: Array<Social>) => {
    return {
        type: ActionType.FETCH_SOCIALS_SUCCESS,
        payload: newSocials
    };
};

const socialsError = (error: string) => {
    return {
        type: ActionType.FETCH_SOCIALS_FAILURE,
        payload: error
    };
};


const fetchSocials = (dataService: IDataService) => () => (dispatch: Dispatch) => {
    const socialsRequest = dataService.getSocials();
    if (socialsRequest instanceof Promise) {
        dispatch(socialsRequested());
        socialsRequest
            .then((data) => {
                dispatch(socialsLoaded(data))
            })
            .catch((err) => dispatch(socialsError(err)));
    } else {
        dispatch(socialsLoaded(socialsRequest));
    }
};

export {
    fetchSocials
};
