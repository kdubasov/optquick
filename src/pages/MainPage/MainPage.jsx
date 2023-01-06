import React from 'react';
import GeneralSearch from "../../general-components/GeneralSearch/GeneralSearch";
import "./MainPage.css";
import TopProducts from "../../static-components/TopProducts/TopProducts";
import TopSubcateg from "../../static-components/TopSubcateg/TopSubcateg";
import LastProducts from "../../static-components/LastProducts/LastProducts";
import NewProducts from "../../static-components/NewProducts/NewProducts";
import CryptoAdv from "../../static-components/CryptoAdv/CryptoAdv";
import ThreeInfoBlock from "../../static-components/ThreeInfoBlock/ThreeInfoBlock";

const MainPage = () => {
    return (
        <div className={`MainPage container`}>
            {/*Поиск*/}
            <GeneralSearch />

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
