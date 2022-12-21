import React from 'react';
import GeneralSearch from "../../general-components/GeneralSearch/GeneralSearch";
import FeedbackForm from "../../general-components/FeedbackForm/FeedbackForm";

const MainPage = () => {
    return (
        <div className={`MainPage container`}>
            {/*Поиск*/}
            <GeneralSearch />
            {/*Форма обратной связи*/}
            <FeedbackForm />
        </div>
    );
};

export default MainPage;
