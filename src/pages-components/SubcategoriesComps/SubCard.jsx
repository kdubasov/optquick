import React from 'react';
import {Link} from "react-router-dom";
import {ListGroupItem} from "react-bootstrap";

const SubCard = ({sub}) => {
    return (
        <ListGroupItem className={'d-flex align-items-center my-2'} key={sub.id}>
            <img style={{borderRadius:5}} height={120} src={sub.image} alt=""/>
            <Link to={`/categories/${sub.category}/${sub.id}`} className={'m-0 mx-2'}>{sub.title}</Link>
        </ListGroupItem>
    );
};

export default SubCard;
