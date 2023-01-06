import React from 'react';
import GeneralSearch from "../../general-components/GeneralSearch/GeneralSearch";
import FeedbackForm from "../../general-components/FeedbackForm/FeedbackForm";
import TopCategories from "../../static-components/TopCategories/TopCategories";
import "./MainPage.css";
import TopProducts from "../../static-components/TopProducts/TopProducts";
import TopSubcateg from "../../static-components/TopSubcateg/TopSubcateg";
import LastProducts from "../../static-components/LastProducts/LastProducts";

const MainPage = () => {
    return (
        <div className={`MainPage container`}>
            {/*Поиск*/}
            <GeneralSearch />

            {/*top subcategories***/}
            <TopSubcateg />

            {/*лучши е продукты**/}
            <TopProducts />

            <div className="form-and-categs">
                {/*Форма обратной связи*/}
                <FeedbackForm />
                {/*Популярные категории*/}
                <TopCategories />
            </div>

            {/*последние продукты*/}
            <LastProducts />
        </div>
    );
};

export default MainPage;
