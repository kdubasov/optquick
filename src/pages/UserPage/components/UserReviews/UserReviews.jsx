import React, {useState} from 'react';
import {Alert, Button} from "react-bootstrap";
import UserComplaintModal from "./UserСomplaintModal";

const UserReviews = ({userId,nowUser}) => {

    const [show,setShow] = useState(false);

    if (nowUser){
        return (
            <div className={"w-100 p-2 border"}>

                <Button size={"sm"} variant={"danger"} onClick={() => setShow(true)}>
                    Пожаловаться на продавца
                </Button>

                {/*модальное окно с формой жалобы*/}
                <UserComplaintModal nowUser={nowUser} userId={userId} show={show} onHide={() => setShow(false)} />

            </div>
        );
    }else {
        return (
            <Alert className={"w-50 small p-2"}>
                Для того чтобы оставить отзыв о продавце или
                отправить на него жалобу, вы должны авторизоваться.
            </Alert>
        );
    }
};

export default UserReviews;
