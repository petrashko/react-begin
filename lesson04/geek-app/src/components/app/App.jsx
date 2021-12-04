// /* eslint-disable */

import { Layout } from '../layout/Layout.jsx';
//
import { HomePage } from '../../pages/home/HomePage.jsx';
import { ProfilePage } from '../../pages/profile/ProfilePage.jsx';
import { ChatListPage } from '../../pages/chatList/ChatListPage.jsx';
//
import styles from './App.module.css';

const App = () => {
    //
    return (
        <div className={styles.App}>
            <Layout />
            <HomePage />
            <ProfilePage />
            <ChatListPage />
        </div>
    );
}

export default App;
