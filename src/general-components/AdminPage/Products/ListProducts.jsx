import React, {useState} from 'react';
import {Badge, InputGroup} from "react-bootstrap";
import AddProductSelect from "../../../pages/PostProductPage/AddProducts/AddProductsSelect";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";
import CardProduct from "../../CardProduct/CardProduct";

const ListProducts = () => {

    //for select input
    const [selectCategory,setSelectCategory] = useState('');
    const [selectSubCategory,setSubSelectCategory] = useState('');
    // console.log(selectCategory,selectSubCategory);

    const linkDB = `/categories/${selectCategory}/subcategories/${selectSubCategory}/products`;
    const listProducts = useGetCategory(linkDB);
    // console.log(listProducts,'listProducts in ListProducts')

    return (
        <div className={'ListProducts p-1 border mb-1 d-flex flex-wrap'}>
            <h4><Badge>Список товаров</Badge></h4>

            <InputGroup>
                <InputGroup className="mb-1 px-1">
                    {/*select for categories*/}
                    <AddProductSelect state={selectCategory} setState={setSelectCategory} text={'категорию'} url={'/categories'} />
                    {//select for subcategories
                        selectCategory &&
                        <AddProductSelect state={selectSubCategory} setState={setSubSelectCategory} text={'подкатегорию'} url={`/categories/${selectCategory}/subcategories`} />
                    }
                </InputGroup>
            </InputGroup>

            {
                listProducts.length?
                    listProducts.map(product => (
                        <CardProduct key={product.id} product={product} />
                    )):
                    <Badge className={"text-center w-100"}>
                        Вы не выбрали родительские категории или товаров в данной категории пока нет.
                    </Badge>
            }
        </div>
    );
};

export default ListProducts;
