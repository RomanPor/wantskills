import eventList from './event-list';
import socialList from "./social-list";
import sponsorList from "./sponsor-list";
import aboutInfo from './about-info'
import chatList from "./chat-list";
import chatForm from "./chat-form";
import addEventForm from "./add-event-form";
import {combineReducers} from "redux";

const reducer = combineReducers({
    eventList,
    socialList,
    sponsorList,
    aboutInfo,
    chatList,
    chatForm,
    addEventForm
})

export type RootState = ReturnType<typeof reducer>

export default reducer;
