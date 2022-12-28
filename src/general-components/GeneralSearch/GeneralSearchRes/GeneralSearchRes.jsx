import React from 'react';
import "./GeneralSearchRes.css";
import {Link} from "react-router-dom";

const GeneralSearchRes = ({result,setFocus}) => {

    // console.log(result);

    return (
        <div className={'GeneralSearchRes'} style={{minHeight:200}}>

            {/*кнопка для того чтобы скрыть результаты поиска*/}
            <header>
                <button onClick={() => setFocus(false)} className={"but-blue"}>
                    Скрыть результаты поиска
                </button>
                <Link to={"/categories"}>
                    <button onClick={() => setFocus(false)} className={"but-green"}>
                        Перейти к каталогу
                    </button>
                </Link>
            </header>

            <div className={"block"}>
                {
                    result.products.length ?
                        <h5>Товары</h5>:
                        <p className={"no-res small"}>Товары по данному запросу не найдены</p>
                }
                <div className="inner">
                    {
                        result.products.slice(0,5).map(prod => (
                            <Link
                                to={`/categories/${prod.selectCategory}/${prod.selectSubCategory}/${prod.id}`}
                                key={prod.id}
                            >
                                {prod.title}
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className={"block"}>
                {
                    result.categories.length ?
                        <h5>Категории</h5>:
                        <p className={"no-res small"}>Категории по данному запросу не найдены</p>
                }
                <div className="inner">
                    {
                        result.categories.slice(0,5).map(categ => (
                            <Link to={`/categories/${categ.id}`} key={categ.id + categ.category}>
                                {categ.title}
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className={"block"}>
                {
                    result.subcategories.length ?
                        <h5>Подкатегории</h5>:
                        <p className={"no-res small"}>Подкатегории по данному запросу не найдены</p>
                }
                <div className="inner">
                    {
                        result.subcategories.slice(0,5).map(sub => (
                            <Link to={`/categories/${sub.category}/${sub.id}`} key={sub.id + sub.category}>
                                {sub.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );

};

export default GeneralSearchRes;
