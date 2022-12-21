import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link} from "react-router-dom";
import './NavbarTop.css';
import {useUserAuth} from "../../context/AuthContext";

const NavbarTop = () => {

    const { user } = useUserAuth();

    return (
        <Navbar className={'NavbarTop'}>
            <Container>

                <NavbarBrand className={`d-flex align-items-center`}>
                    <Link className={'logo'} to={`/`}>
                        <img style={{marginRight:5}} width={30} src="/images/general/logo.svg" alt="optquick"/>
                        optquick
                    </Link>
                </NavbarBrand>

                <Navbar aria-controls="responsive-navbar-nav" />
                    <Nav className="d-flex align-items-center">

                        <Link className="images" to={`/briefcase`}>
                            <img className={"like"} src="/images/icons/icon-love.svg" alt="like"/>
                            Избранное
                        </Link>

                        <Link to={`/categories`}>Каталог</Link>

                        { !user && <Link to={`/login`}>Вход и регистрация</Link> }
                        { user && <Link to={`/userProfile`}>Мой профиль</Link> }

                        <Link className={"but-green"} to={`/postProduct`}>
                            Разместить товар
                        </Link>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
