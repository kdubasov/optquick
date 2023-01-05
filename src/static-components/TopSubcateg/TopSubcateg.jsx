import React from 'react';
import {Link} from "react-router-dom";
import "./TopSubcateg.css";

const TopSubcateg = () => {

    const data = [
        {
            id: 1,
            img: "/images/static/sub1.svg",
            link: "/categories/"
        },
        {
            id: 2,
            img: "/images/static/sub2.svg",
            link: "/categories/"
        },
        {
            id: 3,
            img: "/images/static/sub3.svg",
            link: "/categories/"
        },
        {
            id: 4,
            img: "/images/static/sub4.svg",
            link: "/categories/"
        },
        {
            id: 5,
            img: "/images/static/sub5.svg",
            link: "/categories/"
        },
        {
            id: 6,
            img: "/images/static/sub6.svg",
            link: "/categories/"
        },
    ];

    return (
        <div className={"TopSubcateg"}>
            <h4 className={"title"}>Популярные подкатегории</h4>
            {
                data.map(sub => (
                    <Link className={"inner"} to={sub.link} key={sub.id}>
                        <img src={sub.img} alt={""} />
                    </Link>
                ))
            }
        </div>
    );
};

export default TopSubcateg;
