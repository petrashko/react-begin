// /* eslint-disable */

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_CHAT = 'MESSAGES::ADD_CHAT';

export const addMessage = (value) => {
    return {
        type: ADD_MESSAGE,
        payload: value
    }
}

export const addChat = (value) => {
    return {
        type: ADD_CHAT,
        payload: value
    }
}