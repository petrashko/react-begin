// /* eslint-disable */

// eslint-disable-next-line
import {v4 as uuidv4} from 'uuid';
//
import { ADD_CHAT, DELETE_CHAT } from './actions.js';

const initialState = {
    chatList: [
        /*
        {id: uuidv4(), name: 'Chat 1'},
        {id: uuidv4(), name: 'Chat 2'},
        {id: uuidv4(), name: 'Chat 3'},
        {id: uuidv4(), name: 'Chat 4'}
        */
        {id: 'chat-1', name: 'Chat 1'},
        {id: 'chat-2', name: 'Chat 2'},
        {id: 'chat-3', name: 'Chat 3'},
        {id: 'chat-4', name: 'Chat 4'}
    ],
}

const chatsReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [...state.chatList, action.payload]
            }
        case DELETE_CHAT:
            const newList = state.chatList.filter(item => item.id !== action.payload);
            return {
                ...state,
                chatList: newList
            }
        default:
            return state;
    }
}

export {chatsReducer};
