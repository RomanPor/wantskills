import React from "react";
import {Social} from "../../types";

type Props = {
    social: Social
}

const SocialItem: React.FC<Props> = (props) => {
    const { link, name } = props.social;
    return (
        <a href={link} className="uk-button uk-button-default uk-width-1-1">{ name }</a>
    );
};

export default SocialItem;
