import React from 'react';
import {Badge, Button} from "react-bootstrap";
import {deleteFromBriefcase} from "../../../functions/FeedbackForm/deleteFromForms";

const FeedbackTr = ({data,setRes}) => {

    //удалить сообщение
    const handleDeleteItem = () => {
        deleteFromBriefcase('feedbackForm',data.id)
            .then(() => setRes({error:false,res:"Удалено."}))
            .catch(() => setRes({error:true,res:"Ошибка удаления."}))
        setTimeout(() => setRes({error:false,res:false}),3000)
    }

    return (
        <tr className={"small"}>
            {/*дата*/}
            <td>{data.date}</td>
            {/*email*/}
            <td>{data.email}</td>
            {/*message*/}
            <td>{data.message}</td>
            {/*сотрудничество*/}
            <td>
                {
                    data.cooperation ?
                        <Badge bg={"success"}>Да</Badge> :
                        <Badge bg={"danger"}>Нет</Badge>
                }
            </td>
            {/*delete button*/}
            <td>
                <Button variant={"outline-danger"} size={"sm"} onClick={handleDeleteItem}>
                    Удалить
                </Button>
            </td>
        </tr>
    );
};

export default FeedbackTr;
