import React from 'react';
import {Container} from "react-bootstrap";
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import Loader from "../../general-components/Loader/Loader";
import {Link} from "react-router-dom";

//css
import "./ArticlesPage.css";
import "./ArticlesPageMedia.css";

const ArticlesPage = () => {

    const data = useGetCategory("/articles");
    // console.log(data,"ArticlesPage");

    //styles for card
    const getStyles = (bgColor) => {
        return {
            backgroundColor: bgColor,
        }
    }

    if (data.length){
        return (
            <Container className={"ArticlesPage"}>
                <h3 className="title">Статьи</h3>
                <p className="small warning">
                    На данной странице показан список всех статей.
                    Статьи нужны для общего ознакомления пользователей
                    с информацией о торговой площадке, товарах и трендах
                    в оптовой продаже. Для более подробного изучения
                    статьи вы можете перейти на внутреннею страницу.
                </p>

                <div className="cards-container">
                    {
                        data
                            .sort((a,b) => b.dateNoRedact - a.dateNoRedact)
                            .map(news => (
                            <div
                                key={news.id}
                                style={getStyles(news.cardBG,news.cardPhoto)}
                                className={"NewsCard"}
                            >
                                <img src={news.cardPhoto} alt={news.title} className="static-img"/>

                                {/*link to news page*/}
                                <Link to={`/articles/${news.id}`} />

                                <div className="content">
                                    <h5>{news.title}</h5>
                                    <p className="small warning">{news.date}</p>
                                    <p className={"m-0"}>{news.openingText}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        );
    }else {
        return (
            <Container className={"ArticlesPage"}>
                <h3 className="title">Статьи</h3>
                <Loader />
            </Container>
        );
    }
};

export default ArticlesPage;
