// /* eslint-disable */

import { Routes, Route } from 'react-router-dom';
//
import { Layout } from '../layout/Layout.jsx';
//
import { HomePage } from '../../pages/home/HomePage.jsx';
import { TestReduxPage } from '../../pages/testRedux/TestReduxPage.jsx';
import { ProfilePage } from '../../pages/profile/ProfilePage.jsx';
import { ChatListPage } from '../../pages/chatList/ChatListPage.jsx';
import { NotFoundPage } from '../../pages/notFoundPage/NotFoundPage.jsx';
//
import { Chat } from '../chat/Chat.jsx';
//
import styles from './App.module.css';

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
                    <Route path="/chats" element={<ChatListPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    */}
                    <Route
                        index
                        element={<HomePage />}
                    />
                    <Route
                        path="testing/redux"
                        element={<TestReduxPage />}
                    />
                    <Route
                        path="profile"
                        element={<ProfilePage />}
                    />
                    <Route
                        path="chats"
                        element={<ChatListPage />}
                    >
                        <Route path="talk/:chatId"  element={<Chat />} />
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
