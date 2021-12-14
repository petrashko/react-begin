// /* eslint-disable */

import { ADD_MESSAGE, ADD_CHAT } from './actions.js';

const initialState = {
    messageListFromChats: {
        'chat-1': [],
        'chat-2': [],
        'chat-3': [],
        'chat-4': [],
    }
}

const messagesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            const {chatId, ...messageObj} = action.payload;
            const messageList = [...state.messageListFromChats[chatId], messageObj];
            return {
                ...state,
                messageListFromChats: {
                    ...state.messageListFromChats,
                    [chatId]: messageList
                }
            }
        case ADD_CHAT:
            return {
                ...state,
                messageListFromChats: {
                    ...state.messageListFromChats,
                    [action.payload]: []
                }
            }
        default:
            return state;
    }
}

export {messagesReducer};
