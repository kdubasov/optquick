import React, {useState} from 'react';
import {handleDeleteCategory} from "../../../pages-functions/AdminPage/Categories/handleDeleteCategory";
import {Button} from "react-bootstrap";

const DeleteCategoryButton = ({url,text = false}) => {

    //для подтверждения удаления
    const [confirm,setConfirm] = useState(false)

    return (
        <>
            {
                confirm?
                    <Button
                        size={"sm"}
                        variant={`outline-success`}
                        onClick={() => handleDeleteCategory(url)}
                    >
                        Подтвердить
                    </Button>:
                    <Button
                        size={"sm"}
                        variant={`outline-danger`}
                        onClick={() => setConfirm(true)}
                    >
                        {text ? text : "Удалить"}
                    </Button>
            }
        </>
    );
};

export default DeleteCategoryButton;
