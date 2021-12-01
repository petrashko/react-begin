// /* eslint-disable */

import { useState, useEffect, useMemo, useRef } from 'react';
//
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
//
import {v4 as uuidv4} from 'uuid';
//
import Message from '../message/Message';
//
import styles from './App.module.css';

const initialMessages = [];
const initialChats = [
    {id: uuidv4(), name: 'Chat 1'},
    {id: uuidv4(), name: 'Chat 2'},
    {id: uuidv4(), name: 'Chat 3'},
    {id: uuidv4(), name: 'Chat 4'}
];

const App = () => {
    //
    const [messageList, setMessageList] = useState(initialMessages);
    // eslint-disable-next-line
    const [chatList, setChatList] = useState(initialChats);
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
        <div className={styles.App}>
            <Message
                msg="Learning React"
            />
            <Container className="mt-5 mb-5">
                <Row>
                    <Col className="pe-5" xs={12} sm={5} md={4} >
                        <ListGroup variant="flush">
                            {
                                chatList.map((chat) => (
                                    <ListGroup.Item key={chat.id}>
                                        {/*{chat.id}:*/} {chat.name}
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col className="ps-5" xs={12} sm={7} md={8}>
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
