// /* eslint-disable */

import { IS_SHOW_NAME, CHANGE_NAME } from './actions.js';

const initialState = {
    name: 'GeekBrains',
    isShowName: false
};

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case IS_SHOW_NAME:
            return {
                ...state,
                //isShowName: !state.isShowName
                isShowName: action.payload
            }
        default:
            return state;
    }
}

export {profileReducer};
