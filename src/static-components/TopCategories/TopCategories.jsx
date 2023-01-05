import React from 'react';
import "./TopCategories.css";
import {Link} from "react-router-dom";

const TopCategories = () => {
    return (
        <div className={"TopCategories"}>
            <h4 className={"title"}>Популярные категории</h4>

            <div className="inner electronic">
                <Link to={"/categories/electronic"} className="shadow" />
                <h4>Электроника</h4>
            </div>
            <div className="inner clothes">
                <Link to={"/categories/clothes"} className="shadow" />
                <h4>Одежда</h4>
            </div>
            <div className="inner stationery">
                <Link to={"/categories/stationery"} className="shadow" />
                <h4>Канцтовары</h4>
            </div>
        </div>
    );
};

export default TopCategories;
