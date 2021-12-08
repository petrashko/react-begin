// /* eslint-disable */

import { useMemo } from 'react';
//
import { NavLink, Outlet } from 'react-router-dom';
//
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
//
//import { Chat } from '../../components/chat/Chat.jsx';

const setActive = ({isActive}) => isActive ? 'chat-active-link' : '';

const ChatListPage = ({chatList}) => {
    //
    const chats = useMemo(
        () => {
            return chatList.map((chat) => {
                return (
                    <ListGroup.Item key={chat.id}>
                        <NavLink
                            to={`talk/${chat.id}`}
                            className={setActive}
                        >
                            {chat.name}
                        </NavLink>
                    </ListGroup.Item>
                );
            });
        },
        // eslint-disable-next-line
        [chatList]
    );

    //
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col className="pe-5" xs={12} sm={5} md={4} >
                    <h2>Select chat</h2>
                    <ListGroup variant="flush">
                        {chats}
                    </ListGroup>
                </Col>
                <Col className="ps-5" xs={12} sm={7} md={8}>
                    {/*<Chat chatName={initialChats[0].name} />*/}
                    <Outlet chatList={chatList} />
                </Col>
            </Row>
        </Container>
    );
}

export { ChatListPage };
