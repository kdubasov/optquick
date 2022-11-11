import React from 'react';
import {Badge} from "react-bootstrap";
import GeneralSearch from "../../general-components/GeneralSearch/GeneralSearch";

const MainPage = () => {
    return (
        <div className={`MainPage container`}>
            <h5 className={`my-2`}><Badge>Главная страница</Badge></h5>
            <GeneralSearch />
        </div>
    );
};

export default MainPage;