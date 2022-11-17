import React from 'react';
import {Badge, ListGroup, Offcanvas} from "react-bootstrap";
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import {Link} from "react-router-dom";

const NavbarCategoriesOffcanvas = ({showNavCateg,handleClose}) => {

    //блок для отображения всех категорий и подкатегорий

    const categories = useGetCategory("/categories");
    // console.log(categories,'NavbarCategoriesOffcanvas categories');

    return (
        <Offcanvas show={showNavCateg} onHide={handleClose}>

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <Badge>
                        Все категории
                    </Badge>
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <ListGroup className={"small"}>
                    {
                        categories.length &&
                        categories.map((category) => (
                            <ListGroup.Item key={category.id}>
                                <Link to={`/categories/${category.id}`}>
                                    {category.title}
                                </Link>
                                <ListGroup className={"small"}>
                                    {
                                        (Object.values(category.subcategories).length) &&
                                        (Object.values(category.subcategories)).map((sub) => (
                                            <ListGroup.Item key={sub.id} action>
                                                <Link to={`/categories/${category.id}/${sub.id}`}>
                                                    {sub.title}
                                                </Link>
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default NavbarCategoriesOffcanvas;
