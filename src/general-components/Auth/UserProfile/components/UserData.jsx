import React from 'react';
import {Badge} from "react-bootstrap";
import ConfirmButton from "../../../GeneralButtons/ConfirmButton";
import {useUserAuth} from "../../../../context/AuthContext";
import {useNavigate} from "react-router-dom";

const UserData = () => {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="UserData p-4 mt-3 border w-25 d-flex flex-wrap align-content-center">

            <p className={'mb-2'}>
                <Badge bg={"secondary"}>ID:</Badge>
                <Badge className={'mx-1'}>{user.uid && user.uid.slice(0,10) + '...'}</Badge>
            </p>

            <p className={'mb-2 d-flex'}>
                <Badge bg={"secondary"}>Телефон:</Badge>
                <Badge className={'mx-1'}>{user && user.phoneNumber}</Badge>
            </p>

            <ConfirmButton text={'Выйти из аккаунта'} func={handleLogout} />
        </div>
    );
};

export default UserData;
