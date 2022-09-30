import React, {useState} from 'react';
import {handleDeleteCategory} from "../../../pages-functions/AdminPage/Categories/handleDeleteCategory";
import {Button} from "react-bootstrap";

const DeleteCategoryButton = ({url}) => {

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
                        Удалить
                    </Button>
            }
        </>
    );
};

export default DeleteCategoryButton;
