import React from 'react';
import {Offcanvas} from "react-bootstrap";
import "./NTCanvas.css";
import "./NTCanvasMedia.css";
import {Link, useNavigate} from "react-router-dom";
import {useUserAuth} from "../../../../context/AuthContext";

const NTCanvas = ({show,handleClose}) => {

    const { user } = useUserAuth();
    const navigate = useNavigate();

    //go to link and close menu
    const handleNavigate = link => {
        navigate(link);
        handleClose();
    }

    //пуе игеещт цшер дщтл
    const getLink = (text, link) => {
        return (
            <button
                className={"but-light"}
                onClick={() => handleNavigate(link)}
            >
                {text}
            </button>
        )
    }

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
                    <button
                        className={"but-green post-product"}
                        onClick={() => handleNavigate("/postProduct")}
                    >
                        Разместить
                    </button>
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
                    {getLink("Все категории","/categories")}
                    {getLink("Избранные товары","/briefcase")}
                    {getLink("Статьи","/articles")}
                    {getLink("Вопросы и ответы","/answers")}
                    {getLink("О проекте","/aboutProject")}
                    {getLink("Обратная связь","/feedback")}
                </nav>

                <footer>
                    {
                        user ?
                            <button onClick={() => handleNavigate("/userProfile")} className="but-blue">
                                <img src="/images/icons/users-white.svg" alt=""/>
                                Личный кабинет
                            </button>:
                            <button onClick={() => handleNavigate("/login")} className="but-blue">
                                <img src="/images/icons/users-white.svg" alt=""/>
                                Вход и регистрация
                            </button>
                    }

                    <button onClick={() => handleNavigate("/privacyPolicy")} className={"def"}>
                        Политика обработки персональных данных
                    </button>
                    <button onClick={() => handleNavigate("/websiteRules")} className={"def"}>
                        Правила пользования торговой площадкой
                    </button>
                </footer>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default NTCanvas;
