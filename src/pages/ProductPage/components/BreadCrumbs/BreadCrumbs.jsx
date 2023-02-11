import React from 'react';
import {useGetUser} from "../../../../general-components/Auth/UserProfile/functions/useGetUser";
import {Link} from "react-router-dom";
import {getCutWord} from "../../../../functions/getCutWord";

//css
import "./BreadCrumbs.css";
import "./BreadCrumbsMedia.css";
import {useMediaQuery} from "react-responsive";

const BreadCrumbs = ({product}) => {

    // console.log(product,"product data in BreadCrumbs");

    //category
    const urlCategory = `/categories/${product.selectCategory}`;
    const category = useGetUser(urlCategory);
    // console.log(category);

    //subcategory
    const urlSubcategory = `/categories/${product.selectCategory}/subcategories/${product.selectSubCategory}`;
    const subcategory = useGetUser(urlSubcategory);
    // console.log(subcategory);

    //media query
    const media500px = useMediaQuery({query: '(max-width: 500px)'});

    return (
        <div className={"BreadCrumbs"}>
            {
                !media500px &&
                <>
                    <Link to={"/categories"}>Каталог</Link>
                    <img src="/images/icons/dot-dark.svg" alt="space"/>
                    <Link to={`/categories/${category.id}`}>{category.title}</Link>
                    <img src="/images/icons/dot-dark.svg" alt="space"/>
                </>
            }

            <Link to={`/categories/${category.id}/${subcategory.id}`}>{subcategory.title}</Link>
            <img src="/images/icons/dot-dark.svg" alt="space"/>
            <p>{getCutWord(product.title,20)}</p>
        </div>
    );
};

export default BreadCrumbs;
