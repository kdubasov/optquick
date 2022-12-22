import React, {useState} from 'react';
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import {Alert, Badge} from "react-bootstrap";
import {Link} from "react-router-dom";
import CardProduct from "../../general-components/CardProduct/CardProduct";
import SubProductSort from "../../pages-components/SubcategoriesComps/SubProductSort";

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
    // console.log(dataSort)

    return (
        <div className={'SubProductsPage container'}>

            <header>

                <Badge bg={"secondary"} className={'my-3'}>
                    <Link style={{color:"white"}} to={`/categories/${path[path.length - 2]}`}>
                        Назад к подкатегориям
                    </Link>
                </Badge><br />

                {//отображаем возможность сортировки только есть товары
                    Boolean(listProducts.length) &&
                    <div className="d-flex justify-content-between">
                        <Badge className={'mb-2'}>
                            На данной странице показаны товары подкакатегории
                            "{subcategoryTitle.map(sub => (sub.title))}"
                        </Badge>

                        <SubProductSort listProducts={listProducts} setDataSort={setDataSort} />
                    </div>
                }

            </header>


            <div className={'d-flex flex-wrap justify-content-between'}>
                {
                    Boolean(dataSort[0].length) ?
                        // ((dataSort[0].length)?dataSort[0]:listProducts)
                        dataSort[0].map(product => (
                            <CardProduct key={product.id} product={product} />
                        )):
                        <Alert className={"w-50 p-2 small"}>
                            Товаров в данной категории пока нет.
                        </Alert>
                }
            </div>

        </div>
    );
};

export default SubProductsPage;
