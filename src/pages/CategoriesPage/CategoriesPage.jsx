import React from 'react';
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import CategoriesCard from "./CategSubCard/CategSubCard";
import "./CategoriesPage.css";

const CategoriesPage = () => {

    const data = useGetCategory("/categories");
    // console.log(data);

    return (
        <div className={'CategoriesPage container'}>
            <h3 className={"title"}>
                Все категории
            </h3>

            {
                (data && data.length) ?
                    <div className={"sub-container"}>
                        {
                            data.map(categ => (
                                <CategoriesCard key={categ.id} categ={categ} />
                            ))
                        }
                    </div>:
                    <p className={"no-data"}>
                        Катогории пока недоступны, пожалуйста попробуйте позже.
                        Вы можете попробовать перезагрузить страницу, если это не поможет,
                        пожалуйста, сообщите о проблеме в поддержку.
                    </p>
            }
        </div>
    );
};

export default CategoriesPage;
