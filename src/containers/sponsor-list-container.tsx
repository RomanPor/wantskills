import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {fetchSponsors} from '../actions/sponsor-list';
import withDataService from "../hocs/with-data-service";
import compose from "../utils/compose";
import {bindActionCreators, Dispatch} from "redux";
import SponsorList from "../components/sponsor-list/sponsor-list";
import RequestStatus from "../hocs/request-status";
import {RootState} from "../reducers";
import {OwnProps, Sponsor} from "../types";
import {SponsorState} from "../reducers/sponsor-list";

type Props = {
    fetchSponsors: () => Array<Sponsor>
} & SponsorState

class SponsorListContainer extends PureComponent<Props> {
    componentDidMount() {
        this.props.fetchSponsors();
    }
    render() {
        const { sponsors, loading, error } = this.props;
        return (
            <RequestStatus loading={loading} error={error}>
                <SponsorList sponsors={sponsors} />
            </RequestStatus>
        );
    }
}

const mapStateToProps = ({ sponsorList: { sponsors, loading, error } }: RootState) => {
    return { sponsors, loading, error };
}

const mapDispatchToProps = (dispatch: Dispatch, { dataService }: OwnProps) => {
    return bindActionCreators({
        fetchSponsors: fetchSponsors(dataService)
    }, dispatch)
}

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps))(SponsorListContainer);
