import React, {Fragment} from "react";
import SponsorItem from "../sponsor-item/sponsor-item";
import {Sponsor} from "../../types";

type Props = {
    sponsors: Array<Sponsor>
}

const SponsorList: React.FC<Props> = (props) => {
    const { sponsors } = props;
    return (
        <Fragment>
            {
                sponsors.map((sponsor, idx) => {
                    return (
                        <div key={idx}>
                            <SponsorItem sponsor={sponsor} />
                        </div>
                    );
                })
            }
        </Fragment>
    );
};

export default SponsorList;
