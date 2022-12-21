import React from 'react';
import "./FooterBottom.css";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

const FooterBottom = () => {
    return (
        <div className={"FooterBottom"}>
            <Container>
                <div className="inner left">
                    <img src="/images/general/logo.svg" alt=""/>
                    <h4>2004-{new Date().getFullYear()} © OPTQUICK</h4>
                    <Link to="/">Политика конфиденциальности</Link>
                    <Link to="/">Политика обработки персональных данных</Link>
                </div>
            </Container>
        </div>
    );
};

export default FooterBottom;
