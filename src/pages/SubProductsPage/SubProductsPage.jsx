import React, {useState,useEffect} from 'react';
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import {Link} from "react-router-dom";
import CardProduct from "../../general-components/CardProduct/CardProduct";
import SubProductSort from "./SubProductSort/SubProductSort";
import "./SubProductsPage.css";

const SubProductsPage = () => {

    const path = (window.location.pathname).split('/');
    // console.log(path)
    //['', 'categories', 'clothes', 'womenSwimsuits']

    const linkDB = `/categories/${path[path.length - 2]}/subcategories/${path[path.length - 1]}/products`;
    const listProducts = useGetCategory(linkDB);
    // console.log(listProducts,'listProducts in SubProductsPage');

    //for title category
    const dataSubCategories = useGetCategory(`/categories/${path[path.length - 2]}/subcategories`);
    const subcategoryTitle = dataSubCategories.filter(sub => sub.id === path[path.length - 1]);

    //for sort
    const [dataSort,setDataSort] = useState([[],false]);
    // console.log(dataSort);

    //set data sort state
    useEffect(() => {
        if (listProducts.length){
            setDataSort([[...listProducts],false])
        }
    }, [listProducts]);


    return (
        <div className={'SubProductsPage container'}>

            <header>

                <Link to={`/categories/${path[path.length - 2]}`}>
                    Вернуться к подкатегориям
                </Link>

                {//отображаем возможность сортировки только есть товары
                    Boolean(listProducts.length) &&
                    <h3>
                        На данной странице показаны товары подкакатегории
                        "{subcategoryTitle.map(sub => (sub.title))}"
                    </h3>
                }

                {
                    dataSort[0].length > 1 &&
                    <SubProductSort listProducts={listProducts} setDataSort={setDataSort} />
                }

            </header>


            <div className={'container-products'}>
                {
                    Boolean(dataSort[0].length) ?
                        // ((dataSort[0].length)?dataSort[0]:listProducts)
                        dataSort[0].map(product => (
                            <CardProduct key={product.id} product={product} />
                        )):
                        <p className={"no-products"}>
                            Товаров категории
                            "{subcategoryTitle.map(sub => (sub.title))}"
                            пока нет.
                            В скором времени мы наполним товарами все категории,
                            а сейчас вы можете
                            <Link to={`/categories/${path[path.length - 2]}`}>
                                вернуться назад
                            </Link>
                            и посмотреть другие товары. Спасибо за понимание!
                        </p>
                }
            </div>

        </div>
    );
};

export default SubProductsPage;
