// /* eslint-disable */

// eslint-disable-next-line
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// eslint-disable-next-line
import ReduxThunk from 'redux-thunk';
//
import { configureStore } from '@reduxjs/toolkit';
//
//import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
//
import { profileReducer } from './profile/reducer.js';
import { chatsReducer } from './chats/reducer.js';
import { messagesReducer } from './messages/reducer.js';
import { postsReducer } from './posts/reducer.js';
import { userReducer } from './user/reducer.js';
import { testCounterReducer } from './testCounter/reducer.js';

/*
const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer,
        posts: postsReducer,
        user: userReducer,
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
        messages: messagesReducer,
        posts: postsReducer,
        user: userReducer,
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
        messages: messagesReducer,
        posts: postsReducer,
        user: userReducer,
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

// ДЗ - 7
/*
const roomsPersistConfig = {
    key: 'rootRooms',
    version: 1,
    storage
}

const chatsPersistedReducer = persistReducer(roomsPersistConfig, chatsReducer);

const msgPersistConfig = {
    key: 'rootMsg',
    version: 1,
    storage
}

const messagesPersistedReducer = persistReducer(msgPersistConfig, messagesReducer);

const store = configureStore({
    reducer: {
        profile: profileReducer,
        chats: chatsPersistedReducer,
        messages: messagesPersistedReducer,
        posts: postsReducer,
        testCounter: testCounterReducer
    },
    / *
    middleware: [
        ReduxThunk,
        stringMiddleware
    ],
    * /
    // Или (getDefaultMiddleware() - включает в себя ReduxThunk)
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }).concat(stringMiddleware);
    },
    devTools: process.env.NODE_ENV !== 'production'
});
*/
export {store};
