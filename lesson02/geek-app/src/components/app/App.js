// /* eslint-disable */

import Message from '../message/Message';
//
import styles from './App.module.css';

// eslint-disable-next-line
const App = () => {
    //
    return (
        <div className={styles.App}>
            <Message
                    msg="Learning React"
                />
            </div>
    );
}

export default App;
