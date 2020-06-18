import React from 'react';
import EventItem from '../event-item/event-item';
import {Event} from "../../types";

type Props = {
    events: Array<Event>
}

const EventList: React.FC<Props> = (props) => {
    const { events } = props
    return (
        <div>
            {
                events.map((event: Event) => {
                    return (
                        <EventItem key={event.id} event={event} />
                    );
                })
            }
        </div>
    );
};

export default EventList;
