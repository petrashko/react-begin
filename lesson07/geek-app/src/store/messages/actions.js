// /* eslint-disable */

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';

export const addMessage = (newMessage) => {
    return {
        type: ADD_MESSAGE,
        payload: newMessage
    }
}

export const addMessageWithBot = (newMessage) => (dispatch) => {
    dispatch( addMessage(newMessage) );
    
    if (newMessage.author !== 'bot') {
        const botMessage = {
            chatId: newMessage.chatId,
            text: 'Hello User! I am bot',
            author: 'bot'
        };
        setTimeout(() => {
            dispatch( addMessage(botMessage) );
        }, 1500);
    }
}

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
