import React, {useEffect, useState} from 'react';
import {Alert, Offcanvas} from "react-bootstrap";
import {useGetCategory} from "../../pages-functions/AdminPage/Categories/useGetCategory";
import {Link} from "react-router-dom";

//блок для отображения всех категорий и подкатегорий
const NavbarCategoriesOffcanvas = ({showNavCateg, handleClose}) => {

    //выбранная категория
    const [categorySelect,setCategorySelect] = useState("");
    const [subcategory,setSubcategory] = useState([]);
    const [noSubcateg,setNoSubcateg] = useState("");
    // console.log(subcategory,"subcategory in NavbarCategoriesOffcanvas");

    const categories = useGetCategory("/categories");
    // console.log(categories,'NavbarCategoriesOffcanvas categories');

    useEffect(() => {
        if (categorySelect){
            if(categories.filter(elem => elem.id === categorySelect)[0]["subcategories"]){
                setNoSubcateg("")
                setSubcategory(Object.values(categories.filter(elem => elem.id === categorySelect)[0]["subcategories"]))
            }else {
                setSubcategory([])
                setNoSubcateg("Подкатегории не найдены.")
            }
        }
    }, [categories,categorySelect]);


    return (
        <Offcanvas className={"NavbarCategoriesOffcanvas"} show={showNavCateg} onHide={handleClose}>

            <Offcanvas.Header closeButton>
                <h5 className={"m-0"}>Список категорий</h5>
            </Offcanvas.Header>

            <Offcanvas.Body>
                {
                    categories.length ?
                        <div className={"content"}>
                            <div className={"left"}>
                                {
                                    categories.map(category => (
                                        <button
                                            disabled={categorySelect === category.id}
                                            key={category.id}
                                            onClick={() => setCategorySelect(category.id)}
                                        >
                                            <img src={category.iconImage} alt={category.title} width={30} />
                                            {category.title}
                                        </button>
                                    ))
                                }
                            </div>
                            {
                                (Boolean(subcategory.length) || noSubcateg) &&
                                <div className={"right"}>
                                    {
                                        subcategory.map(sub => (
                                            <Link to={`/categories/${sub.category}/${sub.id}`} key={sub.id}>
                                                {sub.title}
                                            </Link>
                                        ))
                                    }
                                    {
                                        noSubcateg &&
                                        <div className={"cont-noSubcateg"}>
                                            <p className={"small"}>
                                                {noSubcateg}
                                            </p>
                                        </div>
                                    }
                                </div>
                            }
                        </div> :
                        <Alert className={"small p-2"}>
                            Полный список категорий пока недоступен, пожалуйста, попробуйте позже.
                        </Alert>
                }
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default NavbarCategoriesOffcanvas;
