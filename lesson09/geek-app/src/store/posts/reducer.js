// /* eslint-disable */

import { POSTS_FETCHING, POSTS_FETCHED, POSTS_FETCHING_ERROR } from './actions.js';

const initialState = {
    postList: [],
    postsLoadingStatus: 'idle',
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_FETCHING:
            return {
                ...state,
                postList: [],
                postsLoadingStatus: 'loading'
            }
        case POSTS_FETCHED:
            return {
                ...state,
                postList: action.payload,
                postsLoadingStatus: 'idle'
            }
        case POSTS_FETCHING_ERROR:
            return {
                ...state,
                postsLoadingStatus: 'error'
            }
        default:
            return state;
    }
}

export {postsReducer};
