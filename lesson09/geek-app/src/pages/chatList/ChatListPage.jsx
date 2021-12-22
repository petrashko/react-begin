// /* eslint-disable */

import { useState, useMemo } from 'react';
//
import { useSelector, useDispatch } from 'react-redux';
//
import { Navigate, NavLink, useLocation, Outlet } from 'react-router-dom';
//
import { Container, Row, Col, ListGroup, Form, Button, Modal } from 'react-bootstrap';
//
import {v4 as uuidv4} from 'uuid';
//
//import { Chat } from '../../components/chat/Chat.jsx';
//
import { useAuth } from '../../hooks/authHook.js';
import { removeAuthUser } from '../../store/user/actions.js';
//
import { getChatList } from '../../store/chats/selectors.js';
import { addChat, deleteChat } from '../../store/chats/actions.js';
import { /*addChat as addNewChat,*/ deleteChat as deleteMessages } from '../../store/messages/actions.js';

const setActive = ({isActive}) => isActive ? 'chat-active-link' : '';

const ChatListPage = () => {
    //
    const location = useLocation();
    //
    const [showModal, setShowModal] = useState(false);
    //
    const chatList = useSelector(getChatList);
    //
    const {isAuth, email} = useAuth();
    //
    const dispatch = useDispatch();
    
    const handleModalClose = () => {
        setShowModal(showModal => {
            return false;
        });
    }
    
    const handleModalShow = () => {
        setShowModal(showModal => {
            return true;
        });
    }

    const createNewChat = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const chatName = form.chatName.value.trim();
        if (chatName.length === 0) {
            return;
        }

        const newChat = {
            id: uuidv4(),
            name: chatName
        }
        
        dispatch( addChat(newChat) );
        //dispatch( addNewChat(newChat.id) );
        
        handleModalClose();
    }

    const removeChat = (ev, chatId) => {
        dispatch( deleteChat(chatId) );
        dispatch( deleteMessages(chatId) );
    }

    //
    const chats = useMemo(
        () => {
            return chatList.map((chat) => {
                return (
                    <ChatItem
                        chat={chat}
                        onRemoveChat={removeChat}
                        key={chat.id}
                    />
                );
            });
        },
        // eslint-disable-next-line
        [chatList]
    );

    if (!isAuth) {
        return <Navigate to="/login" replace state={{from: location}} />;
    }

    //
    return (
        <>
            <div className="text-center" style={{marginTop: '1rem'}}>
                <button
                    onClick={()=> dispatch( removeAuthUser() )}
                >
                    Log out from {email}
                </button>
            </div>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col className="pe-5" xs={12} sm={5} md={4} >
                        <h2>Select chat</h2>
                        <ListGroup variant="flush">
                            {chats}
                        </ListGroup>
                        <br />
                        <Button variant="primary" onClick={handleModalShow}>
                            Add chat
                        </Button>
                    </Col>
                    <Col className="ps-5" xs={12} sm={7} md={8}>
                        {/*<Chat chatName={initialChats[0].name} />*/}
                        <Outlet chatList={chatList} />
                    </Col>
                </Row>
            </Container>

            <Modal
                show={showModal}
                onHide={handleModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add chat</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(ev) => createNewChat(ev)}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="chatName"
                                placeholder="name of chat"
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModalClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

const ChatItem = ({chat, onRemoveChat}) => {
    //
    return (
        <ListGroup.Item
            className="d-flex justify-content-between align-items-start"
        >
            <NavLink
                to={`talk/${chat.id}`}
                className={setActive}
            >
                {chat.name}
            </NavLink>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={(ev) => onRemoveChat(ev, chat.id)}
            >
                Delete
            </Button>
        </ListGroup.Item>
    );
}

export { ChatListPage };
