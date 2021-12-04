// /* eslint-disable */

import { useState, useEffect, useMemo, useRef } from 'react';
//
import { Form, Button } from 'react-bootstrap';
//
import styles from './Chat.module.css';

const initialMessages = [];

const Chat = (props) => {
    //
    const {chatName} = props;

    //
    const [messageList, setMessageList] = useState(initialMessages);

    const [inputText, setInputText] = useState('');
    const inputRef = useRef();

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
            inputRef.current?.focus();
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
        <>
            <h3
                style={{textAlign: 'center', marginBottom: '1.25rem'}}
            >
                {chatName}
            </h3>
            <Form onSubmit={(ev) => addMessage(ev)}>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter message"
                        ref={inputRef}
                        value={inputText}
                        onChange={(ev) => setInputText(ev.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div>
                {messages}
            </div>
        </>
    );
}

export { Chat };
