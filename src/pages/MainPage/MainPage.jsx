import React from 'react';
import {Badge} from "react-bootstrap";
import GeneralSearch from "../../general-components/GeneralSearch/GeneralSearch";
import NavbarCategories from "../../general-components/NavbarCategories/NavbarCategories";
import FeedbackForm from "../../general-components/FeedbackForm/FeedbackForm";

const MainPage = () => {
    return (
        <div className={`MainPage container`}>
            <h5 className={`my-2`}><Badge>Главная страница</Badge></h5>
            {/*Поиск*/}
            <GeneralSearch />
            {/*Все категории*/}
            <NavbarCategories />
            {/*Форма обратной связи*/}
            <FeedbackForm />
        </div>
    );
};

export default MainPage;
