// /* eslint-disable */

import { useState, useEffect, useMemo, useRef } from 'react';
//
import {useSelector, useDispatch} from 'react-redux';
//
import { useParams } from 'react-router-dom';
//
import { Form, Button } from 'react-bootstrap';
//
import { getChatList } from '../../store/chats/selectors.js';
import { getMessageListFromChats } from '../../store/messages/selectors.js';
import { addMessage } from '../../store/messages/actions.js';
//
import styles from './Chat.module.css';

const Chat = () => {
    //
    const chatList = useSelector(getChatList);
    const messageListFromChats = useSelector(getMessageListFromChats);
    //
    const dispatch = useDispatch();
    //
    const {chatId} = useParams();
    //
    const [inputText, setInputText] = useState('');
    const inputRef = useRef();
    //
    const messageListRef = useRef([]);

    //
    const chat = chatList.find(item => item.id === chatId);

    const messages = useMemo(
        () => {
            if (chat) {
                messageListRef.current = messageListFromChats[chat.id];
            }

            if (messageListRef.current.length !== 0) {
                return messageListRef.current.map((msg, index) => {
                    return (
                        <p
                            key={msg.text + index}
                            className={styles.MsgParagraf}
                        >
                            {msg.author}: {msg.text}
                        </p>
                    );
                });
            }
            else {
                return null;
            }
        },
        // eslint-disable-next-line
        [chatId, messageListFromChats]
    );

    useEffect(
        () => {
            inputRef.current?.focus();

            const messageList = messageListRef.current;
            if (messageList.length === 0) {
                return;
            }

            let timerId = null;

            if (messageList[messageList.length-1].author === 'user') {
                timerId = setTimeout(() => {
                    const newMessage = {
                        chatId,
                        text: 'Hello User! I am bot',
                        author: 'bot'
                    };
                    dispatch( addMessage(newMessage) );
                }, 1500);
            }

            return () => {
                clearTimeout(timerId);
            }
        },
        // eslint-disable-next-line
        [messages]
    );

    const addMessageToChat = (ev) => {
        ev.preventDefault();

        const text = inputText.trim();
        if (text.length === 0) {
            return;
        }

        const newMessage = {
            chatId,
            text,
            author: 'user'
        }
        dispatch( addMessage(newMessage) );

        setInputText(inputText => '');
    }

    if (!chat) {
        return (
            <h3
                style={{textAlign: 'center', color: 'lightpink', marginBottom: '1.25rem'}}
            >
                Chat Not Found
            </h3>
        );
    }

    //
    return (
        <>
            <h3
                style={{textAlign: 'center', color: 'lightpink', marginBottom: '1.25rem'}}
            >
                {chat.name}
            </h3>
            <Form onSubmit={(ev) => addMessageToChat(ev)}>
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
