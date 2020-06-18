import React, {Fragment, PureComponent} from 'react';
import EventList from "../components/event-list/event-list";
import {connect} from 'react-redux';
import {fetchEvents, filterEvents} from '../actions/event-list';
import withDataService from "../hocs/with-data-service";
import compose from "../utils/compose";
import {bindActionCreators, Dispatch} from "redux";
import RequestStatus from "../hocs/request-status";
import EventFilter from "../components/event-filter/event-filter";
import {EventsState} from "../reducers/event-list";
import {RootState} from "../reducers";
import {Event, OwnProps} from "../types";

type Props = {
    fetchEvents: () => Array<Event>
} & EventsState

class EventListContainer extends PureComponent<Props> {
    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        const { events, loading, error } = this.props;
        return (
            <RequestStatus loading={loading} error={error}>
                <Fragment>
                    <EventFilter events={events} filterEvents={filterEvents} />
                    <EventList events={events} />
                </Fragment>
            </RequestStatus>
        );
    }
}

const mapStateToProps = ({eventList: { events, loading, error }}: RootState) => {
    return { events, loading, error };
}

const mapDispatchToProps = (dispatch: Dispatch, { dataService }: OwnProps) => {
    return bindActionCreators({
        fetchEvents: fetchEvents(dataService),
        filterEvents
    }, dispatch)
}

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps))(EventListContainer);
