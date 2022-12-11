import React from 'react';
import {Badge, ListGroup, ListGroupItem} from "react-bootstrap";

const UsersListUserItem = ({user}) => {
    return (
        <ListGroupItem key={user.id} className={"d-flex align-items-center small"}>
            {
                user.photo &&
                <img src={user.photo} alt={user.name} width={100} />
            }

            <ListGroup className={"mx-2 small"}>
                <ListGroupItem>{user.id}</ListGroupItem>
                <ListGroupItem>{user.email}</ListGroupItem>
                <ListGroupItem>{user.phoneNumber}</ListGroupItem>
                <ListGroupItem>{user.name + " " + user.surname}</ListGroupItem>
                <ListGroupItem><Badge>Telegram:</Badge> {user?.telegram}</ListGroupItem>
                <ListGroupItem><Badge>VK:</Badge> {user?.vk}</ListGroupItem>
            </ListGroup>
        </ListGroupItem>
    );
};

export default UsersListUserItem;
