import React from 'react';
import SocialItem from "../social-item/social-item";
import {Social} from "../../types";

type Props = {
    socials: Array<Social>
}

const SocialList: React.FC<Props> = ( props ) => {
    const { socials } = props
    return (
        <div className="socials__aside">
            <h3>Будь в курсе событий!</h3>
            <ul className="uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-1@m uk-grid-medium" data-uk-grid>
                { socials.map((item, idx) => <li key={idx}><SocialItem social={item} /></li>)}
            </ul>
        </div>
    );
}

export default SocialList;
