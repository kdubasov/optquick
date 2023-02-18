import React, {useState} from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link} from "react-router-dom";
import './NavbarTop.css';
import './NavbarTopMedia.css';
import {useUserAuth} from "../../context/AuthContext";
import {useGetBriefcaseData} from "../../pages-functions/Briefcase/useGetBriefcaseData";
import NTCanvas from "./components/NTCanvas/NTCanvas";
import {useMediaQuery} from "react-responsive";

const NavbarTop = () => {

    const { user } = useUserAuth();

    // get data from briefcase for icon to briefcase
    const linkDB = `/users/${user?.uid}/briefcase`;
    const briefcaseData = useGetBriefcaseData(linkDB);
    // console.log(briefcaseData);

    //media query
    const media340px = useMediaQuery({query: '(max-width: 340px)'});

    // offcanvas show
    const [showOffCanvas, setShowOffCanvas] = useState(false);

    return (
        <>
            <Navbar className={'NavbarTop'}>
                <Container>

                    <NavbarBrand className={`d-flex align-items-center`}>
                        <Link className={'logo d-flex align-items-center'} to={`/`}>
                            <img src="/images/general/logo.svg" alt="optquick"/>
                            <h5 className={"m-0 fw-bold"}>optquick</h5>
                        </Link>
                    </NavbarBrand>

                    <Navbar aria-controls="responsive-navbar-nav" />
                    <Nav className="links-right d-flex align-items-center">

                        <Link className="images" to={`/briefcase`}>
                            {
                                briefcaseData.length ?
                                    <img className={"like active"} src="/images/icons/icon-love-active.svg" alt="like"/>:
                                    <img className={"like"} src="/images/icons/icon-love.svg" alt="like"/>
                            }
                            Избранное
                        </Link>

                        <Link to={`/categories`}>Каталог</Link>

                        { !user && <Link to={`/login`}>Вход и регистрация</Link> }
                        { user && <Link to={`/userProfile`}>Мой профиль</Link> }

                        <Link className={"but-green post-product"} to={`/postProduct`}>
                            Разместить товар
                        </Link>
                    </Nav>

                    {/*mobile elements*/}
                    <div className="mobile-right">
                        <Link className={"but-green post-product"} to={`/postProduct`}>
                            Разместить {media340px ? "" : "товар"}
                        </Link>
                        <img
                            src="/images/icons/open-nav.svg"
                            alt="open"
                            onClick={() => setShowOffCanvas(true)}
                            className={"offcanvas-open"}
                        />
                    </div>
                </Container>
            </Navbar>

            {/*canvas navbar*/}
            <NTCanvas
                show={showOffCanvas}
                handleClose={() => setShowOffCanvas(false)}
            />
        </>
    );
};

export default NavbarTop;
