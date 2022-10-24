import React, {useState} from 'react';
import {Badge, InputGroup} from "react-bootstrap";
import AddProductSelect from "./AddProducts/AddProductCategSelect";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";

const ListProducts = () => {

    //for select input
    const [selectCategory,setSelectCategory] = useState('');
    const [selectSubCategory,setSubSelectCategory] = useState('');
    const link = `/categories/${selectCategory}/subcategories/${selectSubCategory}/products`
    // console.log(selectCategory,selectSubCategory);

    console.log(useGetCategory(link))

    return (
        <div className={'ListProducts p-1 border mb-1'}>
            <h3><Badge>Список товаров</Badge></h3>

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
        </div>
    );
};

export default ListProducts;
