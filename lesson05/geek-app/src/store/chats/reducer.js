// /* eslint-disable */

// eslint-disable-next-line
import {v4 as uuidv4} from 'uuid';

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
    messageList: [],
}

const chatsReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messageList: [...state.messageList, action.payload]
            }
        case 'CLEAR_CHAT':
            return {
                ...state,
                messageList: []
            }
        default:
            return state;
    }
}

export {chatsReducer};
