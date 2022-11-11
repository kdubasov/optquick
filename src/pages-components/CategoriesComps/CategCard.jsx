import React from 'react';
import {Link} from "react-router-dom";
import {ListGroupItem} from "react-bootstrap";

const CategoriesCard = ({categ}) => {
    return (
        <ListGroupItem className={'d-flex align-items-center my-2'} key={categ.id}>
            <img style={{borderRadius:5}} height={120} src={categ.image} alt=""/>
            <Link to={`/categories/${categ.id}`} className={'m-0 mx-2'}>{categ.title}</Link>
        </ListGroupItem>
    );
};

export default CategoriesCard;
