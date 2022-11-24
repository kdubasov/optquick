import React from 'react';
import {Badge, Button} from "react-bootstrap";
import {deleteFromBriefcase} from "../../../functions/FeedbackForm/deleteFromForms";

const ComplaintsTr = ({data,setRes}) => {

    //удалить сообщение
    const handleDeleteItem = () => {
        deleteFromBriefcase('complaint',data.id)
            .then(() => setRes({error:false,res:"Удалено."}))
            .catch(() => setRes({error:true,res:"Ошибка удаления."}))
        setTimeout(() => setRes({error:false,res:false}),3000)
    }

    return (
        <tr className={"small"}>
            {/*дата*/}
            <td>{data.dateTime}</td>
            {/*отправитьель*/}
            <td>
                <Badge>uid: {data.nowUserId}</Badge><br/>
                <Badge>{data.nowUserPhone}</Badge><br/>
                <Badge>{data.nowUserEmail && data.nowUserEmail }</Badge>
            </td>
            {/*получатель*/}
            <td>
                <Badge>uid: {data.badUserId}</Badge>
            </td>

            <td>
                {data.message}
            </td>

            <td>
                <Button variant={"outline-danger"} size={"sm"} onClick={handleDeleteItem}>
                    Удалить
                </Button>
            </td>
        </tr>
    );
};

export default ComplaintsTr;
