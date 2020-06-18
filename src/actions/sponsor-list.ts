import {Sponsor} from "../types";
import {IDataService} from "../services/data-service";
import {Dispatch} from "redux";
import {ActionType} from "../reducers/sponsor-list";

const sponsorsRequested = () => {
    return {
        type: ActionType.FETCH_SPONSORS_REQUEST
    }
};

const sponsorsLoaded = (newSponsors: Array<Sponsor>) => {
    return {
        type: ActionType.FETCH_SPONSORS_SUCCESS,
        payload: newSponsors
    };
};

const sponsorsError = (error: string) => {
    return {
        type: ActionType.FETCH_SPONSORS_FAILURE,
        payload: error
    };
};

const fetchSponsors = (dataService: IDataService) => () => (dispatch: Dispatch) => {
    dispatch(sponsorsRequested());
    dataService.getSponsors()
        .then((data: Array<Sponsor>) => dispatch(sponsorsLoaded(data)))
        .catch((err: string) => dispatch(sponsorsError(err)));
};

export {
    fetchSponsors
};
