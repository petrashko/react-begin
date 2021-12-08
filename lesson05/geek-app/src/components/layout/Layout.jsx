import { NavLink, Outlet } from 'react-router-dom';
//
import { Nav } from 'react-bootstrap';
//
//import styles from './Layout.module.css';

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {
    //
    return (
        <>
            <header>
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <NavLink
                            to='/'
                            className={setActive}
                        >
                            Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to='/profile'
                            className={setActive}
                        >
                            Profile
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to='/chats'
                            className={setActive}
                        >
                            Chats
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </header>

            <Outlet />
        </>
    );
}

export { Layout };
