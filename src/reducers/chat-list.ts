import {AnyAction} from "redux";
import {Chat} from "../types";

const initialState = {
    filter: 'all',
    chats: [] as Array<Chat>,
    loading: true,
    error: null as string | null
}

export type ChatState = typeof initialState;

export const ActionType = {
    FETCH_CHATS_REQUEST: 'FETCH_CHATS_REQUEST',
    FETCH_CHATS_SUCCESS: 'FETCH_CHATS_SUCCESS',
    FETCH_CHATS_FAILURE: 'FETCH_CHATS_FAILURE',
    FILTER_CHATS: 'FILTER_CHATS'
};

let allChats: Array<Chat>;
const filterChats = (state: any, action: AnyAction): ChatState => {
    if (!allChats) {
        allChats = state.chats;
    }
    if (action.payload === 'all') {
        return {...state, filter: 'marketing', chats: allChats}
    }
    const filteredChats = allChats.filter((item) => {
        return item.scope.find(it => it.toLowerCase() === action.payload)
    });
    return {...state, filter: 'marketing', chats: filteredChats}
}

const chatList = (state: ChatState = initialState, action: AnyAction): ChatState => {
    switch (action.type) {
        case ActionType.FETCH_CHATS_REQUEST:
            return {
                ...state,
                chats: [],
                loading: true,
                error: null,
            };
        case ActionType.FETCH_CHATS_SUCCESS:
            return {
                ...state,
                chats: action.payload,
                loading: false,
                error: null,
            };
        case ActionType.FETCH_CHATS_FAILURE:
            return {
                ...state,
                chats: [],
                loading: false,
                error: action.payload,
            };
        case ActionType.FILTER_CHATS:
            return filterChats(state, action)
        default:
            return state;
    }
};

export default chatList;
