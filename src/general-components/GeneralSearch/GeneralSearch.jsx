import React, {useState} from 'react';
import {FormControl} from "react-bootstrap";
import {useGetQueryRes} from "../../pages-functions/GeneralSearch/useGetQueryRes";
import GeneralSearchRes from "./GeneralSearchRes/GeneralSearchRes";
import NavbarCategories from "../NavbarCategories/NavbarCategories";
import "./GeneralSearch.css";

const GeneralSearch = () => {

    //запрос пользователя
    const [query,setQuery] = useState('');
    //показывать ли результаты поиска
    const [focus,setFocus] = useState(false);

    //data for queris from database
    const data = useGetQueryRes(query);
    // console.log(useGetQueryRes(query))

    return (
        <div className={"GeneralSearch"}>

            {/*Все категории*/}
            <NavbarCategories />

            {/*input search*/}
            <div className="input-container">
                <FormControl
                    size={"sm"}
                    placeholder={"Поиск по категориям, подкатегориям и товарам."}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onFocus={() => setFocus(true)}
                />

                {focus && <GeneralSearchRes result={data} setFocus={setFocus} />}
            </div>
        </div>
    );
};

export default GeneralSearch;
