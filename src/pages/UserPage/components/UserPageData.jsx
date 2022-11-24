import React from 'react';
import {Alert, Badge, ListGroup, ListGroupItem} from "react-bootstrap";

const UserPageData = ({data}) => {

    //смотрим все ли данные профиля заполнены (для вывода таблички)
    const checkUserData = () => {
        for (let value in Object.values(data)) {
            if(!Boolean(Object.values(data)[value])){
                return false;
            }
        }
        return true;
    }

    return (
        <div className={"w-100 my-3 p-2 border d-flex align-items-center justify-content-around"}>

            {/*user photo*/}
            <img
                style={{width:"30%"}}
                src={data.photo ? data.photo : "https://e1.pngegg.com/pngimages/12/720/png-clipart-gray-icons-question-mark-thumbnail.png"}
                alt={data.surname + ' ' + data.name}
            />

            <ListGroup className={"w-50 mx-2"}>
                <ListGroupItem>
                    {data.surname + ' ' + data.name}
                </ListGroupItem>

                <ListGroup.Item>
                    Дата регистрации:
                    <Badge className={"mx-1"}>{data.dateRegistr}</Badge>
                </ListGroup.Item>

                <ListGroupItem>
                    Емаил пользователя:
                    <Badge className={"mx-1"}>{data.email}</Badge>
                </ListGroupItem>

                <ListGroupItem>
                    Телефон пользователя:
                    <Badge className={"mx-1"}>
                        {data.phoneNumber}
                    </Badge>
                </ListGroupItem>

                {
                    (data.vk && data.telegram) &&
                    <ListGroupItem>
                        Другие ссылки:
                        <Badge className={"mx-1"} bg={"dark"}>
                            Телеграм ник:
                            {" " + data.telegram}
                        </Badge>

                        <a href={data.vk} target={"_blank"} rel={"noreferrer"}>
                            <Badge className={"mx-1"}>
                                Перейти к вк
                            </Badge>
                        </a>
                    </ListGroupItem>
                }

                <ListGroupItem>
                    {checkUserData() ?
                        <Alert className={"small p-2 m-0"} variant={"success"}>Подтвержденный профиль</Alert>:
                        <Alert className={"small p-2 m-0"} variant={"danger"}>Продавец не заполнил все данные профиля.</Alert>
                    }
                </ListGroupItem>
            </ListGroup>

        </div>
    );
};

export default UserPageData;
