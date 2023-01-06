import React, {useState} from 'react';
import {handleDeleteCategory} from "../../../pages-functions/AdminPage/Categories/handleDeleteCategory";

const DeleteCategoryButton = ({url,text = false}) => {

    //для подтверждения удаления
    const [confirm,setConfirm] = useState(false)

    return (
        <>
            {
                confirm?
                    <button
                        className={"but-green"}
                        onClick={() => handleDeleteCategory(url)}
                    >
                        Подтвердить
                    </button>:
                    <button
                        className={"but-red"}
                        onClick={() => setConfirm(true)}
                    >
                        {text ? text : "Удалить"}
                    </button>
            }
        </>
    );
};

export default DeleteCategoryButton;
