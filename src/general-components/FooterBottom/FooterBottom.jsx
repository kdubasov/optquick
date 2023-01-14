import React from 'react';
import "./FooterBottom.css";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {footerBottomData} from "./footerBottomData";

const FooterBottom = () => {

    const path = window.location.pathname;

    return (
        <div className={"FooterBottom"}>
            <Container>
                <div className="inner left">
                    <img src="/images/general/logo.svg" alt=""/>
                    <h6 className={"w-100"}>2022-{new Date().getFullYear()} © OPTQUICK</h6>
                    <Link to="/privacyPolicy">Политика обработки персональных данных</Link>
                    <Link to={"/websiteRules"}>Правила пользования площадкой</Link>
                </div>

                {
                    footerBottomData.map(elem => (
                        <div className={"inner"} key={elem.id}>
                            <h6>{elem.text}</h6>
                            <ul>
                                {elem.links.map(link => (
                                    link.target ?
                                        <li key={link.id}>
                                            <a href={link.link} target={"_blank"} rel={"noreferrer"}>
                                                {link.text}
                                            </a>
                                        </li>:
                                        <li key={link.id} className={path === link.link ? "active" : ""}>
                                            <Link to={link.link}>{link.text}</Link>
                                        </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </Container>
        </div>
    );
};

export default FooterBottom;
