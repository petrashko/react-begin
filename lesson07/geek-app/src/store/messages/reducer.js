// /* eslint-disable */

import { ADD_MESSAGE, /*ADD_CHAT,*/ DELETE_CHAT } from './actions.js';

const initialState = {
    messageListFromChats: {},
}

const messagesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            const {chatId, ...messageObj} = action.payload;
            
            const newMessageList = {...state.messageListFromChats};

            newMessageList[chatId] = [
                ...(newMessageList[chatId] || []),
                messageObj
            ];
            
            return {
                ...state,
                messageListFromChats: newMessageList
            }
        }
        /*
        case ADD_CHAT: {
            const newMessageList = {...state.messageListFromChats};
            newMessageList[action.payload] = [];
            
            return {
                ...state,
                messageListFromChats: newMessageList
            }
        }
        */
        case DELETE_CHAT: {
            if (!state.messageListFromChats.hasOwnProperty(action.payload)) {
                return state;
            }

            const newMessageList = {...state.messageListFromChats};
            delete newMessageList[action.payload];

            return {
                ...state,
                messageListFromChats: newMessageList
            }
        }
        default:
            return state;
    }
}

export {messagesReducer};
