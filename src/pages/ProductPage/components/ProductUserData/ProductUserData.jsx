import React from 'react';
import {Link} from "react-router-dom";
import "./ProductUserData.css";

const ProductUserData = ({userData,productData}) => {

    //смотрим все ли данные профиля заполнены (для вывода таблички)
    const checkUserData = () => {
        if (Object.values(userData)){
            for (let value in Object.values(userData)) {
                if(!Boolean(Object.values(userData)[value])){
                    return false;
                }
            }
        }
        return true;
    }

    return (
        <div className={"ProductUserData"}>

            <div className={"inner"}>
                <p className={"title"}>Продавец:</p>
                <Link to={`/user/${productData.userUid}`}>
                    {userData.surname + ' ' + userData.name}
                    {
                        checkUserData() &&
                        <img
                            alt={"user-success"}
                            className={"mx-1"}
                            src={"/images/icons/user-success.svg"}
                        />
                    }
                </Link>
            </div>

            <div className={"inner"}>
                <p className={"title"}>Дата регистрации:</p>
                <p className="bottom">
                    {userData.dateRegistr}
                </p>
            </div>

            <hr/>

            <footer>
                {checkUserData() ?
                    <p>
                        <img src="/images/icons/sccess.svg" alt="good"/>
                        Подтвержденный профиль
                    </p>:
                    <p className={"red"}>
                        <img src="/images/icons/danger.svg" alt="good"/>
                        Профиль не подтвержден
                    </p>
                }

                <Link className={"red"} to={`/user/${productData.userUid}`}>
                    <img src="/images/icons/danger.svg" alt="good"/>
                    Пожаловаться на продавца
                </Link>
            </footer>

        </div>
    );
};

export default ProductUserData;
