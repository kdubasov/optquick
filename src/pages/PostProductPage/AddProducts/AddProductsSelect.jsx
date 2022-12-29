import React from 'react';
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";
import {Form} from "react-bootstrap";

const AddProductsSelect = ({url,text,state,setState}) => {
    return (
        <Form.Select
            value={state}
            onChange={e => setState(e.target.value)}
            required
            size={"sm"}
        >
            <option hidden>Выберите родительскую {text}.</option>
            {useGetCategory(url).map(elem =>(
                <option key={elem.id} value={elem.id}>
                    {elem.title}
                </option>
            ))}
        </Form.Select>
    );
};

export default AddProductsSelect;
