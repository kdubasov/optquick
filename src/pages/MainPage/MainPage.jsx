import React from 'react';
import GeneralSearch from "../../general-components/GeneralSearch/GeneralSearch";
import "./MainPage.css";
import TopProducts from "../../static-components/TopProducts/TopProducts";
import TopSubcateg from "../../static-components/TopSubcateg/TopSubcateg";
import LastProducts from "../../static-components/LastProducts/LastProducts";
import NewProducts from "../../static-components/NewProducts/NewProducts";
import CryptoAdv from "../../static-components/CryptoAdv/CryptoAdv";
import ThreeInfoBlock from "../../static-components/ThreeInfoBlock/ThreeInfoBlock";
import SliderNews from "../../general-components/SliderNews/SliderNews";
import MainPageSEO from "../../seo/MainPageSEO";

const MainPage = () => {
    return (
        <div className={`MainPage container`}>

            {/*SEO HELMET*/}
            <MainPageSEO />

            {/*Поиск*/}
            <GeneralSearch />

            <SliderNews />

            {/*top subcategories***/}
            <TopSubcateg />

            {/*лучши е продукты**/}
            <TopProducts />

            <ThreeInfoBlock />

            {/*последние продукты*/}
            <LastProducts />

            <CryptoAdv />

            {/*новые товары*/}
            <NewProducts />
        </div>
    );
};

export default MainPage;
