import React from 'react';
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import {Container} from "react-bootstrap";
import SliderNews from "../../general-components/SliderNews/SliderNews";
import OneArticleSEO from "../../seo/OneArticleSEO";
import {Link} from "react-router-dom";
import Loader from "../../general-components/Loader/Loader";
import "./OneArticlePage.css";

const OneArticlePage = () => {

    const path = (window.location.pathname).split('/');
    const articleID = path[path.length - 1];
    const data = useGetUser(`/articles/${articleID}`);
    // console.log(data);

    if (Boolean(Object.values(data).length)){
        return (
            <Container className={"OneArticlePage"}>

                {/*SEO*/}
                <OneArticleSEO data={data} />

                {/*ссылка на страницу всех статей*/}
                <Link className={"back"} to={"/articles"}>Перейти ко всем статьям</Link>

                {/*инфа про статью*/}
                <div className="article-content">
                    <h2 className={"title"}>Статья "{data.title}"</h2>
                    <h6 className={"text"}>
                        {data.innerText}
                    </h6>
                    <p className={"date"}>
                        Дата публикации: {data.date}
                    </p>
                </div>

                <h4 className={"title"}>Другие статьи</h4>
                <SliderNews />
            </Container>
        );
    }else {
        return (
            <Container className={"OneArticlePage py-4"}>
                <Loader />
            </Container>
        );
    }
};

export default OneArticlePage;
