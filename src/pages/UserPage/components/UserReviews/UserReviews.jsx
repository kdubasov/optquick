import React, {useState} from 'react';
import {Alert, Button} from "react-bootstrap";
import UserComplaintModal from "./UserСomplaintModal";
import {useGetUser} from "../../../../general-components/Auth/UserProfile/functions/useGetUser";
import ReviewsForm from "./ReviewsForm";

const UserReviews = ({userId,nowUser}) => {

    //user data from realtime database
    const nowUserData = useGetUser(`/users/${nowUser.uid}`);
    // console.log(nowUserData,"user data in UserReviews");

    //modal show
    const [show,setShow] = useState(false);

    if (nowUser && nowUserData.email){
        return (
            <div className={"w-100 p-2 border d-flex align-items-center justify-content-around"}>

                {/*открыть модальное окно для жалоб*/}
                <Button size={"sm"} variant={"danger"} onClick={() => setShow(true)}>
                    Пожаловаться на продавца
                </Button>

                {/*отзывы*/}
                <ReviewsForm nowUserData={nowUserData} userId={userId} nowUser={nowUser} />

                {/*модальное окно с формой жалобы*/}
                <UserComplaintModal nowUser={nowUser} userId={userId} show={show} onHide={() => setShow(false)} userData={nowUserData} />

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
