// /* eslint-disable */

import { useState, useEffect, useMemo, useRef } from 'react';
//
import {useSelector, useDispatch} from "react-redux";
//
import { useParams } from 'react-router-dom';
//
import { Form, Button } from 'react-bootstrap';
//
import { addMessage, clearChat } from "../../store/chats/actions.js";
//
import styles from './Chat.module.css';

const Chat = () => {
    //
    const chatList = useSelector(state => state.chats.chatList);
    const messageList = useSelector(state => state.chats.messageList);
    //
    const dispatch = useDispatch();
    //
    const {chatId} = useParams();

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
            dispatch( clearChat() );
        },
        // eslint-disable-next-line
        [chatId]
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
                    const newMessage = {
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
        [messageList]
    );

    const addMessageToChat = (ev) => {
        ev.preventDefault();

        const text = inputText.trim();
        if (text.length === 0) {
            return;
        }

        const newMessage = {
            text,
            author: 'user'
        }
        dispatch( addMessage(newMessage) );

        setInputText(inputText => '');
    }

    const chat = chatList.find(item => item.id === chatId);
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
