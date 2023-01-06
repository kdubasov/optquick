import React from 'react';
import "./FooterBottom.css";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {footerBottomData} from "./footerBottomData";

const FooterBottom = () => {
    return (
        <div className={"FooterBottom"}>
            <Container>
                <div className="inner left">
                    <img src="/images/general/logo.svg" alt=""/>
                    <h6 className={"w-100"}>2022-{new Date().getFullYear()} © OPTQUICK</h6>
                    <Link to="/privacyPolicy">Политика конфиденциальности</Link><br />
                    <Link to="/">Политика обработки персональных данных</Link>
                </div>

                {
                    footerBottomData.map(elem => (
                        <div className={"inner"} key={elem.id}>
                            <h6>{elem.text}</h6>
                            <ul>
                                {elem.links.map(link => (
                                    <li key={link.id}><Link to={link.link}>{link.text}</Link></li>
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
