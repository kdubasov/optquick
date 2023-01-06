import React from 'react';
import {Alert, Badge, ListGroup} from "react-bootstrap";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";
import UsersListUserItem from "./UsersListUserItem";

const UsersList = () => {

    const users = useGetCategory("/users");
    // console.log(users,"UsersList");

    return (
        <div className={"UsersList py-3"}>
            <h4><Badge>Список пользователей</Badge></h4>

            {
                users.length ?
                    <ListGroup>
                        {
                            users
                                .filter(user => Boolean(user.email) === true)
                                .map(user => (
                                    <UsersListUserItem key={user.id} user={user} />
                            ))
                        }
                    </ListGroup>:
                    <Alert className={"p-2 small"} variant={"secondary"}>
                        Пользователей нет
                    </Alert>
            }
        </div>
    );
};

export default UsersList;
