import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {fetchAbout} from '../actions/about-info';
import withDataService from "../hocs/with-data-service";
import compose from "../utils/compose";
import {bindActionCreators, Dispatch} from "redux";
import AboutInfo from "../components/about-info/about-info"
import RequestStatus from "../hocs/request-status";
import {About, OwnProps} from "../types";
import {AboutState} from "../reducers/about-info";
import {RootState} from "../reducers";

type Props = {
    fetchAbout: () => About
} & AboutState

class AboutInfoContainer extends PureComponent<Props> {
    componentDidMount() {
        this.props.fetchAbout();
    }
    render() {
        const { about, loading, error } = this.props;
        return (
            <RequestStatus loading={loading} error={error}>
                <AboutInfo about={about} />
            </RequestStatus>
        );
    }
}

const mapStateToProps = ({ aboutInfo: { about, loading, error } }: RootState): AboutState => ({about, loading, error})

const mapDispatchToProps = (dispatch: Dispatch , { dataService }: OwnProps) => {
    return bindActionCreators({
        fetchAbout: fetchAbout(dataService)
    }, dispatch)
}

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps))(AboutInfoContainer);
