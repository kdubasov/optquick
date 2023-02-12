import React from 'react';
import {Link} from "react-router-dom";

//css
import "./CategSubCard.css";
import "./CategSubCardMedia.css";

const CategSubCard = ({categ}) => {
    return (
        <Link
            to={`/categories/${categ.id}`}
            className={'CategSubCard'}
            style={{backgroundImage:`url(${categ.image})`}}
        >
            <div className="dark" />
            <h4>{categ.title}</h4>
        </Link>
    );
};

export default CategSubCard;
