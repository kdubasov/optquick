import React from 'react';
import {useGetCategory} from "../../../../../pages-functions/AdminPage/Categories/useGetCategory";
import ListNewsItem from "./ListNewsItem";
import {Alert} from "react-bootstrap";
import "./ListNews.css";

const ListNews = () => {

    const data = useGetCategory("/articles");
    // console.log(data,"ListNews");

    return (
        <div className={"ListNews m-2 p-2 border"}>
            <h5>Список статей</h5>

            {
                data.length ?
                    data.map(news => (
                        <ListNewsItem key={news.id} data={news} />
                    )):
                    <Alert className={"small p-2"}>
                        Список статей пуст
                    </Alert>
            }
        </div>
    );
};

export default ListNews;
