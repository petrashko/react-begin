// /* eslint-disable */

import { useState, useEffect, useMemo } from 'react';

import Message from '../message/Message';
//
import styles from './App.module.css';

const initialState = [
    /*
    {
        text: 'Text 1',
        author: 'user'
    },
    {
        text: 'Hello User! I am bot',
        author: 'bot'
    }
    */
];

const App = () => {
    //
    const [messageList, setMessageList] = useState(initialState);
    const [inputText, setInputText] = useState('');

    const messages = useMemo(
        () => {
            return messageList.map((msg, index) => {
                return (
                    <p
                        key={msg.text + index}
                        className={styles.MsgParagraf}
                    >
                        {msg.author}: {msg.text}
                    </p>
                );
            });
        },
        // eslint-disable-next-line
        [messageList]
    );

    useEffect(
        () => {
            if (messageList.length === 0) {
                return;
            }

            let timerId = null;

            if (messageList[messageList.length-1].author === 'user') {
                timerId = setTimeout(() => {
                    setMessageList(messageList => {
                        return [
                            ...messageList,
                            {
                                text: 'Hello User! I am bot',
                                author: 'bot'
                            }
                        ];
                    });
                }, 1500);
            }

            return () => {
                clearTimeout(timerId);
            }
        },
        // eslint-disable-next-line
        [messageList]
    );

    const addMessage = (ev) => {
        ev.preventDefault();

        const text = inputText.trim();
        if (text.length === 0) {
            return;
        }

        setMessageList(messageList => {
            return [
                ...messageList,
                {
                    text,
                    author: 'user'
                }
            ];
        });

        setInputText(inputText => '');
    }

    //
    return (
        <div className={styles.App}>
            <Message
                msg="Learning React"
            />
            <div>
                <form onSubmit={(ev) => addMessage(ev)}>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(ev) => setInputText(ev.target.value)}
                    />
                    <button
                        type="submit"
                        style={{marginLeft: '5px'}}
                    >
                        Отправить
                    </button>
                </form>
            </div>
            <div>
                {messages}
            </div>
        </div>
    );
}

export default App;
