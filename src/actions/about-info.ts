import {About} from "../types";
import {Dispatch} from "redux";
import {IDataService} from "../services/data-service";
import {ActionType} from "../reducers/about-info";

const aboutRequested = () => {
    return {
        type: ActionType.FETCH_ABOUT_REQUEST
    }
};

const aboutLoaded = (newAbout: About) => {
    return {
        type: ActionType.FETCH_ABOUT_SUCCESS,
        payload: newAbout
    };
};

const aboutError = (error: string) => {
    return {
        type: ActionType.FETCH_ABOUT_FAILURE,
        payload: error
    };
};

const fetchAbout = (dataService: IDataService) => () => (dispatch: Dispatch) => {
    const aboutRequest = dataService.getAbout();
    if (aboutRequest instanceof Promise) {
        dispatch(aboutRequested());
        aboutRequest
            .then((data) => {
                dispatch(aboutLoaded(data))
            })
            .catch((err) => dispatch(aboutError(err)));
    } else {
        dispatch(aboutLoaded(aboutRequest));
    }
};

export {
    fetchAbout
};
