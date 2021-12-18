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
import { addMessageWithBot } from '../../store/messages/actions.js';
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
            if (chat && messageListFromChats[chat.id]) {
                messageListRef.current = messageListFromChats[chat.id];
            }
            else {
                messageListRef.current = [];
            }

            if (messageListRef.current.length !== 0) {
                return messageListRef.current.map((msg, index) => (
                    <MessageItem msg={msg} key={msg.text + index} />
                ));
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
        dispatch( addMessageWithBot(newMessage) );

        setInputText(inputText => '');
    }

    if (!chat) {
        return <Header text="Chat Not Found" />;
    }

    //
    return (
        <>
            <Header text={chat.name} />

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

const MessageItem = ({msg}) => {
    //
    return (
        <p className={styles.MsgParagraf}>
            {msg.author}: {msg.text}
        </p>
    );
}

const Header = ({text}) => {
    //
    return (
        <h3
            style={{textAlign: 'center', color: 'lightpink', marginBottom: '1.25rem'}}
        >
            {text}
        </h3>
    );
}

export { Chat };
