import React from 'react';
import "./BreadCrumbs.css";
import {useGetUser} from "../../../../general-components/Auth/UserProfile/functions/useGetUser";
import {Link} from "react-router-dom";

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

    return (
        <div className={"BreadCrumbs"}>
            <Link to={"/categories"}>Каталог</Link>
            <img src="/images/icons/dot-dark.svg" alt="space"/>
            <Link to={`/categories/${category.id}`}>{category.title}</Link>
            <img src="/images/icons/dot-dark.svg" alt="space"/>
            <Link to={`/categories/${category.id}/${subcategory.id}`}>{subcategory.title}</Link>
            <img src="/images/icons/dot-dark.svg" alt="space"/>
            <p>{product.title}</p>
        </div>
    );
};

export default BreadCrumbs;
