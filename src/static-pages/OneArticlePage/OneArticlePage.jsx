import React from 'react';
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import {Container} from "react-bootstrap";
import SliderNews from "../../general-components/SliderNews/SliderNews";
import OneArticleSEO from "../../seo/OneArticleSEO";

const OneArticlePage = () => {

    const path = (window.location.pathname).split('/');
    const articleID = path[path.length - 1];
    const data = useGetUser(`/articles/${articleID}`);
    // console.log(data);

    return (
        <Container className={"OneArticlePage py-4"}>

            {//SEO
                Boolean(Object.values(data).length) &&
                <OneArticleSEO data={data} />
            }

            <div className="content">
                <img src={data.cardPhoto} alt={data.title}/>
                <h3 className={"title"}>
                    Статья "{data.title}"
                </h3>
                <p>{data.openingText}</p>
                <p>Дата публикации: {data.date}</p>
                <p>Описание: {data.innerText}</p>
            </div>

            <hr/>

            <h4 className={"title"}>Другие статьи</h4>
            <SliderNews />
        </Container>
    );
};

export default OneArticlePage;
