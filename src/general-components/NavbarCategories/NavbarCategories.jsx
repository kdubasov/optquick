import React,{useState} from 'react';
import {Button} from "react-bootstrap";
import NavbarCategoriesOffcanvas from "./NavbarCategoriesOffcanvas";

const NavbarCategories = () => {

    const [showNavCateg, setShowNavCateg] = useState(false);

    const handleClose = () => setShowNavCateg(false);
    const handleShow = () => setShowNavCateg(true);

    return (
        <>
            <Button size={"sm"} onClick={handleShow} className={"my-1"}>
                Все категории
            </Button>

            <NavbarCategoriesOffcanvas handleClose={handleClose} showNavCateg={showNavCateg} />
        </>
    );
};

export default NavbarCategories;
