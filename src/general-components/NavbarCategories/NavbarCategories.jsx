import React,{useState} from 'react';
import NavbarCategoriesOffcanvas from "./NavbarCategoriesOffcanvas";
import "./NavbarCategories.css";

const NavbarCategories = () => {

    const [showNavCateg, setShowNavCateg] = useState(false);

    const handleClose = () => setShowNavCateg(false);
    const handleShow = () => setShowNavCateg(true);

    return (
        <div className={"NavbarCategories"}>
            <button className={"but-blue"} onClick={handleShow}>
                <img src="/images/icons/menu.svg" alt=""/>
                Все категории
            </button>

            <NavbarCategoriesOffcanvas handleClose={handleClose} showNavCateg={showNavCateg} />
        </div>
    );
};

export default NavbarCategories;
