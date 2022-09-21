import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './NavbarTop.css';

const NavbarTop = () => {
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
                        <Link to={`/`}>Войти</Link>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;