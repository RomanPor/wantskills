import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {fetchSocials} from '../actions/social-list';
import withDataService from "../hocs/with-data-service";
import compose from "../utils/compose";
import {bindActionCreators, Dispatch} from "redux";
import SocialList from "../components/social-list/social-list";
import RequestStatus from "../hocs/request-status";
import {OwnProps, Social} from "../types";
import {RootState} from "../reducers";
import {SocialState} from "../reducers/social-list";

type Props = {
    fetchSocials: () => Array<Social>
} & SocialState

class SocialListContainer extends PureComponent<Props> {
    componentDidMount() {
        this.props.fetchSocials();
    }

    render() {
        const { socials, loading, error } = this.props;
        return (
            <RequestStatus loading={loading} error={error}>
                <SocialList socials={socials} />
            </RequestStatus>
        );
    }
}

const mapStateToProps = ({ socialList: { socials, loading, error } }: RootState) => {
    return { socials, loading, error };
}

const mapDispatchToProps = (dispatch: Dispatch, { dataService }: OwnProps) => {
    return bindActionCreators({
        fetchSocials: fetchSocials(dataService)
    }, dispatch)
}

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps))(SocialListContainer);
