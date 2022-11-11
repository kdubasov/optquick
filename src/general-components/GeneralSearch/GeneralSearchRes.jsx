import React from 'react';
import {Alert, Badge, Button, ListGroup} from "react-bootstrap";
import CardProduct from "../../pages-components/AdminPage/Products/CardProduct/CardProduct";
import SubCard from "../../pages-components/SubcategoriesComps/SubCard";
import CategoriesCard from "../../pages-components/CategoriesComps/CategCard";

const GeneralSearchRes = ({result,setFocus}) => {


    if (Object.values(result).length){
        return (
            <div className={'GeneralSearchRes mt-2 border'} style={{minHeight:200}}>

                {/*кнопка для того чтобы скрыть результаты поиска*/}
                <Button onClick={() => setFocus(false)} className={"m-1"} size={"sm"}>
                    Скрыть результаты поиска
                </Button>

                <div className={"d-flex flex-wrap m-1 p-3 border"}>
                    <Badge className={"w-100"}>Товары</Badge>
                    {
                        result.products.map(prod => (
                            <CardProduct key={prod.id} product={prod} />
                        ))
                    }
                    {
                        !result.products.length &&
                        <Alert className={"p-2 small m-0"}>Товары по данному запросу не найдены</Alert>
                    }
                </div>

                <div className={"d-flex flex-wrap m-1 p-3 border"}>
                    <Badge className={"w-100"}>Подкатегории</Badge>
                    <ListGroup>
                        {
                            result.subcategories.map(sub => (
                                <SubCard key={sub.id} sub={sub} />
                            ))
                        }
                    </ListGroup>
                    {
                        !result.subcategories.length &&
                        <Alert className={"p-2 small m-0"}>Подкатегории по данному запросу не найдены</Alert>
                    }
                </div>

                <div className={"d-flex flex-wrap m-1 p-3 border"}>
                    <Badge className={"w-100"}>Категории</Badge>
                    <ListGroup>
                        {
                            result.categories.map(categ => (
                                <CategoriesCard key={categ.id} categ={categ} />
                            ))
                        }
                    </ListGroup>
                    {
                        !result.categories.length &&
                        <Alert className={"p-2 small m-0"}>Категории по данному запросу не найдены</Alert>
                    }
                </div>
            </div>
        );
    }else {
        result (
            <Alert variant={"danger"}>
                По вашему запросу результаты не найдены, пожалуйста попробуйте другой запрос.
            </Alert>
        )
    }
};

export default GeneralSearchRes;
