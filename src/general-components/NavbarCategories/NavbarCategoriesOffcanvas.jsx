import React from 'react';
import {Alert, ListGroup, Offcanvas} from "react-bootstrap";
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import {Link} from "react-router-dom";

const NavbarCategoriesOffcanvas = ({showNavCateg, handleClose}) => {

    //блок для отображения всех категорий и подкатегорий

    const categories = useGetCategory("/categories");
    // console.log(categories,'NavbarCategoriesOffcanvas categories');

    return (
        <Offcanvas show={showNavCateg} onHide={handleClose}>

            <Offcanvas.Header closeButton>
                <h4 className={"m-0"}>
                    Все категории
                </h4>
            </Offcanvas.Header>

            <Offcanvas.Body>
                {
                    categories.length ?
                        <ListGroup className={"small"}>
                            {
                                categories.map((category) => (
                                    <ListGroup.Item key={category.id}>
                                        <Link to={`/categories/${category.id}`}>
                                            <img src={category.iconImage} alt={category.title} width={30} />
                                            {category.title}
                                        </Link>
                                        <ListGroup className={"small"}>
                                            {
                                                category.subcategories &&
                                                (Object.values(category.subcategories)).map((sub) => (
                                                    <ListGroup.Item key={sub.id} action>
                                                        <Link to={`/categories/${category.id}/${sub.id}`}>
                                                            <img src={sub.iconImage} alt={sub.title} width={30} />
                                                            {sub.title}
                                                        </Link>
                                                    </ListGroup.Item>
                                                ))
                                            }
                                        </ListGroup>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup> :
                        <Alert className={"small p-2"}>
                            Полный список категорий пока не доступен, пожалуйста, попробуйте позже.
                        </Alert>
                }
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default NavbarCategoriesOffcanvas;
