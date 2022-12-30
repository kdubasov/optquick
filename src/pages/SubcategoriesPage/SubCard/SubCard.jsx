import React from 'react';
import {Link} from "react-router-dom";

const SubCard = ({sub}) => {
    return (
        <Link
            to={`/categories/${sub.category}/${sub.id}`}
            className={'CategSubCard SubCard'}
            style={{backgroundImage:`url(${sub.image})`}}
        >
            <div className="dark" />
            <h4>{sub.title}</h4>
        </Link>
    );
};

export default SubCard;
