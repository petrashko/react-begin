// /* eslint-disable */
import { Routes, Route } from 'react-router-dom';
//
import {v4 as uuidv4} from 'uuid';
//
import { Layout } from '../layout/Layout.jsx';
//
import { HomePage } from '../../pages/home/HomePage.jsx';
import { ProfilePage } from '../../pages/profile/ProfilePage.jsx';
import { ChatListPage } from '../../pages/chatList/ChatListPage.jsx';
import { NotFoundPage } from '../../pages/notFoundPage/NotFoundPage.jsx';
//
import { Chat } from '../chat/Chat.jsx';
//
import styles from './App.module.css';

const initialChats = [
    {id: uuidv4(), name: 'Chat 1'},
    {id: uuidv4(), name: 'Chat 2'},
    {id: uuidv4(), name: 'Chat 3'},
    {id: uuidv4(), name: 'Chat 4'}
];

const App = () => {
    //
    return (
        <div className={styles.App}>
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    {/*
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/chats" element={<ChatListPage chatList={initialChats}/>} />
                    <Route path="*" element={<NotFoundPage />} />
                    */}
                    <Route
                        index
                        element={<HomePage />}
                    />
                    <Route
                        path="profile"
                        element={<ProfilePage />}
                    />
                    <Route
                        path="chats"
                        element={<ChatListPage chatList={initialChats} />}
                    >
                        <Route path="talk/:chatId"  element={<Chat chatList={initialChats} />} />
                    </Route>
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
