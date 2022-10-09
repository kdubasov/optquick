import React from 'react';
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import {Badge, ListGroup, ListGroupItem, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

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
                                <ListGroupItem className={'d-flex align-items-center'} key={categ.id}>
                                    <img style={{borderRadius:5}} height={120} src={categ.image} alt=""/>
                                    <Link to={`/categories/${categ.id}`} className={'m-0 mx-2'}>{categ.title}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>:
                    <Spinner animation={'border'} variant={"primary"} />
            }
        </div>
    );
};

export default CategoriesPage;
