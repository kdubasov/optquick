import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AnswerPageData} from "./AnswerPageData";

//css
import "./AnswersPage.css";
import "./AnswersPageMedia.css";

const AnswersPage = () => {

    //data for blocks from file
    const [data,setData] = useState(AnswerPageData);

    //set show inner block
    const handleShow = (id,innerId) => {
        const copy = Object.assign([],data);
        const obj = copy.find(elem => elem.id === id).data.find(elem => elem.id === innerId);
        obj.show = !obj.show;
        setData(copy);
    }

    return (
        <Container className={"AnswersPage"}>
            <h3 className={"title"}>Вопросы и ответы</h3>
            <p className="small warning">
                На данной странице представлен список самых популярных вопросов.
                Мы делаем выводы из ваших сообщений, присланных через
                <Link to={"/feedback"}>Форму обратной связи</Link>,
                и вопросы, которые встречаются часто мы также добавляем в данный список.
            </p>

            {
                data.map(elem => (
                    <div className="inner-container" key={elem.id}>
                        <h5>{elem.title}</h5>

                        {
                            elem.data.map(elemInner => (
                                <div className="inner" key={elemInner.id}>
                                    <header
                                        onClick={() => handleShow(elem.id,elemInner.id)}
                                        className={elemInner.show ? "active" : ""}
                                    >
                                        <h6 className={"m-0"}>{elemInner.question}</h6>
                                        {
                                            elemInner.show?
                                                <img src="/images/icons/arrow-top-blue.svg" alt="arrow"/>:
                                                <img src="/images/icons/arrow-bot-dark.svg" alt="arrow"/>
                                        }
                                    </header>
                                    {elemInner.show && <p className="small">{elemInner.answer}</p>}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </Container>
    );
};

export default AnswersPage;
