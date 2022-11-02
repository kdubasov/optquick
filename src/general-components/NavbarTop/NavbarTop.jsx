import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link,useNavigate} from "react-router-dom";
import './NavbarTop.css';
import {useUserAuth} from "../../context/AuthContext";
import ConfirmButton from "../GeneralButtons/ConfirmButton";

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

                <NavbarBrand className={`d-flex align-items-center`}>
                    <img style={{marginRight:7}} width={30} src="/images/general/logo.svg" alt="optquick"/>
                    <Link className={'logo'} to={`/`}>OptQuick</Link>
                </NavbarBrand>

                <Navbar aria-controls="responsive-navbar-nav" />
                    <Nav className="me-auto d-flex align-items-center">
                        <Link to={`/categories`}>Каталог</Link>
                        <Link to={`/`}>О нас</Link>
                        <Link to={`/postProduct`}>Разместить объявление</Link>
                    </Nav>
                    <Nav className="d-flex align-items-center">
                        <Link to={`/`}>Избр. товары</Link>
                        { user && <Link to={`/userProfile`}>Профиль</Link> }
                        {
                            user?
                                <ConfirmButton text={'Выйти'} func={handleLogout} />:
                                <Link to={`/login`}>Войти</Link>
                        }
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
