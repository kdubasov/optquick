import React, {useState} from 'react';
import {FormControl} from "react-bootstrap";
import {useGetQueryRes} from "../../pages-functions/GeneralSearch/useGetQueryRes";
import GeneralSearchRes from "./GeneralSearchRes";

const GeneralSearch = () => {

    //запрос пользователя
    const [query,setQuery] = useState('');
    //показывать ли результаты поиска
    const [focus,setFocus] = useState(false);

    //data for queris from database
    const data = useGetQueryRes(query);
    // console.log(useGetQueryRes(query))

    return (
        <>
            <FormControl
                size={"sm"}
                placeholder={"Введите ваш запрос, результаты поиска отображаются ниже."}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setFocus(true)}
            />

            {focus && <GeneralSearchRes result={data} setFocus={setFocus} />}
        </>
    );
};

export default GeneralSearch;
