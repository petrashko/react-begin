// /* eslint-disable */

import { useState } from 'react';
//
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
//
import {v4 as uuidv4} from 'uuid';
//
import { Chat } from '../../components/chat/Chat.jsx';

const initialChats = [
    {id: uuidv4(), name: 'Chat 1'},
    {id: uuidv4(), name: 'Chat 2'},
    {id: uuidv4(), name: 'Chat 3'},
    {id: uuidv4(), name: 'Chat 4'}
];

const ChatListPage = () => {
    // eslint-disable-next-line
    const [chatList, setChatList] = useState(initialChats);
    //
    return (
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
                    <Chat chatName={initialChats[0].name} />
                </Col>
            </Row>
        </Container>
    );
}

export { ChatListPage };
