import React from 'react';
import {Link} from "react-router-dom";
import "./TopSubcateg.css";
import "./TopSubcategMedia.css";
import {useMediaQuery} from "react-responsive";

const TopSubcateg = () => {

    const data = [
        {
            id: 1,
            img: "/images/static/sub1.svg",
            link: "/categories/electronic"
        },
        {
            id: 2,
            img: "/images/static/sub2.svg",
            link: "/categories/houseProducts"
        },
        {
            id: 3,
            img: "/images/static/sub3.svg",
            link: "/notFound"
        },
        {
            id: 4,
            img: "/images/static/sub4.svg",
            link: "/categories/sport"
        },
        {
            id: 5,
            img: "/images/static/sub5.svg",
            link: "/categories/kidsProducts"
        },
        {
            id: 6,
            img: "/images/static/sub6.svg",
            link: "/categories/clothes/woomans"
        },
    ];

    //media query
    const media991px = useMediaQuery({query: '(max-width: 991px)'});

    return (
        <div className={"TopSubcateg"}>
            <h4 className={"title"}>Популярные подкатегории</h4>
            {
                (media991px ? data.slice(0,4) : data)
                .map(sub => (
                    <Link className={"inner"} to={sub.link} key={sub.id}>
                        <img src={sub.img} alt={""} />
                    </Link>
                ))
            }
        </div>
    );
};

export default TopSubcateg;
