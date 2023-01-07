import React from 'react';
import AddNews from "./components/AddNews";
import ListNews from "./components/ListNews/ListNews";

const NewsAdmin = () => {
    return (
        <div className={"NewsAdmin my-3 p-2 border"}>
            <h3 className={"title"}>Статьи</h3>
            <AddNews />
            <ListNews />
        </div>
    );
};

export default NewsAdmin;
