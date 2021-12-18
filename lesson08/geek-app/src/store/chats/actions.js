// /* eslint-disable */

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const addChat = (value) => {
    return {
        type: ADD_CHAT,
        payload: value
    }
}

export const deleteChat = (value) => {
    return {
        type: DELETE_CHAT,
        payload: value
    }
}
