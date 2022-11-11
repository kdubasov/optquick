import React from 'react';
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import {Alert, Badge, ListGroup} from "react-bootstrap";
import CategoriesCard from "../../pages-components/CategoriesComps/CategCard";

const CategoriesPage = () => {

    const data = useGetCategory("/categories");
    // console.log(data);

    return (
        <div className={'CategoriesPage container'}>
            <Badge className={'mt-4 mb-2'}>Категории</Badge>

            {
                (data && data.length) ?
                    <ListGroup>
                        {
                            data.map(categ => (
                                <CategoriesCard key={categ.id} categ={categ} />
                            ))
                        }
                    </ListGroup>:
                    <Alert className={'p-2 small'}>
                        Катогории пока недоступны, пожалуйста попробуйте позже.
                    </Alert>
            }
        </div>
    );
};

export default CategoriesPage;
