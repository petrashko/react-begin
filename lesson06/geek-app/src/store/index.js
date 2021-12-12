// /* eslint-disable */

// eslint-disable-next-line
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// eslint-disable-next-line
import ReduxThunk from 'redux-thunk';
//
import {configureStore} from '@reduxjs/toolkit';
//
import { profileReducer } from './profile/reducer.js';
import { chatsReducer } from './chats/reducer.js';
import { testCounterReducer } from './testCounter/reducer.js';

/*
const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        testCounter: testCounterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/

const stringMiddleware = () => (next) => (action) => {
    if (typeof(action) === 'string') {
        return next({
            type: action
        });
    }

    return next(action);
}

/*
const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        testCounter: testCounterReducer
    }),
    compose(
        applyMiddleware(
            ReduxThunk,
            stringMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
*/

const store = configureStore({
    reducer: {
        profile: profileReducer,
        chats: chatsReducer,
        testCounter: testCounterReducer
    },
    /*
    middleware: [
        ReduxThunk,
        stringMiddleware
    ],
    */
    // Или (getDefaultMiddleware() - включает в себя ReduxThunk)
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export {store};
