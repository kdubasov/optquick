import React from 'react';
import {Alert, Badge, ListGroup, ListGroupItem} from "react-bootstrap";
import {useGetUser} from "../../../general-components/Auth/UserProfile/functions/useGetUser";
import {Link} from "react-router-dom";

const ProductUserData = ({productData}) => {

    const userData = useGetUser(`/users/${productData.userUid}`);
    // console.log(productData,'props data in ProductUserData');
    // console.log(userData,'userData in ProductUserData');

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
        <div className={"ProductUserData my-2"}>
            <h6><Badge className={"fw-light"} bg={"secondary"}>Информация о продавце</Badge></h6>

            <ListGroup className={"small"}>

                <ListGroup.Item>
                    Продавец:
                    <Badge className={"mx-1"}>
                        <Link className={"text-white"} to={`/user/${productData.userUid}`}>
                            {userData.surname + ' ' + userData.name}
                        </Link>
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item>
                    Дата регистрации:
                    <Badge className={"mx-1"}>{userData.dateRegistr}</Badge>
                </ListGroup.Item>

                {
                    productData.showEmailAddress &&
                    <ListGroupItem>
                        Емаил пользователя:
                        <Badge className={"mx-1"}>{userData.email}</Badge>
                    </ListGroupItem>
                }

                {
                    productData.showPhoneNumber &&
                    <ListGroupItem>
                        Телефон пользователя:
                        <Badge className={"mx-1"}>
                            {userData.phoneNumber && userData.phoneNumber}
                        </Badge>
                    </ListGroupItem>
                }

                <ListGroupItem>
                    {checkUserData() ?
                        <Alert className={"small p-2"} variant={"success"}>Подтвержденный профиль</Alert>:
                        <Alert className={"small p-2"} variant={"danger"}>Продавец не заполнил все данные профиля.</Alert>
                    }
                </ListGroupItem>

            </ListGroup>
        </div>
    );
};

export default ProductUserData;
