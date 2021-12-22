// /* eslint-disable */

import { SET_AUTH_USER, REMOVE_AUTH_USER } from './actions.js';

const initialState = {
    authUser: {
        token: null,
        email: null,
        id: null
    }
};

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                authUser: action.payload
            }
        case REMOVE_AUTH_USER:
            return {
                ...state,
                authUser: {
                    token: null,
                    email: null,
                    id: null
                }
            }
        default:
            return state;
    }
}

export {userReducer};
