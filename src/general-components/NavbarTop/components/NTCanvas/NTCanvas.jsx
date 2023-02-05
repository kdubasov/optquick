import React from 'react';
import {Offcanvas} from "react-bootstrap";
import "./NTCanvas.css";
import "./NTCanvasMedia.css";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../../../context/AuthContext";

const NTCanvas = ({show,handleClose}) => {

    const { user } = useUserAuth();

    return (
        <Offcanvas
            show={show}
            onHide={handleClose}
            placement={"end"}
            className={"NavbarTop NTCanvas"}
        >
            <Offcanvas.Header>
                <Link className={'logo d-flex align-items-center'} to={`/`}>
                    <img src="/images/general/logo.svg" alt="optquick"/>
                    <h5 className={"m-0 fw-bold"}>optquick</h5>
                </Link>

                <div>
                    <Link className={"but-green post-product"} to={`/postProduct`}>
                        Разместить
                    </Link>
                    <img
                        src="/images/icons/close-nav.svg"
                        alt="close"
                        onClick={handleClose}
                        className={"offcanvas-open"}
                    />
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <nav>
                    <Link to={"/categories"} className={"but-light"}>
                        Все категории
                    </Link>
                    <Link to={"/briefcase"} className={"but-light"}>
                        Избранные товары
                    </Link>
                    <Link to={"/articles"} className={"but-light"}>
                        Статьи
                    </Link>
                    <Link to={"/answers"} className={"but-light"}>
                        Вопросы и ответы
                    </Link>
                    <Link to={"/aboutProject"} className={"but-light"}>
                        О проекте
                    </Link>
                    <Link to={"/feedback"} className={"but-light"}>
                        Обратная связь
                    </Link>
                </nav>

                <footer>
                    {
                        user ?
                            <Link to={"/userProfile"} className="but-blue">
                                <img src="/images/icons/users-white.svg" alt=""/>
                                Личный кабинет
                            </Link>:
                            <Link to={"/login"} className="but-blue">
                                <img src="/images/icons/users-white.svg" alt=""/>
                                Вход и регистрация
                            </Link>
                    }

                    <Link to={"/privacyPolicy"}>
                        Политика обработки персональных данных
                    </Link>
                    <Link to={"/websiteRules"}>
                        Правила пользования торговой площадкой
                    </Link>
                </footer>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default NTCanvas;
