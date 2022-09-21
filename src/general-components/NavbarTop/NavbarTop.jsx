import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link,useNavigate} from "react-router-dom";
import './NavbarTop.css';
import {useUserAuth} from "../../context/AuthContext";

const NavbarTop = () => {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Navbar className={'NavbarTop'} expand="lg" bg="dark">
            <Container>
                <Link className={'logo'} to={`/`}>OptQuick</Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="me-auto">
                        <Link to={`/`}>Каталог</Link>
                        <Link to={`/`}>О нас</Link>
                    </Nav>
                    <Nav>
                        <Link to={`/`}>Избр. товары</Link>
                        <Link to={`/`}>Диалоги</Link>
                        { user && <Link to={`/userProfile`}>Профиль</Link> }
                        {
                            user?
                                <Button onClick={handleLogout}>Выйти</Button>:
                                <Link to={`/login`}>Войти</Link>
                        }

                    </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;